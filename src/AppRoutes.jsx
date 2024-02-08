import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"
import Home from "./pages/home"
import Strolls from "./pages/strolls-bc-sc/strolls-bc-sc"



export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="passeios" element={<Strolls/>}/>
            </Routes>
        </Router>
    )
}