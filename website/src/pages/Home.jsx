import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className="title" style={{height:'300px'}}>
       <h>Gamification of Cybersecurity 101</h>
      </div>

      <div className="background" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', padding: '20px', backgroundColor: '#fff', color: '#333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '20px 0' }}>
        <div className="content" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '10px', borderBottom: '2px solid #333', display: 'inline-block', paddingBottom: '5px' }}>Background</h2>
          <h3 style={{ fontSize: '1.2em', fontWeight: 'normal' }}>Here is some background knowledge of cybersecurity</h3>
        </div>
      </div>

      <div className="projectinfo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', padding: '20px', backgroundColor: '#f8f8f8', color: '#666', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '20px 0' }}>
        <div className="content" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '10px', borderBottom: '2px solid #333', display: 'inline-block', paddingBottom: '5px' }}>Project Info</h2>
          <h3 style={{ fontSize: '1.2em', fontWeight: 'normal' }}>Some project info</h3>
        </div>
      </div>
    </div>
  )
}

export default Home