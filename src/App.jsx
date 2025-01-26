
import DefaultLayout from "./pages/DefaultLayout";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalContext, GlobalProvider } from "./context/GlobalContext";
import { useContext } from "react";

function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/">
                <Route index element={<HomePage />} />
                <Route path=":id" element={<MoviePage />} />
              </Route>
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
