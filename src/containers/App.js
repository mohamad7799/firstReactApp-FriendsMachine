import { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>{return res.json();})
    .then(data=>{this.setState({robots:data})})
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const {robots,searchField}=this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if(!robots.length)
      {
        return(
            <div className="loading-container">
              <h1 className="loading-message">Loading...</h1>
            </div>
          ) 
      }
    else
      {
        return (
          <div className='tc'>
            <h1 className='f1'>Friends Machine </h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
              <ErrorBoundry>
                <CardList robots={filteredRobots} />
              </ErrorBoundry>
            </Scroll>
            
          </div>
        );
      }
  }
}

export default App;
