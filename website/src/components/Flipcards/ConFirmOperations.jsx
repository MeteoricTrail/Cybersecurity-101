import React, { useState } from 'react';
import ITExpertise from './Management/ITExpertise';

function ConFirmOperations() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activeFMContent, setActiveFMContent] = useState('default');
  const [activeCRContent, setActiveCRContent] = useState('default');
  const [activeIVContent, setActiveIVContent] = useState('default');
  const [activeAAContent, setActiveAAContent] = useState('default');

  const ConFirmOperationsStyle = {  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'fixed',
    top: 250,
    right: 500,
};

  const handleFMClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('FM');
  };

  const handleCRClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('CR');
  };

  const handleIVClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('IV');
  }

    const handleAAClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('AA');
    }
    

  const handleClose = () => {
    setIsModalOpen(false);
    setActiveModalContent('default');
    setActiveFMContent('default');
    setActiveCRContent('default');
  }

  const renderFMContent = () => {
    switch (activeFMContent) {
        case 'FMcontent1':
            return <div>content 1</div>;
        case 'FMcontent2':
            return <div>content 2</div>;
        case 'FMcontent3':
            return <div>content 3</div>;
        case 'FMcontent4':
            return <div>content 4</div>;
        default:
            return null;
    }
  };

  const renderCRContent = () => {
    switch (activeCRContent) {
        case 'CRcontent1':
            return <div>content 1</div>;
        case 'CRcontent2':
            return <div>content 2</div>;
        case 'CRcontent3':
            return <div>content 3</div>;
        case 'CRcontent4':
            return <div>content 4</div>;
        case 'CRcontent5':
            return <div>content 5</div>;
        default:
            return null;
    }
  };

  const renderIVContent = () => {
    switch (activeIVContent) {
        case 'IVcontent1':
            return <div>content 1</div>;
        case 'IVcontent2':
            return <div>content 2</div>;
        case 'IVcontent3':
            return <div>content 3</div>;
        default:
            return null;
    }
    };

    const renderAAContent = () => {
    switch (activeAAContent) {
        case 'AAcontent1':
            return <div>content 1</div>;
        case 'AAcontent2':
            return <div>content 2</div>;
        case 'AAcontent3':
            return <div>content 3</div>;
        case 'AAcontent4':
            return <div>content 4</div>;
        default:
            return null;
    }
    };

  const renderModal = () => {
    switch (activeModalContent){
        case 'FM':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Financial mesurement</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveFMContent('FMcontent1')}>After data breach</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFMContent('FMcontent2')}>Cybersecurity disclosure and investments</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFMContent('FMcontent3')}>Following a data breach, cash-holdings increases</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFMContent('FMcontent4')}>Following a data breach, the attacked firm reduces dividend payments</button>
                    </div>
                    <div className="large-card">
                        {renderFMContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'CR':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Capital raising</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveCRContent('CRcontent1')}>Higher cost of debt</button>
                        <button className = 'FCbtn' onClick={()=>setActiveCRContent('CRcontent2')}>Greater difficulty obtaining bank loans </button>
                        <button className = 'FCbtn' onClick={()=>setActiveCRContent('CRcontent3')}>Less favorable loan terms</button>
                        <button className = 'FCbtn' onClick={()=>setActiveCRContent('CRcontent4')}>Credit ratings decrease</button>
                        <button className = 'FCbtn' onClick={()=>setActiveCRContent('CRcontent5')}>Cybersecurity investments and disclosing the information to the markets</button>
                    </div>
                    <div className="large-card">
                        {renderCRContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'IV':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Innovation</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveIVContent('IVcontent1')}>After a breach, firms reduce R&D expenditures, patenting activities, and intangible assets, hampering innovation capabilities</button>
                        <button className = 'FCbtn' onClick={()=>setActiveIVContent('IVcontent2')}>Firms exposed to cyber threats file for simpler patents to accelerate their innovation cycle</button>
                        <button className = 'FCbtn' onClick={()=>setActiveIVContent('IVcontent3')}>Adoption of Data Breach Disclosure Laws</button>
                    </div>
                    <div className="large-card">
                        {renderIVContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'AA':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Auditing and Accounting</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveAAContent('AAcontent1')}>12% higher for breached firms </button>
                        <button className = 'FCbtn' onClick={()=>setActiveAAContent('AAcontent2')}>Audit Fees increase larger after repeated data breaches</button>
                        <button className = 'FCbtn' onClick={()=>setActiveAAContent('AAcontent3')}>Transparent cybersecurity disclosures help firms reduce audit fees</button>
                        <button className = 'FCbtn' onClick={()=>setActiveAAContent('AAcontent4')}>The impact of cybersecurity risks and data breaches on financial reporting quality remains inconclusive</button>
                    </div>
                    <div className="large-card">
                        {renderAAContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        default:
            return null;
    }
  }

  return (
    <div className="ConFirmOperations" style={ConFirmOperationsStyle}>
        <div className="flip-card-DM" style={{top:'240px'}} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                    Firm Operations
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleFMClick}>Financial mesurement</a>
                    <a href="#" onClick={handleCRClick}>Capital raising</a>
                    <a href="#" onClick={handleIVClick}>Innovation</a>
                    <a href="#" onClick={handleAAClick}>Auditing and Accounting</a>
                </div>
            </div>
        </div>
        <div>    
            {renderModal()}
        </div>
    </div>
    
  );
}

export default ConFirmOperations;