

export default function CardComponent({ data }) {


    return (
        <div className="row">

            <div className="card" >
                <img src="https://placehold.co/400x600/png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

{/* <div className="card">
            <img src={`https://image.tmdb.org/t/p/w342${el.el.
                poster_path}`} alt="" />
            <div className="overlay">
                <h4>{title}</h4>

                <p>{el.el.overview.substring(0, 200)}...</p>
                <p>Voto: {el.el.vote_average}</p>
                <p></p>
            </div>
        </div> */}
