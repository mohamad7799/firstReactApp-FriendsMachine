const Card = ({name,id,email}) => {
    return ( 
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img style={{ width: '200px', height: '200px' }} src={`https://robohash.org/${id}?200*200`} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;