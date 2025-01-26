import { Link } from "react-router-dom";

export default function CardComponent({ data }) {



    return (

        <div className="col-2">

            <div className="card">
                <img src={data.image} alt="" />
                <div className="overlay">
                    <h4>{data.title}</h4> <p>{data.release_year}</p>
                    <p>{data.director}</p>
                    <Link className="btn btn-primary link text-white" to="/{data.id}">Details</Link>
                </div>

            </div>

            {/* <div className="card" >
                <img src="https://placehold.co/400x600/png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
        </div>
    )
}

{/*  */ }
