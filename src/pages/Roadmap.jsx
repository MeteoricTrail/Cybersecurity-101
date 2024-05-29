import React from 'react'
import Management from '../components/Flipcards/Management'
import FirmOperations from '../components/Flipcards/FirmOperations'
import ITPractices from '../components/Flipcards/ITPractices'
import StockMarket from '../components/Flipcards/StockMarket'
import Reputation from '../components/Flipcards/Reputation'
import ConFirmOperations from '../components/Flipcards/ConFirmOperations'
import ConManagement from '../components/Flipcards/ConManagement'
import PeerEffects from '../components/Flipcards/PeerEffects'
import CircularGraphic from '../components/CircleImage'

const Roadmap = () => {
  return (
    <div className='Roadmap' style={{flex:"0"}}>
        <h1 style={{position:'fixed', left:'150px',top:'100px'}}>Determinants</h1>
        <h1 style={{position:'fixed', right:'160px',top:"100px" }}>Consequences</h1>
        <Management/>
        <FirmOperations/>
        <ITPractices/>
        <CircularGraphic />
        <StockMarket/>
        <Reputation/>
        <ConFirmOperations/>
        <ConManagement/>
        <PeerEffects/>
    </div>
  )
}

export default Roadmap;