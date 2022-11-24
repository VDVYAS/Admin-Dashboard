import React from 'react'
import Cards from '../Cards/Cards'
import BasicTable from '../Table/Table'
import './Maindash.css'
export const Maindash = () => {
  return (
    <div className="Maindash">
        <h1>Dashboard</h1>
        <Cards/>
        <BasicTable/>
    </div>
  )
}
