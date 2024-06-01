import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faCogs } from '@fortawesome/free-solid-svg-icons';
const SmallCard = () => (
    <div className="small-card">
        <h3>IT Process</h3>
        <div className='small-card-text'>
        Within corporations, IT policies and practices are crucial to mitigating cybersecurity risks.
Existing research has examined firm-level IT policies and procedures from four perspectives: <br /><br />[1]
cybersecurity disclosure practices, <br />[2] auditing and internal control, <br />[3] IT governance and
investment, <br />[4] cybersecurity training and awareness.</div>
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


    const handleIGClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('IG');
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


  const renderModal = () => {
    switch (activeModalContent){
        case 'CD':
            return(
                <div className="modal">
                   <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Cybersecurity Disclosure</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot neutral-dot"></span><h3>&nbsp;&nbsp;Data Breach Risk </h3></div>
                            <p className="description">The empirical evidence remains inconclusive: some find that more
cybersecurity disclosure is linked to higher data breach risks <a href="https://rucore.libraries.rutgers.edu/rutgers-lib/55281/">(Li, 2017;</a><a href="https://www.sciencedirect.com/science/article/pii/S1467089518300812"> Li et al., 2018;</a> <a href="https://ideas.repec.org/a/ami/journl/v21y2022i3p452-470.html">Peng and Li, 2022)</a>, whereas others find no significant relationship <a href="https://doi.org/10.1007/s10796-006-9012-5">(Arora et al., 2006)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Investment attractiveness </h3></div>
                            <p className="description">Cybersecurity disclosure therefore enhances firms’ ability to attract investors <a href="https://doi.org/10.2308/isys-52374">(Frank et al., 2019)</a> at a lower cost of equity <a href="https://www.sciencedirect.com/science/article/pii/S1544612322007644">(Elmawazini et al., 2022)</a>, especially if the disclosure is accompanied by third party assurance and therefore deemed more trustworthy.</p>
                            </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'EA':
            return(
                <div className="modal">
                   <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Auditing</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Auditor Experience in Data Breaches </h3></div>
                            <p className="description">Auditors with prior experience in data breaches can help firms reduce their own risk of data breaches <a href="https://doi.org/10.1080/07421222.2020.1790190">(Liu, 2020)</a>.</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Larger increases in audit fees </h3></div>
                            <p className="description">Corporations that have experienced cyberattacks incur larger increases in audit fees, which in turn lead to reduced subsequent cyber incidents <a href="https://doi.org/10.2308/ajpt-52593">(Li et al., 2020)</a>.</p>
                            </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'IG':
            return(
                <div className="modal">
                    <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— IT Governance & Cybersecurity Investment</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;More centralized IT Governance</h3></div>
                            <p className="description">In the not-for-profit sector, centralized IT governance reduces the risk of data breaches among U.S. universities <a href="https://doi.org/10.1080/07421222.2020.1790190">(Liu, 2020)</a>.</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;IT security investment </h3></div>
                            <p className="description">IT security investment is crucial to combatting the risk of cyberattacks <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2858549">(Angst et al., 2017;</a> <a href="https://doi.org/10.1080/07421222.2021.1870390">Li et al., 2021a;</a> <a href="https://www.sciencedirect.com/science/article/pii/S1572308922000171">Aldasoro et al., 2022)</a>.
<p className="description"> However, more use of IT security itself does not necessarily reduce data
breaches, as symbolic adoption diminishes the effectiveness of IT security and leads to increased risk of cyberattacks, whereas effective integration of IT security into IT processes is essential to reducing data breaches <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2858549">(Angst et al., 2017)</a>.
</p></p>
                            </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )


        case 'CT':
            return(
                <div className="modal">
                    <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Cybersecurity Training</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Cybersecurity Trainings </h3></div>
                            <p className="description">Cybersecurity training reduces the risk of data breaches <a href="https://doi.org/10.1007/s10796-019-09977-z">(Kweon et al., 2021)</a>.</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Cybersecurity Awareness</h3></div>
                            <p className="description">Employees’ human errors and portable media usage constitute two primary causes of data losses <a href="https://doi.org/10.1080/15536548.2012.10845654">(Ayyagari, 2012)</a>.
</p>
<p className="description">Consequently, cybersecurity trainings and awareness programs can strength corporations’ defence against cyberattacks from a human-centric perspective <a href="https://www.cambridge.org/core/books/abs/cambridge-handbook-of-compliance/data-security-data-breaches-and-compliance/FBD5540A170C1012219DC26E75F33E81">(Chatterjee and Daniel, 2021)</a>.</p>
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
    <div className="ITPractices" style={ITPracticesStyle}>
        <div className="flip-card-DIT" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                <div className="icon-and-text">
                    <FontAwesomeIcon icon={faLaptopCode} className="management-icon" style={{ fontSize: '100px' }}/>
                    <div>IT Process</div>
                    </div>
                    
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleCDClick}>Cybersecurity Disclosure</a>
                    <a href="#" onClick={handleEAClick}>Auditing</a>
                    <a href="#" onClick={handleIGClick}>IT Governance & Cybersecurity Investment</a>
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