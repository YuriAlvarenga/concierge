import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"
import Home from "./pages/home"
import Strolls from "./pages/strolls-bc-sc/strolls-bc-sc"
import Categories from "./pages/pages-from-menu-bottom/all-categories"
import Notifications from "./pages/pages-from-menu-bottom/notifications"
import Restaurantes from "./pages/restaurantes-bc-sc/restaurantes-bc"
import Bars from "./pages/bars-bc-sc/bars-bc"
import NightClubs from "./pages/nightclubs-bc-sc/nightclubs-bc"

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/categories" element={<Categories/>}/>
                <Route exact path="/notifications" element={<Notifications/>}/>
                <Route exact path="/strollsbc" element={<Strolls/>}/>
                <Route exact path="/restaurantesbc" element={<Restaurantes/>}/>
                <Route exact path="/barsbc" element={<Bars/>}/>
                <Route exact path="/nightclubsbc" element={<NightClubs/>}/>
            </Routes>
        </Router>
    )
}