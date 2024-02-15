import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"
import Home from "./pages/home"
import Strolls from "./pages/strolls-bc-sc/all-strolls-bc-sc"
import Categories from "./pages/pages-from-menu-bottom/all-categories"
import Notifications from "./pages/pages-from-menu-bottom/notifications"
import Restaurantes from "./pages/restaurantes-bc-sc/restaurantes-bc"
import Bars from "./pages/bars-bc-sc/bars-bc"
import NightClubs from "./pages/nightclubs-bc-sc/nightclubs-bc"
import HotelPage from "./pages/hotel/hotel-page"
import PharmacyPage from "./pages/services-from-concierge-and-home-page/pharmacies/pharmacy-page"
import LaundryPage from "./pages/services-from-concierge-and-home-page/laundries/laundry-page"
import CarRentalPage from "./pages/services-from-concierge-and-home-page/car-rental-agency/car-rental-page"
import ShuttlePage from "./pages/services-from-concierge-and-home-page/shuttle-services/shuttle-services"
import PageStrolls from "./pages/strolls-bc-sc/page-strolls"

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/hotelpage" element={<HotelPage/>}/>
                <Route exact path="/categories" element={<Categories/>}/>
                <Route exact path="/notifications" element={<Notifications/>}/>
                <Route exact path="/pharmacy" element={<PharmacyPage/>}/>
                <Route exact path="/laundries" element={<LaundryPage/>}/>
                <Route exact path="/car-rental-agency" element={<CarRentalPage/>}/>
                <Route exact path="/shuttle-services" element={<ShuttlePage/>}/>
                <Route exact path="/strollsbc" element={<Strolls/>}/>
                <Route exact path="/strolls-page-bc" element={<PageStrolls/>}/>
                <Route exact path="/restaurantesbc" element={<Restaurantes/>}/>
                <Route exact path="/barsbc" element={<Bars/>}/>
                <Route exact path="/nightclubsbc" element={<NightClubs/>}/>
            </Routes>
        </Router>
    )
}