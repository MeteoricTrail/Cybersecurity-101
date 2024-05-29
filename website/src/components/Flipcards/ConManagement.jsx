import React, { useState } from 'react';
import ITExpertise from './Management/ITExpertise';

function ConManagement() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activeETContent, setActiveETContent] = useState('default');
  const [activeECContent, setActiveECContent] = useState('default');
  const [activeBRContent, setActiveBRContent] = useState('default');

  const ConManagementStyle = {  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'fixed',
    top: 250,
    right: 280,
    zIndex: 1,
};

  const handleETClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('ET');
  };

  const handleECClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('EC');
  };

  const handleBRClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('BR');
  }

  const handleClose = () => {
    setIsModalOpen(false);
    setActiveModalContent('default');
    setActiveETContent('default');
    setActiveECContent('default');
  }

  const renderETContent = () => {
    switch (activeETContent) {
        case 'ETcontent1':
            return <div>content 1</div>;
        case 'ETcontent2':
            return <div>content 2</div>;
        default:
            return null;
    }
  };

  const renderECContent = () => {
    switch (activeECContent) {
        case 'ECcontent1':
            return <div>content 1</div>;
        default:
            return null;
    }
  };

  const renderBRContent = () => {
    switch (activeBRContent) {
        case 'BRcontent1':
            return <div>content 1</div>;
        default:
            return null;
    }
    };

  const renderModal = () => {
    switch (activeModalContent){
        case 'ET':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Executive Turnover</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveETContent('ETcontent1')}>CIOs with IT expertise</button>
                        <button className = 'FCbtn' onClick={()=>setActiveETContent('ETcontent2')}>Replacing executive officers</button>
                    </div>
                    <div className="large-card">
                        {renderETContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'EC':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Executive Compensation</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveECContent('ECcontent1')}>Adjustments to executive compensation structure</button>
                    </div>
                    <div className="large-card">
                        {renderECContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'BR':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Board Restructuring</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveBRContent('BRcontent1')}>Boards' mixed governance</button>
                    </div>
                    <div className="large-card">
                        {renderBRContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        default:
            return null;
    }
  }

  return (
    <div className="ConManagement" style={ConManagementStyle}>
        <div className="flip-card-DM" style={{top:'240px',height:'200px'}} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                    Management and Board
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleETClick}>Executive Turnover</a>
                    <a href="#" onClick={handleECClick}>Executive Compensation</a>
                    <a href="#" onClick={handleBRClick}>Board Restructuring</a>
                </div>
            </div>
        </div>
        <div>    
            {renderModal()}
        </div>
    </div>
    
  );
}

export default ConManagement;