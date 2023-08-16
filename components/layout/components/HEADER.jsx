import React from 'react'
import TOPBAR from './TOPBAR'
import NAVBAR from './NAVBAR'

export default function HEADER() {
  return (
    <div className="header-container" id="header-container">
        <TOPBAR/>
        <NAVBAR/>
    </div>
  )
}
