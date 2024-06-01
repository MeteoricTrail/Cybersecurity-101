import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faFileContract } from '@fortawesome/free-solid-svg-icons';
const SmallCard = () => (
    <div className="small-card">
        <h3>Firm Characteristics and Policies</h3>
        <div className='small-card-text'>
        Different companies experience inherently different levels of cybersecurity risk due to the
nature of their operations and firm-level characteristics, such as size, industry, and financial
success. <br />&nbsp;&nbsp;Corporate financing policies and ownership structure also have significant bearing on their
cybersecurity risks and disclosure practices.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bsides, cybersecurity risk is affected by corporate investment policies and strategies as well.</div>
        <div className="legend">
            <h4>Severity of consequences</h4>
            <div className="legend-item">
                <span className="legend-text">Reduce risks</span>
                <span className="legend-line"></span>
                <span className="legend-dot positive-dot"></span>
            </div>
            <div className="legend-item">
                <span className="legend-text">Neutral</span>
                <span className="legend-line"></span>
                <span className="legend-dot neutral-dot"></span>
            </div>
            <div className="legend-item">
                <span className="legend-text">Increase risks</span>
                <span className="legend-line"></span>
                <span className="legend-dot negative-dot"></span>
            </div>
        </div>
    </div>
);
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

  const renderModal = () => {
    switch (activeModalContent){
        case 'FC':
            return(
                <div className="modal">
                    <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Firm Characteristics</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Firm size</h3></div>
                            <p className="description">Consequently, larger firms <a href="https://ssrn.com/abstract=3607614">(Pei et al., 2020;</a> <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304405X20300143">Kamiya et al., 2021) </a> and firms belonging to the Fortune 500 list <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304405X20300143">(Kamiya et al., 2021) </a>are more likely to experience cyberattacks.
Some researchers also find contrary evidence evidence that smaller firms, not larger firms, face a higher risk of data breaches <a href="https://ssrn.com/abstract=3835547">(Keppo, 2021)</a>.
</p>
<p className="description">Financial success also attracts cyberattacks, as companies with better financial performance (i.e., higher stock market valuation and lower financial constraint) are more likely to experience cyberattacks <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304405X20300143">(Kamiya et al., 2021)</a>.</p>
<p className="description">Larger firms also spend more on cybersecurity <a href="https://www.sciencedirect.com/science/article/pii/S1572308922000171">(Aldasoro et al., 2022)</a> and engender greater digital trust <a href="https://doi.org/10.1108/SBR-07-2021-0119">(Kluiters et al., 2023)</a></p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Industry</h3></div>
                            <p className="description">Firm experience higher risk of cyberattacks if operating in the finance industry <a href="https://www.sciencedirect.com/science/article/pii/S1572308922000171">(Aldasoro et al., 2022)</a>, wholesale & retail, service, transportation & communication industries <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304405X20300143">(Kamiya et al., 2021) </a>, and industries that are generally less competitive <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304405X20300143">(Kamiya et al., 2021)</a>.</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Firm performance</h3></div>
                            <p className="description">Firms with better performance (proxied by returns on assets) experience lower digital trust from the public <a href="https://doi.org/10.1108/SBR-07-2021-0119">(Kluiters et al., 2023)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Financial performance</h3></div>
                            <p className="description">As companies with better financial performance (i.e., higher stock market valuation and lower financial constraint) are more likely to experience cyberattacks <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304405X20300143">(Kamiya et al., 2021)</a>.
</p>
                            </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );
        
        case 'FP':
            return(
                <div className="modal">
                    <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Financing Policies</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Leverage Ratio</h3></div>
                            <p className="description">Firms with higher leverage ratio, which indicates a greater level of financial risk, are more likely to experience data breaches <a href="https://ssrn.com/abstract=3607614">(Pei et al., 2020)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot neutral-dot"></span><h3>&nbsp;&nbsp;Foreign investors</h3></div>
                            <p className="description">Firms which are cross-listed with foreign investor ownership tend to have reduced cybersecurity disclosure <a href="https://www.sciencedirect.com/science/article/pii/S0278425422000618">(Barry et al., 2022)</a>.</p>
                            </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'IS':
            return(
                <div className="modal">
                    <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Investment Strategies & Firm Strategies</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>Diversification & Divestitures&nbsp;&nbsp;&nbsp;&nbsp;</h3><span className="legend-dot negative-dot"></span><h3>Expansions</h3></div>
                            <p className="description">Rapid expansion through mergers and acquisitions (M&A) leads firms to greater vulnerability to data
breaches <a href="https://web.archive.org/web/20210815092150id_/https://aisel.aisnet.org/cgi/viewcontent.cgi?article=1260&context=icis2019">(Tanriverdi et al., 2019)</a>, whereas data breach risk is reduced by diversification <a href="https://www.sciencedirect.com/science/article/pii/S0963868722000397">(Wang and Ngai, 2022)</a> and divestitures <a href="https://web.archive.org/web/20210815092150id_/https://aisel.aisnet.org/cgi/viewcontent.cgi?article=1260&context=icis2019">(Tanriverdi et al., 2019;</a>  <a href="https://doi.org/10.1287/stsc.2020.0106">Say and Vasudeva, 2020)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Trade Secret, material contract redaction and intangible Assets</h3></div>
                            <p className="description">Firms experience a higher likelihood of cyberattacks when they possess more intangible assets <a href="https://ssrn.com/abstract=3607614">(Pei et al., 2020;</a> <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304405X20300143">Kamiya et al., 2021)</a>, particularly trade secrets and confidential contract information <a href="https://www.sciencedirect.com/science/article/pii/S0278425418302400">(Ettredge et al., 2018;</a> <a href="https://doi.org/10.2308/HORIZONS-2020-166">Hughes et al., 2023)</a>, suggesting that hackers deliberately target companies for their valuable, confidential information, especially when the firms are younger, smaller (i.e., with fewer employees), and operating in less concentrated industries <a href="https://www.sciencedirect.com/science/article/pii/S0278425418302400">(Ettredge et al., 2018)</a>.</p>
                            <div className="legend-item" style={{lineHeight:'0'}}><span className="legend-dot positive-dot"></span><h3>Corporate social responsibility (CSR) </h3></div>
                            <div className="legend-item" ><span className="legend-dot negative-dot"></span><h3>Corporate social irresponsibility (KLD), espoused Positive Social Performance </h3></div>
                            <p className="description">Evidence shows that firms with superior CSR engagement have lower cyberattack risk <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/fire.12160">(Lending et al., 2018)</a>, whereas firms that commit social irresponsibility are more likely to experience cyberattacks <a href="https://ssrn.com/abstract=4228376">(Xu et al., 2022)</a>. 
However, a competing view proposes that excessive investment in CSR can be detrimental to cybersecurity, as evidence shows that firms which espoused positive social performance unrelated to their core operations are more likely to suffer cyberattacks <a href="https://doi.org/10.1287/isre.2020.0939">(D’Arcy et al., 2020)</a>.
</p>
                            </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        default:
            return null;
    }

  }



  return (
    <div className="firmOperations" style={FOStyle} >
        <div className="flip-card-DFO" style={{position:'fixed'}}onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                    <div className="icon-and-text">
                        <FontAwesomeIcon icon={faBuilding} className="management-icon" />
                        <div style={{padding:"10px"}}>Characteristics & Policies</div>
                    </div>
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleFCClick}>Firm Characteristics</a>
                    <a href="#" onClick={handleFPClick}>Financing Policies</a>
                    <a href="#" onClick={handleISClick}>Investment Strategies & Firm Strategies</a>
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
    position: 'relative',
    top: 0,
    left: 0,
};