
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function MoviePage() {
    const [oneMovie, setOneMovie] = useState([])
    const { id } = useParams()

    function getOneMovieData() {

        axios
            .get(`http://localhost:3000/movies/${id}`)
            .then((res) => {
                //console.log(res.data.items)
                setOneMovie(res.data.items)

            })
    }
    useEffect(getOneMovieData, [])

    console.log(id)

    return (

        <div className="col-2 d-flex">
            <img src={oneMovie.image} alt="" />
            <div className="card d-flex">

                <div>
                    <h4>{oneMovie.title}</h4> <p>{oneMovie.release_year}</p>
                    <p>{oneMovie.director}</p>

                    <p>{oneMovie.abstract}</p>
                    <p>{oneMovie.genere}</p>
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