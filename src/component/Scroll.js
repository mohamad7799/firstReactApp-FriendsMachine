const Scroll = (props) => {
    return ( 

        <div style={{overflow:'scroll', boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', height:'800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;