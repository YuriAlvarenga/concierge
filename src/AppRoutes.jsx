import React, { useContext } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Strolls from "./pages/strolls-bc-sc/all-strolls-bc-sc"
import Categories from "./pages/pages-from-menu-bottom/all-categories"
import Restaurantes from "./pages/restaurantes-bc-sc/restaurantes-bc"
import HotelPage from "./pages/hotel/hotel-page"
import PharmacyPage from "./pages/hotel/services-from-hotel-page/pharmacies/pharmacy-page"
import LaundryPage from "./pages/hotel/services-from-hotel-page/laundries/laundry-page"
import CarRentalPage from "./pages/hotel/services-from-hotel-page/car-rental-agency/car-rental-page"
import ShuttlePage from "./pages/hotel/services-from-hotel-page/shuttle-services/shuttle-services"
import PageStrolls from "./pages/strolls-bc-sc/page-oceanic-aquarium-bc/oceanic-aquarium"
import PizzariaDistrettoBC from "./pages/restaurantes-bc-sc/pizzarias-bc/distretto-pizzaria"
import MeetingRoomPage from "./pages/hotel/services-from-hotel-page/meeting-room/meeting-room"
import RoomServicePage from "./pages/hotel/services-from-hotel-page/room-service/room-service"
import MinibarServicePage from "./pages/hotel/services-from-hotel-page/minibar-service/minibar-service"

import { HotelProvider } from "./context/context"
import Home from "./pages/home"
import ChannelListPage from "./pages/hotel/services-from-hotel-page/channel-list/channel-list-page"


export default function AppRoutes(){
    return(
        <Router>
            <HotelProvider>
                <Routes>
                    {/* rotas de menu bottom */}
                    
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/:id" element={<HotelPage/>}/>
                    <Route exact path="/restaurantesbc" element={<Restaurantes/>}/>
                    <Route exact path="/strollsbc" element={<Strolls/>}/>
                    <Route exact path="/categories" element={<Categories/>}/>

                    {/* rotas de serviços small cards*/}

                    <Route exact path="/pharmacy" element={<PharmacyPage/>}/>
                    <Route exact path="/laundries" element={<LaundryPage/>}/>
                    <Route exact path="/car-rental-agency" element={<CarRentalPage/>}/>
                    <Route exact path="/shuttle-services" element={<ShuttlePage/>}/>
                    <Route exact path="/minibar-service" element={<MinibarServicePage/>}/>
                    <Route exact path="/room-service" element={<RoomServicePage/>}/>
                    <Route exact path="/meeting-room-service" element={<MeetingRoomPage/>}/>
                    <Route exact path="/channel-list-card" element={<ChannelListPage/>}/>


                    {/* rotas de passeios parceiros terceirizados páginas específicas */}       
                    <Route exact path="/strolls-oceanic-aquarium-page-bc" element={<PageStrolls/>}/>

                    {/* rotas de restaurantes parceiros terceirizados páginas específicas */} 
                    <Route exact path="/distretto-tratoria" element={<PizzariaDistrettoBC/>}/>

                </Routes>
            </HotelProvider>
        </Router>
    )
}