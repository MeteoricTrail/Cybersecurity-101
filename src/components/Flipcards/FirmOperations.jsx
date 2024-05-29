import React, { useState } from 'react';

function FirmOperations() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activeFCContent, setActiveFCContent] = useState('default');
  const [activeFPContent, setActiveFPContent] = useState('default');
  const [activeISContent, setActiveISContent] = useState('default');

  const handleFCClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('FC');
  };

  const handleFPClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('FP');
  };

  const handleISClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('IS');
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setActiveModalContent('default');
    setActiveFCContent('default');
    setActiveFPContent('default');
    setActiveISContent('default');
  }

  const renderFCContent = () => {
    switch (activeFCContent) {
        case 'FCcontent1':
            return <div>content 1</div>;
        case 'FCcontent2':
            return <div>content 2</div>;
        case 'FCcontent3':
            return <div>content 3</div>;
        default:
            return null;
    }
  };

  const renderFPContent = () => {
    switch (activeFPContent) {
        case 'FPcontent1':
            return <div>content 1</div>;
        case 'FPcontent2':
            return <div>content 2</div>;
        default:
            return null;
    }
  };

  const renderISContent = () => {
    switch (activeISContent) {
        case 'IScontent1':
            return <div>content 1</div>;
        case 'IScontent2':
            return <div>content 2</div>;
        case 'IScontent3':
            return <div>content 3</div>;
        case 'IScontent4':
            return <div>content 4</div>;
        case 'IScontent5':
            return <div>content 5</div>;
        default:
            return null;
    }
  };

  const renderModal = () => {
    switch (activeModalContent){
        case 'FC':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Firm Characteristics</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveFCContent('FCcontent1')}>Size</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFCContent('FCcontent2')}>Industry</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFCContent('FCcontent3')}>Performance</button>
                    </div>
                    <div className="large-card">
                        {renderFCContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );
        
        case 'FP':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Financing Policies</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveFPContent('FPcontent1')}>Leverage</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFPContent('FPcontent2')}>Foreign Investment</button>
                    </div>
                    <div className="large-card">
                        {renderFPContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'IS':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Investment Strategies</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveISContent('IScontent1')}>M & A</button>
                        <button className = 'FCbtn' onClick={()=>setActiveISContent('IScontent2')}>Diversification</button>
                        <button className = 'FCbtn' onClick={()=>setActiveISContent('IScontent3')}>Divestitures</button>
                        <button className = 'FCbtn' onClick={()=>setActiveISContent('IScontent4')}>Intangible Assets</button>
                        <button className = 'FCbtn' onClick={()=>setActiveISContent('IScontent5')}>CSR</button>
                    </div>
                    <div className="large-card">
                        {renderISContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        default:
            return null;
    }

  }



  return (
    <div className="firmOperations" style={FOStyle}>
        <div className="flip-card-DFO" style={{position:"absoulte", top:'170px'}} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                    FirmOperations
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleFCClick}>Firm Characteristics</a>
                    <a href="#" onClick={handleFPClick}>Financing Policies</a>
                    <a href="#" onClick={handleISClick}>Investment Strategies</a>
                </div>
            </div>
        </div>
        <div>    
            {renderModal()}
        </div>
    </div>
    
  );
}

export default FirmOperations;

const FOStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
};