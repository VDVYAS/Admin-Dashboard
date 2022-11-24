import React from 'react'
import './Update.css'
import {UpdatesData} from '../Data/Data.jsx'
export const Update = () => {
  return (
    <div className="Updates">
        {UpdatesData.map((update)=>{
            return(
                <div className="update">
                    <img src={update.img} alt="" />
                    <div className="noti">
                        <div>
                            <span className='name'>{update.name}</span>
                            <span className='decs'> {update.noti}</span>
                         </div>
                         <div>
                            <span className="time">{update.time}</span>
                         </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
