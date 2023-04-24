import { BrowserRouter, Routes, Route } from "react-router-dom"
import Principal from "../views/Create"
import Search from "../views/Search"


const AppRouter = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/search" element={<Search />} />
    </Routes>
   </BrowserRouter>
  )
}

export default AppRouter
