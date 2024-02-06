import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"
import HotelItaliaBC from "./pages/hotels/hotelItaliaBc/hotel-italia-bc"
import Home from "./pages/home"



export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </Router>
    )
}