import React, {useState} from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import { Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import CardAllRestaurants from "../../components/cards/cards-all-restaurants/cards-all-restaurants"
import Title from "../../components/cards/shared-components/titles/title"
import ArrowBackButton from "../../components/menu/top-bar/arrow-back-button"
import dataOfSmallCardsFromRestaurants from "../../list-of-datas/list-of-data-all-restaurants/list-of-data-small-card-restaurants"
import SmallCardFilters from "../../components/cards/shared-components/small-cards-components/small-cards-filters"
import dataOfAllRestaurants from "../../list-of-datas/list-of-data-all-restaurants/list-of-data-all-restaurants"



export default function Restaurantes(){

    const [filteredData, setFilteredData] = useState([])
    const [clickedTitle, setClickedTitle] = useState("Restaurantes")

    const handleClick = (title) => {
        const filteredData = dataOfAllRestaurants.filter(item => item.tag && item.tag.includes(title.toLowerCase()))
        setFilteredData(filteredData)
        console.log(filteredData)
        if (filteredData.length > 0){
            setClickedTitle(title)
        }else{
            setClickedTitle("")
        }
    }

    const clearFilter = () => {
        setFilteredData([])
        setClickedTitle("")
    }
      

    return(
        <>
            <TopBar title={"Restaurantes"} leftComponent={<ArrowBackButton/>}/>
            <Toolbar/>
            <SmallCardFilters handleClick={handleClick} data={dataOfSmallCardsFromRestaurants} filteredData={filteredData} clearFilter={clearFilter}/>
            <Title title={clickedTitle}/>
            <CardAllRestaurants filteredData={filteredData}/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}