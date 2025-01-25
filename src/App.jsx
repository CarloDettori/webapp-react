
import DefaultLayout from "./pages/DefaultLayout";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  const [moviesList, setMovieList] = useState([])

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
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>

              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/aboutus" element={<AboutUsPage />} />

            </Route >
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
