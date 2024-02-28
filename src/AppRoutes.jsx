import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"
import Home from "./pages/home"
import Strolls from "./pages/strolls-bc-sc/all-strolls-bc-sc"
import Categories from "./pages/pages-from-menu-bottom/all-categories"
import Highlight from "./pages/pages-from-menu-bottom/highlight"
import Restaurantes from "./pages/restaurantes-bc-sc/restaurantes-bc"
import Bars from "./pages/bars-bc-sc/bars-bc"
import NightClubs from "./pages/nightclubs-bc-sc/nightclubs-bc"
import HotelPage from "./pages/hotel/hotel-page"
import PharmacyPage from "./pages/services-from-concierge-and-home-page/pharmacies/pharmacy-page"
import LaundryPage from "./pages/services-from-concierge-and-home-page/laundries/laundry-page"
import CarRentalPage from "./pages/services-from-concierge-and-home-page/car-rental-agency/car-rental-page"
import ShuttlePage from "./pages/services-from-concierge-and-home-page/shuttle-services/shuttle-services"
import PageStrolls from "./pages/strolls-bc-sc/page-oceanic-aquarium-bc/oceanic-aquarium"
import PizzariaDistrettoBC from "./pages/restaurantes-bc-sc/pizzarias-bc/distretto-pizzaria"
import NewService from "./components/cards/concierge-cards/cards-from-services/cadastrar-serviço"
import MeetingRoomPage from "./pages/services-from-concierge-and-home-page/meeting-room/meeting-room"
import RoomServicePage from "./pages/services-from-concierge-and-home-page/room-service/room-service"
import MinibarServicePage from "./pages/services-from-concierge-and-home-page/minibar-service/minibar-service"


export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                 {/* rotas de menu bottom */}
                <Route exact path="/" element={<HotelPage/>}/>
                <Route exact path="/:id" element={<HotelPage/>}/>
                <Route exact path="/categories" element={<Categories/>}/>
                <Route exact path="/highlight" element={<Highlight/>}/>

                {/* rotas de serviços small cards*/}

                <Route exact path="/pharmacy" element={<PharmacyPage/>}/>
                <Route exact path="/laundries" element={<LaundryPage/>}/>
                <Route exact path="/car-rental-agency" element={<CarRentalPage/>}/>
                <Route exact path="/shuttle-services" element={<ShuttlePage/>}/>
                <Route exact path="/minibar-service" element={<MinibarServicePage/>}/>
                <Route exact path="/room-service" element={<RoomServicePage/>}/>
                <Route exact path="/meeting-room-service" element={<MeetingRoomPage/>}/>

                {/* rotas de parceiros terceirizados página geral */}
                <Route exact path="/strollsbc" element={<Strolls/>}/>
                <Route exact path="/restaurantesbc" element={<Restaurantes/>}/>
                <Route exact path="/barsbc" element={<Bars/>}/>
                <Route exact path="/nightclubsbc" element={<NightClubs/>}/>

                {/* rotas de passeios parceiros terceirizados páginas específicas */}       
                <Route exact path="/strolls-oceanic-aquarium-page-bc" element={<PageStrolls/>}/>

                {/* rotas de restaurantes parceiros terceirizados páginas específicas */} 
                <Route exact path="/distretto-tratoria" element={<PizzariaDistrettoBC/>}/>

            </Routes>
        </Router>
    )
}