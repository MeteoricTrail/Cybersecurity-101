import React, { useState } from 'react';
import ITExpertise from './Management/ITExpertise';

function InstitutionalEnvironmental() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activeLPCContent, setActiveLPCContent] = useState('default');
  const [activeEFContent, setActiveEFContent] = useState('default');

  const InstitutionalEnvironmentalStyle = {  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'fixed',
    top: 250,
    left: 220,
};

  const handleLPCClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('LPC');
  };

  const handleEFClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('EF');
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setActiveModalContent('default');
    setActiveLPCContent('default');
    setActiveEFContent('default');
  }

  const renderLPCContent = () => {
    switch (activeLPCContent) {
        case 'LPCcontent1':
            return <div>content 1</div>;
        case 'LPCcontent2':
            return <div>content 2</div>;
        case 'LPCcontent3':
            return <div>content 3</div>;
        default:
            return null;
    }
  };

  const renderEFContent = () => {
    switch (activeEFContent) {
        case 'EFcontent1':
            return <div>content 1</div>;
        default:
            return null;
    }
  };

  const renderModal = () => {
    switch (activeModalContent){
        case 'LPC':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Legislative/Policy Changes</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveLPCContent('LPCcontent1')}>increase their cybersecurity disclosure in response to regulatory changes</button>
                        <button className = 'FCbtn' onClick={()=>setActiveLPCContent('LPCcontent2')}>increasing the number of IT experts on their boards</button>
                        <button className = 'FCbtn' onClick={()=>setActiveLPCContent('LPCcontent3')}>firms expand in size and attain greater financial success</button>
                    </div>
                    <div className="large-card">
                        {renderLPCContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'EF':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Environmental Factors</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveEFContent('EFcontent1')}> unemployment increases</button>
                    </div>
                    <div className="large-card">
                        {renderEFContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )
        default:
            return null;
    }
  }

  return (
    <div className="InstitutionalEnvironmental" style={InstitutionalEnvironmentalStyle}>
        <div className="flip-card-DM" style={{top:'340px'}} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                Institutional Envrionmental
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleLPCClick}>Legislative/Policy Changes</a>
                    <a href="#" onClick={handleEFClick}>Environmental Factors</a>
                </div>
            </div>
        </div>
        <div>    
            {renderModal()}
        </div>
    </div>
    
  );
}

export default InstitutionalEnvironmental;