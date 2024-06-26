import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const managementStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'relative',
    top: 20,
    left: 0,
};

function Management() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activeBDContent, setActiveBDContent] = useState('default');
  const [activeEOContent, setActiveEOContent] = useState('default');

  const handleBDClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('BD');
  };

  const handleEOClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('EO');
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setActiveModalContent('default');
    setActiveBDContent('default');
    setActiveEOContent('default');
  }



  const renderModal = () => {
    switch (activeModalContent){
        case 'BD':
            return(
                <div className="modal">
                    <div className="small-card">
                        <h3>Management Attributes</h3>
                        <div className='small-card-text'>The attributes of managers and directors play a significant role in determining corporate cybersecurity
                                practices and the resultant risk. <br />
                                &nbsp;&nbsp;Corporate managers are responsible for overseeing corporate cybersecurity strategies by making decisions about cybersecurity investment and shaping cybersecurity policies and practices. And boards of directors also play a vital role in determining corporate cybersecurity practices and, consequently, firm exposure to cybersecurity risk.</div>
                    <div className="legend">
                        <h4>Determinats influence</h4>
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
                    <div className="large-card">
                        <h2 className="title">Determinants —— Board of directors</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Smaller Boards</h3></div>
                            <p className="description">Effective board monitoring is linked to reduced risk of data breaches, as proxied by smaller boards. <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/fire.12160">(Lending et al., 2018) </a></p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Board Busyness & Technology Committees</h3></div>
                            <p className="description">higher exposure to data breaches is experienced by firms with busy directors <a href="https://scholarspace.manoa.hawaii.edu/items/92caad44-5b42-48aa-8cd4-475d2a6d10c0">(Hsu and Wang, 2021)</a> and separate technology  committees on their boards <a href="https://doi.org/10.2308/isys-51402.10.2308/isys-51402">(Higgs et al., 2016)</a>. </p>
                            <div className="legend-item"><span className="legend-dot neutral-dot"></span><h3>&nbsp;&nbsp;CEO-chair duality, board independence, board size</h3></div>
                            <p className="description">Although Kamiya et al. <a href="https://www.sciencedirect.com/science/article/pii/S0304405X20300143 ">(2021)</a> investigates the roles of CEO-chair duality, board independence, board size and find no evidence that they significantly predict the likelihood for companies to experience cyberattacks</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Presence of Risk Management Committee on the board </h3></div>
                            <p className="description">Kamiya et al. <a href="https://www.sciencedirect.com/science/article/pii/S0304405X20300143">(2021)</a> suggest that having a Risk Management Committee on the board correlates with reduced risk exposure.</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Director IT expertise on audit committee</h3></div>
                            <p className="description">Directors with IT expertise on the board help reduce the risk of data breaches, particularly if IT experts serve on audit committees <a href="https://doi.org/10.2308/ISYS-2020-076">(Chen et al., 2022)</a></p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Board Response to Data Protection Law Change</h3></div>
                            <p className="description">Firms also respond to cybersecurity regulations, by increasing the number of IT experts on their boards, which in turn reduces the risk of data breaches <a href="https://doi.org/10.1111/1911-3846.12735">(Klein et al., 2022)</a></p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Director Financial Expertise</h3></div>
                            <p className="description">Effective board monitoring is linked to reduced risk of data breaches, directors with financial expertise <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/fire.12160">(Lending et al., 2018)</a></p>
                        </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'EO':
            return(
                <div className="modal">
                    <div className="small-card">
                    <h3>Management Attributes</h3>
                        <div className='small-card-text'>The attributes of managers and directors play a significant role in determining corporate cybersecurity
                                practices and the resultant risk. <br />
                                &nbsp;&nbsp;Corporate managers are responsible for overseeing corporate cybersecurity strategies by
                                making decisions about cybersecurity investment and shaping cybersecurity policies and practices. And boards of directors also play a vital role in determining corporate cybersecurity practices and,
                                consequently, firm exposure to cybersecurity risk.
                        </div>
                        <div className="legend">
                            <h4>Determinats influence</h4>
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
                    <div className="large-card">
                    <h2 className="title">Determinants —— Executive Officers</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;SChief Information Officer</h3></div>
                            <p className="description">Evidence shows that firms with a CIO experience increased risk of data breaches <a href="https://www.sciencedirect.com/science/article/pii/S1467089521000348">(Smith et al., 2021)</a> , which may be attributable to the fact that firms facing higher inherent exposure to cyberattacks are more likely to appoint CIOs.</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;IT Executive in Top Management Team </h3></div>
                            <p className="description">Some researchers find IT executives in the TMT reduce the likelihood of data breaches <a href="https://doi.org/10.2308/isys-50339">(Kwon et al.,2013;</a> <a href="https://doi.org/10.1287/isre.2020.0986">Haislip et al., 2021)</a></p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;IT Executive Compensation</h3></div>
                            <p className="description">IT executives enjoy higher compensation relative to other executives, which could signal a firm’s prioritization of IT security <a href="https://doi.org/10.2308/isys-50339">(Kwon et al., 2013)</a></p>
                            <div className="legend-item"><span className="legend-dot neutral-dot"></span><h3>&nbsp;&nbsp;Post-Data Breach CIO/CTO Turnover</h3></div>
                            <p className="description">There is also inconclusive evidence on whether firing the CIO following a cyberattack affects the likelihood of future breaches: some find evidence of reduced future risk after CIO turnover <a href="https://www.sciencedirect.com/science/article/pii/S0378720621000033">(Li et al., 2021b)</a>, whereas others find no significant change <a href="https://doi.org/10.1287/stsc.2020.0106">(Say and Vasudeva, 2020)</a>. Therefore, the role of IT executives remains to be investigated.</p>
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
    <div className="management" style={managementStyle}>
        <div className="flip-card-DM" style={{position:'fixed',top:'170px'}} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front"  >
                    <div className="icon-and-text">
                        <FontAwesomeIcon icon={faUsers} className="management-icon" />
                        <div>Management Attributes</div>
                    </div>
                    </div>
                <div className="card-back">
                    <a href="#" onClick={handleBDClick}>Board of directors</a>
                    <a href="#" onClick={handleEOClick}>Executive Officers</a>
                </div>
            </div>
        </div>
        <div style={{zIndex:'10'}}>    
            {renderModal()}
        </div>
    </div>
    
  );
}

export default Management;
