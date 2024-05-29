import React, { useState } from 'react';
import ITExpertise from './Management/ITExpertise';

const managementStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'fixed',
    top: 20,
    left: 0,
    zIndex: 1,
};

function Management() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activeMAContent, setActiveMAContent] = useState('default');
  const [activeBDContent, setActiveBDContent] = useState('default');

  const handleMAClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('MA');
  };

  const handleBDClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('BD');
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setActiveModalContent('default');
    setActiveMAContent('default');
    setActiveBDContent('default');
  }

  const renderMAContent = () => {
    switch (activeMAContent) {
        case 'MAcontent1':
            return <ITExpertise/>;
        case 'MAcontent2':
            return <div>content 2</div>;
        default:
            return null;
    }
  };

  const renderBDContent = () => {
    switch (activeBDContent) {
        case 'BDcontent1':
            return <div>content 1</div>;
        case 'BDcontent2':
            return <div>content 2</div>;
        case 'BDcontent3':
            return <div>content 3</div>;
        case 'BDcontent4':
            return <div>content 4</div>;
        case 'BDcontent5':
            return <div>content 5</div>;
        default:
            return null;
    }
  };

  const renderModal = () => {
    switch (activeModalContent){
        case 'MA':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Management Attributes</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveMAContent('MAcontent1')}>IT Expertise</button>
                        <button className = 'FCbtn' onClick={()=>setActiveMAContent('MAcontent2')}>Executive Compensation</button>
                    </div>
                    <div className="large-card">
                        {renderMAContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'BD':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Board of Directors</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveBDContent('BDcontent1')}>Independence</button>
                        <button className = 'FCbtn' onClick={()=>setActiveBDContent('BDcontent2')}>Gender Diversity</button>
                        <button className = 'FCbtn' onClick={()=>setActiveBDContent('BDcontent3')}>Tenure</button>
                        <button className = 'FCbtn' onClick={()=>setActiveBDContent('BDcontent4')}>IT Expertise</button>
                        <button className = 'FCbtn' onClick={()=>setActiveBDContent('BDcontent5')}>Board Structure</button>
                    </div>
                    <div className="large-card" style={{zIndex:'100'}}>
                        {renderBDContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        default:
            return null;
    }

  }



  return (
    <div className="management" style={managementStyle}>
        <div className="flip-card-DM" style={{zIndex:'0'}} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front" >
                    Management
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleMAClick}>Management Attributes</a>
                    <a href="#" onClick={handleBDClick}>Board of Directors</a>
                </div>
            </div>
        </div>
        <div>    
            {renderModal()}
        </div>
    </div>
    
  );
}

export default Management;