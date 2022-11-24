import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {motion,AnimateSharedLayout} from 'framer-motion'
import './Card.css'
import {UilTimes} from  '@iconscout/react-unicons';
import Chart from "react-apexcharts";

const Card = (props) => {
    const [expanded, setexpanded] = useState(false)
  return (
   <AnimateSharedLayout>
        {
            expanded? (
                <ExapandedCard param={props} setexpanded={()=>setexpanded(false)}/> ):
            <CompactCard param={props} setexpanded={()=>setexpanded(true)}/>
        }
   </AnimateSharedLayout>
  )
}

//function compactcard
function CompactCard({param, setexpanded}){
    const Png =param.png;
    const percentage=param.barValue;
    return(
        <motion.div className="CompactCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        onClick={setexpanded}
        >
            <div className="radialBar">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
            <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
                <span >Last 24 Hours</span>
            </div>
        </motion.div>
    )
}

//function expanded 
function ExapandedCard({param, setexpanded}){
    const data = {
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
    
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
    
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["white"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
        },
      };
    return(
        <motion.div className="ExapandedCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        id= 'expandablecard'
        >
            <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
                <UilTimes onClick={setexpanded}/>
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
             <Chart series={param.series} type='area'options={data.options}/>
            </div>
            <span>Last 24 Hours</span>
        </motion.div>
    )
}
export default Card
