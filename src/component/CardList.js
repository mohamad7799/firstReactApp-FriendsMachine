import Card from "./Card";

const CardList = ({robots}) => {
    return ( 
        <div className="App">

            {
                robots.map((data)=>{

                return (
                <Card 
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    email={data.email}
                ></Card>)
                })
            }

        </div>
    );
}

export default CardList;