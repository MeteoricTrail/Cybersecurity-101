import React from 'react'
import Management from '../components/Flipcards/Management'
import FirmOperations from '../components/Flipcards/FirmOperations'
import ITPractices from '../components/Flipcards/ITPractices'
import InstitutionalEnvironmental from '../components/Flipcards/InstitutionalEnvrionmental'
import StockMarket from '../components/Flipcards/StockMarket'
import Reputation from '../components/Flipcards/Reputation'
import ConFirmOperations from '../components/Flipcards/ConFirmOperations'
import ConManagement from '../components/Flipcards/ConManagement'
import PeerEffects from '../components/Flipcards/PeerEffects'
import CircularGraphic from '../components/CircleImage'

const Roadmap = () => {
  return (
    <div className='Roadmap'>
        <h1 style={{position:'fixed', left:'150px',top:'100px'}}>Determinants</h1>
        <h1 style={{position:'fixed', right:'160px',top:"100px" }}>Consequences</h1>
        <Management/>
        <FirmOperations/>
        <ITPractices/>
        <InstitutionalEnvironmental/>
        <CircularGraphic/>
        <StockMarket/>
        <Reputation/>
        <ConFirmOperations/>
        <ConManagement/>
        <PeerEffects/>
    </div>
  )
}

const style = {
  leftContainer: {
    position: 'fixed',
    borderWidth: '1px',
    borderStyle: 'solid',
    height: '100px',
    padding: '20px',
    width: '300px',
    boxSizing: 'border-box'
  },
  whiteSpace: {
    height: '100px',
  },
  roadmapStyle: {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px'
  },
  rightContainer: {
    position: 'fixed',
    borderWidth: '1px',
    borderStyle: 'solid',
    height: '100px',
    padding: '20px',
    width: '300px',
    boxSizing: 'border-box',
    right: '0'
  },
  img: {
    position: 'fixed',
    top: '200px',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

export default Roadmap;