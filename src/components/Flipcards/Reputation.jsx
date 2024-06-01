import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

function Reputation() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activeCContent, setActiveCContent] = useState('default');
  const [activeRDBContent, setActiveRDBContent] = useState('default');
  const [activeSPContent, setActiveSPContent] = useState('default');
  const [activeGPContent, setActiveGPContent] = useState('default');
  const SmallCard = () => (
    <div className="small-card">
        <h3>Reputational Consequences</h3>
        <div className='small-card-text'>
        Cybersecurity risk facing corporations also affect their stakeholders, such as investors,
customers, suppliers, employees, and general communities. A cybersecurity breach can damage a firm’s reputation by
impairing stakeholder trust. Following a cyberattack, stakeholders negatively reassess the
breached firm in light of the cyberattack and, accordingly, penalize the firm in the process of
repeated contracting by increasing the firm’s future costs of operations.
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
  const ReputationStyle = {  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'relative',
    top: 0,
    right: 280,
};

  const handleCClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('C');
  };

  const handleRDBClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('RDB');
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
    setActiveCContent('default');
    setActiveRDBContent('default');
  }

  const renderCContent = () => {
    switch (activeCContent) {
        case 'Ccontent1':
            return <div>content 1</div>;
        case 'Ccontent2':
            return <div>content 2</div>;
        default:
            return null;
    }
  };

  const renderRDBContent = () => {
    switch (activeRDBContent) {
        case 'RDBcontent1':
            return <div>content 1</div>;
        case 'RDBcontent2':
            return <div>content 2</div>;
        case 'RDBcontent3':
            return <div>content 3</div>;
        case 'RDBcontent4':
            return <div>content 4</div>;
        case 'RDBcontent5':
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
        case 'C':
            return(
                <div className="modal">
                    <SmallCard />
                    <div className="large-card">
                        <h2 className="title">Determinants —— Consumers</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Brand Capital & Word-of-mouth & Customer Spending </h3></div>
                            <p className="description">A majority of empirical evidence shows reputational damage of breached firms
among consumers, including impaired brand capital <a href="http://dx.doi.org/10.2139/ssrn.3907923">(Hsu et al., 2022)</a>,  loss of trust <a href="https://aisel.aisnet.org/mwais2014/22/">(Bansal, 2014;</a> <a href="https://doi.org/10.1007/s12599-014-0351-3">Nofer et al., 2014)</a>, 
more negative word-of-mouth <a href="https://doi.org/10.1016/j.ijhm.2018.12.001">(Zhang et al., 2019;</a> <a href="https://doi.org/10.1016/j.jbusres.2021.06.054">Labrecque et al., 2021)</a>, decreased consumer spending <a href="https://doi.org/10.1509/jm.16.0124">(Janakiraman et al., 2018)</a>, 
and customers switching to other businesses <a href="https://www.rand.org/pubs/research_reports/RR1187.html">(Ablon et al., 2016;</a> <a href="https://doi.org/10.1016/j.jbusres.2021.06.054">Labrecque et al., 2021)</a>.

</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Firm brand power and familiarity reputational intangible capital </h3></div>
                            <p className="description">Some
researchers find contrary evidence of increased brand capital and familiarity following data breaches <a href="https://doi.org/10.1093/cybsec/tyab021">(Makridis, 2021)</a>
</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Customer Trust </h3></div>
                            <p className="description">Cybersecurity breaches often involve unauthorized access to private customer data. Given that
mere access of such data can induce feelings of violation on the part of customers <a href="https://doi.org/10.1509/jm.15.0497">(Martin et al., 2017)</a>, data breaches can significantly damage customer trust and goodwill <a href="https://aisel.aisnet.org/mwais2014/22/">(Bansal, 2014;</a> <a href="https://doi.org/10.1007/s12599-014-0351-3">Nofer et al., 2014)</a>.
<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Firms can also mitigate cyberattack-induced reputational damage by engaging in corporate social responsibility (CSR) initiatives <a href="https://link.springer.com/chapter/10.1007/978-3-319-91716-0_19">(Bansal, 2018)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot neutral-dot"></span><h3>&nbsp;&nbsp;User behaviors</h3></div>
                            <p className="description">Customers also change their data-related behaviors when dealing with breached businesses post-cyberattack, including falsifying personal information <a href="https://doi.org/10.1016/j.jbusres.2021.06.054">(Labrecque et al., 2021)</a> and engaging in protection actions, such as monitoring their files and freezing access to their credit reports <a href="https://doi.org/10.1016/j.jbankfin.2017.12.002">(Mikhed and Vogan, 2018)</a>.
                            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nevertheless, some
researchers find minimal impact of data breaches on customer intention to be personally more secure in the future <a href="https://doi.org/10.1108/MAJ-11-2017-1692">(Curtis et al., 2018)</a>.

</p>
<div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Customer fear and anger</h3></div>
                            <p className="description">As customer attitude directly influences a firm’s business prospects, the level of fear and anger among customers significantly determine the loss of stock market valuation triggered by data breaches <a href="https://doi.org/10.1016/j.jbusres.2019.04.024">(Chatterjee et al., 2019)</a>.
</p>
<div className="legend-item"><span className="legend-dot neutral-dot"></span><h3>&nbsp;&nbsp;Consumer attitude</h3></div>
                            <p className="description"><a href="https://www.rand.org/pubs/research_reports/RR1187.html">Ablon et al. (2016)</a> indicate that only 11 percent of consumers stop dealing with companies that have experienced privacy breaches. This finding is discussed by <a href="https://www.cambridge.org/core/books/abs/cambridge-handbook-of-compliance/data-security-data-breaches-and-compliance/FBD5540A170C1012219DC26E75F33E81">Chatterjee and Daniel (2021)</a>.
</p>
                        </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'RDB':
            return(
                <div className="modal">
                    <div className="small-card">
                    <SmallCard />
                    </div>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Response to Data Breaches</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;CEO response  </h3></div>
                            <p className="description">Firm responses to data breach play an important role in mitigating reputational damage. CEO apology can help restore customer trust <a href="https://aisel.aisnet.org/mwais2014/22/">(Bansal, 2014)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Firm response</h3></div>
                            <p className="description">Whereas denial of responsibility is detrimental to firm reputation <a href="https://doi.org/10.1057/s41299-021-00121-9">(Kuipers and Schonheit, 2022)</a>; in contrast, blame attribution do not significantly affect customer behavior <a href="https://ieeexplore.ieee.org/abstract/document/9024216">(Angelis and Miller, 2021)</a>.
                            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Consistent and timely adoption
of compensation and rectification strategies also assist reputational recovery <a href="https://doi.org/10.1016/j.pubrev.2020.101975">(Bentley and Ma, 2020;</a> <a href="https://doi.org/10.1057/s41299-021-00121-9">Kuipers and Schonheit, 2022)</a>, as customer perception of justice and feelings of violation affect post-breach behaviors such as word of mouth and likelihood to switch to different businesses
<a href="https://doi.org/10.1080/07421222.2015.1138375">(Choi et al., 2016)</a>.
</p>
                            </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'SP':
            return(
                <div className="modal">
                    <div className="small-card">
                    <SmallCard />
                    </div>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Suppliers & General public & community</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Supplier Relationship-Specific Investments & relationship termination  </h3></div>
                            <p className="description">Suppliers reduce their relationship-specific investments in relation to the breached firm following the breach, and are more likely to terminate their supplier-customer relationships with the breached firms <a href="http://dx.doi.org/10.2139/ssrn.3544245">(He et al., 2020a)</a>.
</p><div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Tweet sentiment & news sentiment  </h3></div>
                            <p className="description">Breached firms experience more negative sentiment among the public and community, which is reflected in both news media <a href="http://dx.doi.org/10.2139/ssrn.3907923">(Hsu et al., 2022)</a> and social media such as Twitter <a href="https://doi.org/10.1016/j.jsis.2018.12.001">(Syed, 2019;</a> <a href="https://aisel.aisnet.org/treos_amcis2020/48/">Safi, 2020)</a>, but the degree of reputational damage can be mitigated by the breached firms’social media marketing capabilities <a href="https://doi.org/10.1080/10496491.2018.1443310">(Mathur, 2019)</a>.
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
    <div className="Reputation" style={ReputationStyle}>
        <div className="flip-card-DR" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                    <div className="icon-and-text">
                        <FontAwesomeIcon icon={faThumbsUp} className="management-icon" />
                        <div>Reputation</div>
                    </div>
                    
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleCClick}>Consumers</a>
                    <a href="#" onClick={handleRDBClick}>Response</a>
                    <a href="#" onClick={handleSPClick}>Suppliers & General public & communitys</a>
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