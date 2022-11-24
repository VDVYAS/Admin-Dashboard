 import './Sidebar.css'

import React, { useState } from 'react'
import Logo from '../../image/logo.png'
import {motion} from 'framer-motion'
import {SidebarData} from '../Data/Data.jsx'
import {FaSignOutAlt} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai' ;


const Sidebar = () => {
    const [selected, setSelected] = useState(0);
  
    const [expanded, setExpaned] = useState(true)
  
    const sidebarVariants = {
      true: {
        left : '0'
      },
      false:{
        left : '-60%'
      }
    }
    console.log(window.innerWidth)
    return (
      <>
        <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
          <AiOutlineMenu />
        </div>
      <motion.div className='sidebar'
      variants={sidebarVariants}
      animate={window.innerWidth<=768?`${expanded}`:''}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
  
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.headinng}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <FaSignOutAlt />
          </div>
        </div>
      </motion.div>
      </>
    );
  };
  
  export default Sidebar;