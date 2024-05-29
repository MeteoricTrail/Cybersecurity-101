import React, { useState } from 'react';

function Reputation() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activeIVContent, setActiveIVContent] = useState('default');
  const [activeCTContent, setActiveCTContent] = useState('default');
  const [activeSPContent, setActiveSPContent] = useState('default');
  const [activeGPContent, setActiveGPContent] = useState('default');

  const ReputationStyle = {  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'relative',
    top: 0,
    right: 280,
};

  const handleIVClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('IV');
  };

  const handleCTClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('CT');
  };

  const handleSPClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('SP');
  }

    const handleGPClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('GP');
    }
    
  const handleClose = () => {
    setIsModalOpen(false);
    setActiveModalContent('default');
    setActiveIVContent('default');
    setActiveCTContent('default');
  }

  const renderIVContent = () => {
    switch (activeIVContent) {
        case 'IVcontent1':
            return <div>content 1</div>;
        case 'IVcontent2':
            return <div>content 2</div>;
        default:
            return null;
    }
  };

  const renderCTContent = () => {
    switch (activeCTContent) {
        case 'CTcontent1':
            return <div>content 1</div>;
        case 'CTcontent2':
            return <div>content 2</div>;
        case 'CTcontent3':
            return <div>content 3</div>;
        case 'CTcontent4':
            return <div>content 4</div>;
        case 'CTcontent5':
            return <div>content 5</div>;
        default:
            return null;
    }
  };

  const renderSPContent = () => {
    switch (activeSPContent) {
        case 'SPcontent1':
            return <div>content 1</div>;
        case 'SPcontent2':
            return <div>content 2</div>;
        default:
            return null;
    }
    };

    const renderGPContent = () => {
    switch (activeGPContent) {
        case 'GPcontent1':
            return <div>content 1</div>;
        default:
            return null;
    }
    };


  const renderModal = () => {
    switch (activeModalContent){
        case 'IV':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Investors</h4>
                    </div>
                    <div className="large-card">
                        {renderIVContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'CT':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Customers</h4>
                    </div>
                    <div className="large-card">
                        {renderCTContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'SP':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Suppliers</h4>
                    </div>
                    <div className="large-card">
                        {renderSPContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'GP':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>General Public</h4>
                    </div>
                    <div className="large-card">
                        {renderGPContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        default:
            return null;
    }
  }

  return (
    <div className="Reputation" style={ReputationStyle}>
        <div className="flip-card-DR" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                    Reputation
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleIVClick}>Investors</a>
                    <a href="#" onClick={handleCTClick}>Customers</a>
                    <a href="#" onClick={handleSPClick}>Suppliers</a>
                    <a href="#" onClick={handleGPClick}>General Public</a>
                </div>
            </div>
        </div>
        <div>    
            {renderModal()}
        </div>
    </div>
    
  );
}

export default Reputation;