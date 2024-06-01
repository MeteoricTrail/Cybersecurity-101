import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes, faGavel, faUserSlash } from '@fortawesome/free-solid-svg-icons';
const SmallCard = () => (
    <div className="small-card">
        <h3>Management</h3>
        <div className='small-card-text'>
        Successful cyberattacks reveal weaknesses in a corporation’s existing cybersecurity
management and strategy, thereby instigating changes in the top management team (TMT) of the
breached firms. 
<br /> &nbsp; &nbsp;The evidence also suggests that data breaches can change the
risk incentives for management, which is reflected in their executive compensation structure.
        </div>
        <div className="legend">
            <h4>Severity of consequences</h4>
            <div className="legend-item">
                <span className="legend-text">Better</span>
                <span className="legend-line"></span>
                <span className="legend-dot positive-dot"></span>
            </div>
            <div className="legend-item">
                <span className="legend-text">Neutral / Indeterminate</span>
                <span className="legend-line"></span>
                <span className="legend-dot neutral-dot"></span>
            </div>
            <div className="legend-item">
                <span className="legend-text">Worse</span>
                <span className="legend-line"></span>
                <span className="legend-dot negative-dot"></span>
            </div>
        </div>
    </div>
);
function ConManagement() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activeEOContent, setActiveEOContent] = useState('default');
  const [activeECContent, setActiveECContent] = useState('default');
  const [activeCGMContent, setActiveCGMContent] = useState('default');

  const ConManagementStyle = {  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'relative',

};

  const handleEOClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('EO');
  };


  const handleCGMClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('CGM');
  }

  const handleClose = () => {
    setIsModalOpen(false);
    setActiveModalContent('default');
    setActiveEOContent('default');
    setActiveECContent('default');
  }



  const renderModal = () => {
    switch (activeModalContent){
        case 'EO':
            return(
                <div className="modal">
                    <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Consumers</h2>
                        <div className="content">
                        <p className='description' style={{textIndent:'0'}}>For the turnover of Executive Officers, there is currently a controversy among different studies. The following are some opinions.</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;CEO/CIO/CTO Turnover Increased</h3></div>
                            
                            <p className="description">Some evidence shows increased executive turnover following data breaches, including both CEO turnover <a href="https://doi.org/10.1111/fire.12160">(Lending et al., 2018;</a> <a href="https://doi.org/10.2308/isys-52532">Banker and Feng, 2019)</a> and
  CIO/CTO turnover <a href="https://doi.org/10.1111/fire.12160">(Lending et al., 2018;</a> <a href="https://doi.org/10.2308/isys-52532">Banker and Feng, 2019;</a> <a href="https://doi.org/10.1287/stsc.2020.0106">Say and Vasudeva, 2020)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;No evidence of significant change</h3></div>
                                                        <p className="description">Other studies find no evidence of significant post-breach changes in the turnover
                            of CEOs <a href="https://doi.org/10.1016/j.irfa.2021.101795">(Tosun, 2021)</a>, CIOs <a href="https://doi.org/10.1016/j.im.2021.103429">(Li et al., 2021b)</a>, CFOs <a href="https://doi.org/10.2308/isys-52532">(Banker and Feng, 2019)</a>, or other top 5 executive offers <a href="http://dx.doi.org/10.2139/ssrn.2852519">(Hilary et al., 2016)</a>.

                            </p>
                            <div className="legend-item"><span className="legend-dot neutral-dot"></span><h3>&nbsp;&nbsp;Depends on types of breach</h3></div>
                            <p className="description"><a href="https://doi.org/10.2308/isys-52532">Banker and Feng (2019)</a> find that CIOs only face increased
turnover following breaches caused by system deficiency, but not those caused by criminal fraud or human error, whereas CEO turnover increases following breaches caused by both system deficiency and human error.
</p>
                            
                            <div className="legend-item"><span className="legend-dot neutral-dot"></span><h3>&nbsp;&nbsp;Depends on expertise</h3></div>
                            <p className="description">CIOs with IT expertise are less likely to be dismissed than CIOs with business expertise <a href="https://doi.org/10.1016/j.im.2021.103429">(Li et al., 2021b)</a>.
Some researchers find that
CIO turnover increases the likelihood of remediation of IT control weaknesses <a href="https://doi.org/10.1016/j.im.2021.103429">(Li et al., 2021b)</a>

</p>
<div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;CIO turnover has no impact</h3></div>
                            <p className="description">Other research find that post-cyberattack CIO turnover has no impact on future breach <a href="https://doi.org/10.1287/stsc.2020.0106">(Say and Vasudeva,2020)</a>, suggesting that the turnover may be attributable to short-term scapegoating rather than bringing about meaningful improvements.
</p>
                            </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );


        case 'CGM':
            return(
                <div className="modal">
                    <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Consumers</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Management risk appetite  </h3></div>
                            <p className="description">Data breaches serve to reveal corporations' risk exposure and vulnerabilities, which also causes management to decrease their risk appetite <a href="https://doi.org/10.1016/j.jfineco.2019.05.019">(Kamiya et al., 2021)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Corporate governance score &  disclosure of ITG </h3></div>
                            <p className="description">Some firms strengthen their corporate governance in the wake of data breaches in a remedial attempt to reduce future cybersecurity risks, including incorporating the role of
information technology governance (ITG) in the audit committee charter <a href="https://doi.org/10.2308/isys-18-071">(Lankton et al., 2021)</a>, enhancing corporate governance quality in general <a href="https://doi.org/10.1111/fire.12160">(Lending et al., 2018)</a>.
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
    <div className="ConManagement" style={ConManagementStyle}>
        <div className="flip-card-DCM" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                    <div className="icon-and-text">
                        <FontAwesomeIcon icon={faGavel} className="management-icon" />
                        <div>Management</div>
                    </div>
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleEOClick}>Executive Turnover</a>
                    <a href="#" onClick={handleCGMClick}>Corporate Governance & Misconduct</a>
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