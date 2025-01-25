
import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [movieList, setMovieList] = useState([])
    const [reviewList, setReviewList] = useState([])

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        axios
            .get("http://localhost:3000/movies")
            .then((res) => {
                //console.log(res.data.items)
                setMovieList(res.data.items)
            })
    }

    return (

        <GlobalContext.Provider value={{ movieList }} >
            {children}
        </GlobalContext.Provider>

    )

}

export { GlobalContext, GlobalProvider }