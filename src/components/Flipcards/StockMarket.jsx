import React, { useState } from 'react';

function StockMarket() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activeTLAContent, setActiveTLAContent] = useState('default');
  const [activeTAContent, setActiveTAContent] = useState('default');
  const [activeADContent, setActiveADContent] = useState('default');
  const [activeFFContent, setActiveFFContent] = useState('default');
  const [activeFMContent, setActiveFMContent] = useState('default');

  const StockMarketStyle = {  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'relative',
    top: 0,
    right: 500,
};

  const handleTLAClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('TLA');
  };

  const handleTAClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('TA');
  };

  const handleADClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('AD');
  }

    const handleFFClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('FF');
    }

    const handleFMClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('FM');
    }
    

  const handleClose = () => {
    setIsModalOpen(false);
    setActiveModalContent('default');
    setActiveTLAContent('default');
    setActiveTAContent('default');
  }

  const renderTLAContent = () => {
    switch (activeTLAContent) {
        case 'TLAcontent1':
            return <div>content 1</div>;
        case 'TLAcontent2':
            return <div>content 2</div>;
        case 'TLAcontent3':
            return <div>content 3</div>;
        case 'TLAcontent4':
            return <div>content 4</div>;
        default:
            return null;
    }
  };

  const renderTAContent = () => {
    switch (activeTAContent) {
        case 'TAcontent1':
            return <div>content 1</div>;
        case 'TAcontent2':
            return <div>content 2</div>;
        case 'TAcontent3':
            return <div>content 3</div>;
        default:
            return null;
    }
  };

  const renderADContent = () => {
    switch (activeADContent) {
        case 'ADcontent1':
            return <div>content 1</div>;
        case 'ADcontent2':
            return <div>content 2</div>;
        case 'ADcontent3':
            return <div>content 3</div>;
        case 'ADcontent4':
            return <div>content 4</div>;
        case 'ADcontent5':
            return <div>content 5</div>;
        case 'ADcontent6':
            return <div>content 6</div>;
        default:
            return null;
    }
    };

    const renderFFContent = () => {
    switch (activeFFContent) {
        case 'FFcontent1':
            return <div>content 1</div>;
        case 'FFcontent2':
            return <div>content 2</div>;
        case 'FFcontent3':
            return <div>content 3</div>;
        case 'FFcontent4':
            return <div>content 4</div>;
        case 'FFcontent5':
            return <div>content 5</div>;
        case 'FFcontent6':
            return <div>content 6</div>;
        case 'FFcontent7':
            return <div>content 7</div>;
        case 'FFcontent8':
            return <div>content 8</div>;
        case 'FFcontent9':
            return <div>content 9</div>;
        default:
            return null;
    }
    };

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
        case 'FMcontent5':
            return <div>content 5</div>;
        case 'FMcontent6':
            return <div>content 6</div>;
        case 'FMcontent7':
            return <div>content 7</div>;
        case 'FMcontent8':
            return <div>content 8</div>;
        case 'FMcontent9':
            return <div>content 9</div>;
        default:
            return null;
        }
    };


  const renderModal = () => {
    switch (activeModalContent){
        case 'TLA':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Type of loss data</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveTLAContent('TLAcontent1')}>loss general information</button>
                        <button className = 'FCbtn' onClick={()=>setActiveTLAContent('TLAcontent2')}>data breach involves a loss of financial information</button>
                        <button className = 'FCbtn' onClick={()=>setActiveTLAContent('TLAcontent3')}>loss customer personal information</button>
                        <button className = 'FCbtn' onClick={()=>setActiveTLAContent('TLAcontent4')}>loss confidential information</button>
                        <button className = 'FCbtn' onClick={()=>setActiveTLAContent('TLAcontent5')}>loss personal financial information</button>
                    </div>
                    <div className="large-card">
                        {renderTLAContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'TA':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Type of attack</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveTAContent('TAcontent1')}>attacks involving denial of service</button>
                        <button className = 'FCbtn' onClick={()=>setActiveTAContent('TAcontent2')}>ttacks involving phishing</button>
                        <button className = 'FCbtn' onClick={()=>setActiveTAContent('TAcontent3')}>unauthorized access to customer data</button>
                    </div>
                    <div className="large-card">
                        {renderTAContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'AD':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Attack disclosure</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveADContent('ADcontent1')}>Withholding or delaying information release about the attacks result </button>
                        <button className = 'FCbtn' onClick={()=>setActiveADContent('ADcontent2')}>Timing of disclosure about the attacks and kept succinct</button>
                        <button className = 'FCbtn' onClick={()=>setActiveADContent('ADcontent3')}>Apology, excuses, and denial in disclosure</button>
                        <button className = 'FCbtn' onClick={()=>setActiveADContent('ADcontent4')}>disclorsure by general social media</button>
                        <button className = 'FCbtn' onClick={()=>setActiveADContent('ADcontent5')}>disclorsure by Twitter</button>
                        <button className = 'FCbtn' onClick={()=>setActiveADContent('ADcontent6')}>low visibility company disclorsure by Twitter</button>
                    </div>
                    <div className="large-card">
                        {renderADContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'FF':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h4>Firm-level factors</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveFFContent('FFcontent1')}>Larger firms</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFFContent('FFcontent2')}>Subsidiary companies</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFFContent('FFcontent3')}>Older and higher market valuation company</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFFContent('FFcontent4')}>Technology firms</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFFContent('FFcontent5')}>Less competitive industries</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFFContent('FFcontent6')}>Board of directors has a technology committee</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFFContent('FFcontent7')}>Higher firm reputation</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFFContent('FFcontent8')}>Higher put-call ratios</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFFContent('FFcontent9')}>Data breach announcement is accompanied by short-selling activities</button>
                    </div>
                    <div className="large-card">
                        {renderFFContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'FM':
            return(
                <div className="modal" >
                    <div className="small-card">
                        <h4>Financial mesurement</h4>
                        <button className = 'FCbtn' onClick={()=>setActiveFMContent('FMcontent1')}>Long-term market returns worse after experienced data breaches</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFMContent('FMcontent2')}>Long-term investment return higher to compensate for the increased risk exposure</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFMContent('FMcontent3')}>Increase the costs of short selling</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFMContent('FMcontent4')}>Increase stock price volatility and risk after attack</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFMContent('FMcontent5')}>Increase trading volume and liquidity after attack</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFMContent('FMcontent6')}>Higher bid-ask spread after attack</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFMContent('FMcontent7')}>Hacker engage in insider trading</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFMContent('FMcontent8')}>Risk disclosure decrease trade volume volatility</button>
                        <button className = 'FCbtn' onClick={()=>setActiveFMContent('FMcontent9')}>Cyber risk increases return volatility</button>
                    </div>
                    <div className="large-card">
                        {renderFMContent()}
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        default:
            return null;
    }
  }

  return (
    <div className="StockMarket" style={StockMarketStyle}>
        <div className="flip-card-DSM" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                    Stock Market
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleTLAClick}>Tpye of loss data</a>
                    <a href="#" onClick={handleTAClick}>Type of attack</a>
                    <a href="#" onClick={handleADClick}>Attack disclosure</a>
                    <a href="#" onClick={handleFFClick}>Firm-level factors</a>
                    <a href="#" onClick={handleFMClick}>Financial mesurement</a>
                </div>
            </div>
        </div>
        <div>    
            {renderModal()}
        </div>
    </div>
    
  );
}

export default StockMarket;