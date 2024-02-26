import React, { useState } from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import { Toolbar } from "@mui/material"
import MenuBottomNavigation from "../../components/menu/menu-bottom/menu-bottom"
import CardAllBars from "../../components/cards/cards-all-bars/cards-all-bars"
import ArrowBackButton from "../../components/menu/top-bar/arrow-back-button"
import SmallCardFilters from "../../components/cards/shared-components/small-cards-components/small-cards-filters"
import dataOfAllBars from "../../list-of-datas/list-of-data-all-bars/list-of-data-all-bars"
import dataOfSmallCardsFromBars from "../../list-of-datas/list-of-data-all-bars/list-of-data-small-cards-bars"
import Title from '../../components/cards/shared-components/titles/title'


export default function Bars(){

    const [filteredData, setFilteredData] = useState([])
    const [clickedTitle, setClickedTitle] = useState("")

    const handleClick = (title) => {
        const filteredData = dataOfAllBars.filter(item => item.tag && item.tag.includes(title.toLowerCase()))
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
            <TopBar title={"Bares"} leftComponent={<ArrowBackButton/>}/>
            <Toolbar/>
            <SmallCardFilters handleClick={handleClick} data={dataOfSmallCardsFromBars} filteredData={filteredData} clearFilter={clearFilter}/>
            <Title title={clickedTitle} />
            <CardAllBars filteredData={filteredData}/>
            <Toolbar/>
            <MenuBottomNavigation/>
        </>
    )
}