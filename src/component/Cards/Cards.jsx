import React from 'react'
import './Cards.css'
import {CradsData} from '../Data/Data.jsx'
import Card from '../Card/Card.jsx'
const Cards = () => {
  return (
  <div className="Cards">
    {CradsData.map((card,id)=>{
        return(
            <div className="parentContainer">
                <Card
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.Value}
                png={card.png}
                series={card.series}
                />
            </div>
        )
    })}
  </div>
  )
}

export default Cards
