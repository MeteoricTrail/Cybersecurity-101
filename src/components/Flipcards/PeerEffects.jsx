import React, { useState } from 'react';

function PeerEffects() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activePRContent, setActivePRContent] = useState('default');
  const [activePPContent, setActivePPContent] = useState('default');

  const PeerEffectsStyle = {  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'relative',
    top: 500,
    right: 280,
};

  const handlePRClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('PR');
  };

  const handlePPClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('PP');
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setActiveModalContent('default');
    setActivePRContent('default');
    setActivePPContent('default');
  }

  const renderPRContent = () => {
    switch (activePRContent) {
        case 'PRcontent1':
            return <div>content 1</div>;
        case 'PRcontent2':
            return <div>content 2</div>;
        default:
            return null;
    }
  };

  const renderPPContent = () => {
    switch (activePPContent) {
        case 'PPcontent1':
            return <div>content 1</div>;
        case 'PPcontent2':
            return <div>content 2</div>;
        case 'PPcontent3':
            return <div>content 3</div>;
        case 'PPcontent4':
            return <div>content 4</div>;
        default:
            return null;
    }
  };


  const renderModal = () => {
    switch (activeModalContent){
        case 'PR':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Peer</h4>
                        <button className = 'FCbtn' onClick={()=>setActivePRContent('PRcontent1')}>Peer firms</button>
                        <button className = 'FCbtn' onClick={()=>setActivePRContent('PRcontent2')}>Peer influential IT executives</button>
                    </div>
                    <div className="large-card">
                        {renderPRContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'PP':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Peer warning signs</h4>
                        <button className = 'FCbtn' onClick={()=>setActivePPContent('PPcontent1')}>Reducing internal control weaknesses</button>
                        <button className = 'FCbtn' onClick={()=>setActivePPContent('PPcontent2')}>Increasing auditing spending </button>
                        <button className = 'FCbtn' onClick={()=>setActivePPContent('PPcontent3')}>Adopting more positive tones</button>
                        <button className = 'FCbtn' onClick={()=>setActivePPContent('PPcontent4')}>Appointing IT experts</button>
                    </div>
                    <div className="large-card">
                        {renderPPContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        default:
            return null;
    }
  }

  return (
    <div className="PeerEffects" style={PeerEffectsStyle}>
        <div className="flip-card-DP"  onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                    Peer Effects
                </div>
                <div className="card-back">
                    <a href="#" onClick={handlePRClick}>Peer</a>
                    <a href="#" onClick={handlePPClick}>Peer warning signs</a>
                </div>
            </div>
        </div>
        <div>    
            {renderModal()}
        </div>
    </div>
    
  );
}

export default PeerEffects;