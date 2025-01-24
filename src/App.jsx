
import DefaultLayout from "./pages/DefaultLayout";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
          </Route >
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
