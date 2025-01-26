
import { createContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [movieList, setMovieList] = useState([])
    const [reviewList, setReviewList] = useState([])
    const [oneMovie, setOneMovie] = useState([])

    useEffect(() => {
        getMovieListData()

    }, [])

    function getMovieListData() {
        axios
            .get("http://localhost:3000/movies")
            .then((res) => {
                console.log(res.data.items)
                setMovieList(res.data.items)
            })
    }
    const { id } = useParams

    function getOneMovieData() {
        axios
            .get(`http://localhost:3000/movies/${id}`)
            .then((res) => {
                //console.log(res.data.items)
                setOneMovie(res.data.items)
            })
    }

    return (

        <GlobalContext.Provider value={{ movieList, reviewList, oneMovie }} >
            {children}
        </GlobalContext.Provider>

    )

}

export { GlobalContext, GlobalProvider }