function Card({id,title, body}) {
    return (
        <div className="card" style={{width: "18rem",border:"1px solid black",margin:"10px",textAlign:"center",position:"relative",left:"40%",backgroundColor:"lightblue", padding:"10px" }}>
            <div className="card-body">
                <p className="card-title">{id}</p>
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{body}</p>
            </div>
        </div>
    );
}

export default Card;