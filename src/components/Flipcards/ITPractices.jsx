import React, { useState } from 'react';

function ITPractices() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activeCDContent, setActiveCDContent] = useState('default');
  const [activeEAContent, setActiveEAContent] = useState('default');
  const [activeIAContent, setActiveIAContent] = useState('default');
  const [activeIGContent, setActiveIGContent] = useState('default');
  const [activeIIContent, setActiveIIContent] = useState('default');
  const [activeCTContent, setActiveCTContent] = useState('default');

  const ITPracticesStyle = {  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'relative',
    top: 250,
    left: 0,
    zIndex: 2,
};

  const handleCDClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('CD');
  };

  const handleEAClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('EA');
  };

  const handleIAClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('IA');
  }

    const handleIGClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('IG');
    }

    const handleIIClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('II');
    }

    const handleCTClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('CT');
    }
    

  const handleClose = () => {
    setIsModalOpen(false);
    setActiveModalContent('default');
    setActiveCDContent('default');
    setActiveEAContent('default');
  }

  const renderCDContent = () => {
    switch (activeCDContent) {
        case 'CDcontent1':
            return <div>content 1</div>;
        default:
            return null;
    }
  };

  const renderEAContent = () => {
    switch (activeEAContent) {
        case 'EAcontent1':
            return <div>content 1</div>;
        case 'EAcontent2':
            return <div>content 2</div>;
        case 'EAcontent3':
            return <div>content 3</div>;
        default:
            return null;
    }
  };

  const renderIAContent = () => {
    switch (activeIAContent) {
        case 'IAcontent1':
            return <div>content 1</div>;
        case 'IAcontent2':
            return <div>content 2</div>;
        default:
            return null;
    }
    };

    const renderIGContent = () => {
    switch (activeIGContent) {
        case 'IGcontent1':
            return <div>content 1</div>;
        case 'IGcontent2':
            return <div>content 2</div>;
        case 'IGcontent3':
            return <div>content 3</div>;
        case 'IGcontent4':
            return <div>content 4</div>;
        case 'IGcontent5':
            return <div>content 5</div>;
        default:
            return null;
    }
    };

    const renderIIContent = () => {
    switch (activeIIContent) {
        case 'IIcontent1':
            return <div>content 1</div>;
        case 'IIcontent2':
            return <div>content 2</div>;
        case 'IIcontent3':
            return <div>content 3</div>;
        case 'IIcontent4':
            return <div>content 4</div>;
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
        default:
            return null;
        }
    };

  const renderModal = () => {
    switch (activeModalContent){
        case 'CD':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Cybersecurity Disclosure</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveCDContent('CDcontent1')}>Cybersecurity Disclosure</button>
                    </div>
                    <div className="large-card">
                        {renderCDContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'EA':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>External Auditors</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveEAContent('EAcontent1')}>auditors with prior experience</button>
                        <button className = 'FCbtn' onClick={()=>setActiveEAContent('EAcontent2')}>Lower-quality audits</button>
                        <button className = 'FCbtn' onClick={()=>setActiveEAContent('EAcontent3')}>larger increases in audit fees</button>
                    </div>
                    <div className="large-card">
                        {renderEAContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'IA':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Internal Auditors</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveIAContent('IAcontent1')}>preventing successful cyberattacks</button>
                        <button className = 'FCbtn' onClick={()=>setActiveIAContent('IAcontent2')}>with management support</button>
                    </div>
                    <div className="large-card">
                        {renderIAContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'IG':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>IT Governance</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveIGContent('IGcontent1')}>have a formal Information Security policy</button>
                        <button className = 'FCbtn' onClick={()=>setActiveIGContent('IGcontent2')}>more use of IT security</button>
                        <button className = 'FCbtn' onClick={()=>setActiveIGContent('IGcontent3')}>integration of IT security into IT processes</button>
                        <button className = 'FCbtn' onClick={()=>setActiveIGContent('IGcontent4')}>centralized IT governance</button>
                        <button className = 'FCbtn' onClick={()=>setActiveIGContent('IGcontent5')}>transparency and control in firms` data management</button>
                    </div>
                    <div className="large-card">
                        {renderIGContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'II':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>IT Investment </h4>
                        <button className = 'FCbtn' onClick={()=>setActiveIIContent('IIcontent1')}>prioritized IT Investment</button>
                        <button className = 'FCbtn' onClick={()=>setActiveIIContent('IIcontent2')}>higher cybersecurity investments</button>
                        <button className = 'FCbtn' onClick={()=>setActiveIIContent('IIcontent3')}>Higher expenditure on IT</button>
                        <button className = 'FCbtn' onClick={()=>setActiveIIContent('IIcontent4')}>investing in IT security systems</button>
                    </div>
                    <div className="large-card">
                        {renderIIContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'CT':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Cybersecurity Training</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveCTContent('CTcontent1')}>Cybersecurity training for staff</button>
                        <button className = 'FCbtn' onClick={()=>setActiveCTContent('CTcontent2')}>cybersecurity awareness by directors on audit committees</button>
                    </div>
                    <div className="large-card">
                        {renderCTContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )
        default:
            return null;
    }
  }

  return (
    <div className="ITPractices" style={ITPracticesStyle}>
        <div className="flip-card-DIT" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                    IT Practices
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleCDClick}>Cybersecurity Disclosure</a>
                    <a href="#" onClick={handleEAClick}>External auditors</a>
                    <a href="#" onClick={handleIAClick}>internal auditing</a>
                    <a href="#" onClick={handleIGClick}>IT Governance</a>
                    <a href="#" onClick={handleIIClick}>IT Investment</a>
                    <a href="#" onClick={handleCTClick}>Cybersecurity Training</a>
                </div>
            </div>
        </div>
        <div>    
            {renderModal()}
        </div>
    </div>
    
  );
}

export default ITPractices;