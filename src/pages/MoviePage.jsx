
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function MoviePage() {
    const [oneMovie, setOneMovie] = useState([])
    const { id } = useParams();

    function getOneMovieData() {

        axios
            .get(`http://localhost:3000/movies/${id}`)
            .then((res) => {
                //console.log(res.data.items)
                setOneMovie(res.data.item)
                console.log(id)
            })
    }

    useEffect(getOneMovieData, [])



    return (
        <main>
            <div className="d-flex">
                <div className="card d-flex">
                    <img className="" src={oneMovie.image} alt="" />
                </div>
                <div>
                    <div className="px-5">
                        <h4>{oneMovie.title}</h4>

                        <p>{oneMovie.director}</p>
                        <p>{oneMovie.release_year}</p>

                        <p>{oneMovie.abstract}</p>
                        <p>{oneMovie.genere}</p>
                    </div>
                </div>
            </div>

        </main>
    )
}