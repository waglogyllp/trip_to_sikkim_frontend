import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Booking from "./pages/Booking"
import Packages from "./pages/Packages"
import Location from "./pages/Location"
import PackageDetails from "./pages/PackageDetails"
import Dashbord from "./Admin/Dashbord" // Correct capitalization
import Admin from "./Admin/AdminLogin"
import Addpack from "./Admin/AddPackages"
import BookDet from "./Admin/BookingDet"
import RemovePack from "./Admin/RemovePackages"
import Hotel from "./pages/Hotel"
import PackageDetailsPage from "./pages/PackageDetails"
const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/packages" element={<Packages />} />
                <Route
                    path="/packages/:slug"
                    element={<PackageDetails />}
                />{" "}
                {/* Dynamic Route */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/location" element={<Location />} />
                <Route path="/dashbord" element={<Dashbord />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/addpack" element={<Addpack />} />
                <Route path="/bookdet" element={<BookDet />} />
                <Route path="/removepack" element={<RemovePack />} />
                <Route path="/hotel" element={<Hotel />} />
                <Route path="/package/:slug" element={<PackageDetailsPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
