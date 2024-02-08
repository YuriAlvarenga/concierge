import React from "react"
import TopBar from "../../components/menu/top-bar/top-bar"
import CardComponent from "../../components/cards/hotel-cards/simple-card"



export default function Strolls(){
    return(
        <>
            <TopBar title={'Passeios'}/>
            <CardComponent gradientColors={['#1fe4f5, #3fbafe']} title={"Aquário"} horario={"09:00h às 21:00h"} status={"Aberto"}/>
            <CardComponent gradientColors={['#60efbc, #58d5c9']} title={"Jurassic Park"} horario={"09:00h às 20:00h"} status={"Aberto"}/>
            <CardComponent gradientColors={['#FFDAB9', '#FFA500']} title={"Roda Gigante"} horario={"09:00h às 21:30h"} status={"Fechado"}/>
            <CardComponent gradientColors={['#76b2fe, #b69efe']} title={"Barco Pirata"} horario={"09:00h às 21:30h"} status={"Fechado"}/>
        </>
    )
}