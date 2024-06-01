import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faFileContract } from '@fortawesome/free-solid-svg-icons';
const SmallCard = () => (
    <div className="small-card">
        <h3>Firm Operations</h3>
        <div className='small-card-text'>
        Apart from direct financial costs, the loss of market valuation triggered by cybersecurity
breaches also encompasses anticipated impairments to the breached firms’ future operations and
profitability, as estimated by stock market participants. This section reviews the evidence on how
cybersecurity breaches affect firm performance and specific corporate policies and outcomes.
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
function ConFirmOperations() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activeOPContent, setActiveOPContent] = useState('default');
  const [activeCFContent, setActiveCFContent] = useState('default');
  const [activeFISContent, setActiveFISContent] = useState('default');
  const [activeAAContent, setActiveAAContent] = useState('default');



  const handleOPClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('OP');
  };

  const handleCFClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('CF');
  };

  const handleFISClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('FIS');
  }

    const handleAAClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('AA');
    }
    

  const handleClose = () => {
    setIsModalOpen(false);
    setActiveModalContent('default');
    setActiveOPContent('default');
    setActiveCFContent('default');
  }


  const renderModal = () => {
    switch (activeModalContent){
        case 'OP':
            return(
                <div className="modal">
                    <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Operating Performance</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Productivity & Profitability & Inventory cost </h3></div>
                            <p className="description">Firms experience poorer operating performance in the wake of cybersecurity breaches, as evidenced by lower profitability between one to four years post-breach <a href="https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=c4f94252197c35108769c18e4d5205413894a981">(Ko and Dorantes, 2006;</a> <a href="https://doi.org/10.4018/irmj.2009040101">Ko et al., 2009;</a> <a href="https://www.igi-global.com/article/content/61419">Zafar et al., 2012;</a> <a href="https://aisel.aisnet.org/pacis2014/386/">Gwebu et al., 2014;</a> <a href="http://dx.doi.org/10.2139/ssrn.3907923">Hsu et al., 2022)</a>. 
                            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This impaired performance is attributable to reduced productivity <a href="https://doi.org/10.3233/JEM-180450">(Makridis and Dean, 2018;</a> <a href="http://dx.doi.org/10.2139/ssrn.3907923">Hsu et al., 2022)</a>, reduced sales revenue <a href="https://doi.org/10.1111/fire.12160">(Lending et al., 2018;</a> <a href="https://doi.org/10.2308/isys-52379">Richardson et al., 2019;</a> <a href="https://link.springer.com/chapter/10.1007/978-3-030-73100-7_49">Frimpong and Chen, 2021)</a>, slower sales growth <a href="https://doi.org/10.1016/j.jfineco.2019.05.019">(Kamiya et al., 2021;</a> <a href="http://dx.doi.org/10.2139/ssrn.3907923">Hsu et al., 2022)</a>, and increased expenses such as inventory cost <a href="https://ieeexplore.ieee.org/abstract/document/9159886">(Durowoju et al., 2022)</a>.</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Return on Assets (ROA)</h3></div>
                            <p className="description"><a href="https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=c4f94252197c35108769c18e4d5205413894a981">Ko and Dorantes (2006)</a> find that Return on Assets (ROA) decreases.</p>
                            <div className="legend-item"><span className="legend-dot neutral-dot"></span><h3>&nbsp;&nbsp;Sales </h3></div>
                            <p className="description">Post-breach declines in sales growth is concentrated among large firms and retail firms <a href="https://doi.org/10.1016/j.jfineco.2019.05.019">(Kamiya et al., 2021)</a>, suggesting that customer dissatisfaction hampers sales growth for consumer-facing companies and firms with high visibility.
                            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;However, <a href="https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=c4f94252197c35108769c18e4d5205413894a981">Ko and Dorantes (2006)</a> and <a href="https://doi.org/10.2308/isys-52379">Richardson et al. (2019)</a> demonstrate that sales and operating income remain stable.</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Long term performance </h3></div>
                            <p className="description">Long term performance ↓ <a href="https://doi.org/10.1111/fire.12160">(Lending et al., 2018)</a>: decline in sales for non-banks and declines in deposits for banks
</p>
<div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Future Firm Performance </h3></div>
                            <p className="description">Cybersecurity disclosure and investments have a positive effect on operating performance
<a href="https://www.emerald.com/insight/content/doi/10.1108/IMDS-10-2019-0536/full/html">(Yang et al., 2020)</a>, by boosting profitability <a href="http://dx.doi.org/10.2139/ssrn.3553470">(Havakhor et al., 2021)</a> and returns on R&D <a href="https://doi.org/10.1080/20430795.2021.1985951">(Gutiérrez Ponce et al., 2023)</a>.
Nevertheless, the positive effect takes time to eventuate (two years or more) as IT investments bring long-term, rather than immediate short-term, benefits <a href="http://dx.doi.org/10.2139/ssrn.3553470">(Havakhor et al., 2021)</a>.
</p>
                            </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'CF':
            return(
                <div className="modal">
                    <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Corporate Finance</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Cashholdings & Dividend </h3></div>
                            <p className="description">Following a data breach, the attacked firm reduces dividend payments <a href="https://doi.org/10.1016/j.irfa.2021.101795">(Tosun, 2021) </a>and increases cash-holdings <a href="https://doi.org/10.1111/fima.12274">(Garg, 2020;</a> <a href="https://doi.org/10.2308/isys-18-053">He et al., 2020b;</a> <a href="https://doi.org/10.1111/eufm.12289">Boasiako and Keefe, 2021)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Cost of Capital</h3></div>
                            <p className="description">Cybersecurity breaches also make capital raising more difficult, as breached firms experience higher cost of debt <a href="https://doi.org/10.2308/TAR-2018-0643">(Huang and Wang, 2020;</a> <a href="http://dx.doi.org/10.2139/ssrn.3406217">Sheneman, 2022)</a>, less favorable loan terms, such as more restrictive debt covenants demanding more collaterals <a href="https://doi.org/10.2308/TAR-2018-0643">(Huang and Wang, 2020)</a>. 
                            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nevertheless, firms can mitigate these negative consequences by engaging in remedial actions following breach incidents <a href="https://doi.org/10.2308/TAR-2018-0643">(Huang and Wang, 2020)</a>.</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Investment Policies</h3></div>
                            <p className="description">Breached firms experienced subsequent reduced innovation, as evidenced by decreased R&D expenditures of up to 10% in the following year <a href="https://doi.org/10.2308/isys-18-053">(He et al., 2020b)</a>, which could last three to five years post-breach <a href="https://doi.org/10.1016/j.irfa.2021.101795">(Tosun, 2021)</a>.
</p>
                            </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'FIS':
            return(
                <div className="modal">
                    <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Firm Investment Strategies </h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Mergers and Acquisitions (M&A) </h3></div>
                            <p className="description">Firms facing higher cybersecurity risks are less likely to pursue M&A <a href="http://dx.doi.org/10.2139/ssrn.4170093">(Lattanzio and Taillard, 2022)</a>, whereas firms with lower cybersecurity risks pursue more M&A deals and enjoy greater merger success, as evidenced by higher post-merger financial performance and less
goodwill impairment <a href="http://dx.doi.org/10.2139/ssrn.4170093">(Lattanzio and Taillard, 2022)</a>. This could be because firms facing excessive cybersecurity risks are tempted by lower-quality M&A opportunities, given that M&A provides a potential strategy to combat cybersecurity risk <a href="https://doi.org/10.1016/B978-0-12-800353-4.00006-3">(Moskowitz, 2017)</a>. 

</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Unrelated Divestiture </h3></div>
                            <p className="description">Cybersecurity risks also affect other corporate investments by restricting
corporate expansions and increasing the likelihood to curb current investments <a href="https://doi.org/10.1287/stsc.2020.0106">(Say and Vasudeva, 2020)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Corporate Social Responsibility investment & social capital </h3></div>
                            <p className="description">To combat the reputational damage caused by data breaches, firms seek to restore their reputation by increasing CSR investment <a href="https://www.proquest.com/openview/53debaf3610c4ef47647a6eb79bf5085/1?pq-origsite=gscholar&cbl=44156">(Jasa, 2020;</a> <a href="http://dx.doi.org/10.2139/ssrn.3143740">Akey et al., 2021)</a>, thereby enhancing their social capital <a href="https://doi.org/10.1111/fire.12160">(Lending et al., 2018)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Lobbying Spending </h3></div>
                            <p className="description">Breached firms also seek to rebuild political capital by increasing their lobbying expenditure <a href="http://dx.doi.org/10.2139/ssrn.4263031">(Li et al., 2022)</a>.
</p>
                            </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'AA':
            return(
                <div className="modal">
                    <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Consumers</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>Audit Fees&nbsp;&nbsp;&nbsp;&nbsp;</h3><span className="legend-dot positive-dot"></span><h3>Audit Quality </h3></div>
                            <p className="description">Experiencing data breaches can enable firms to gain a greater awareness of their exposure
to cybersecurity risk, particularly following recurring breaches <a href="https://rucore.libraries.rutgers.edu/rutgers-lib/55281/">(Li, 2017)</a>, thereby prompting firms
to strengthen their auditing process, which leads to enhanced audit quality <a href="https://doi.org/10.1080/09638180.2020.1856162">(Rosati et al., 2022)</a> and increased audit fees <a href="https://rucore.libraries.rutgers.edu/rutgers-lib/55281/">(Li, 2017;</a> <a href="https://doi.org/10.1016/j.jaccpubpol.2018.10.002">Yen et al., 2018;</a> <a href="https://www.worldscientific.com/doi/abs/10.1142/S1094406019500136">Rosati et al., 2019b;</a> <a href="https://doi.org/10.2308/ajpt-52593">Li et al., 2020)</a>.
<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For example, <a href="https://www.worldscientific.com/doi/abs/10.1142/S1094406019500136">Rosati et al. (2019b)</a> documents a 12% increase in audit fees for firms that have experienced data breaches.
</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Information transparency &  Earnings quality </h3></div>
                            <p className="description">Data breaches are found to lead to decreased information transparency <a href="https://aisel.aisnet.org/pacis2014/386/">(Gwebu et al., 2014)</a> and reduced earnings quality <a href="https://doi.org/10.1108/ARA-10-2020-0169">(Nie and Xu, 2021)</a>.</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Earnings Management & Restatements </h3></div>
                            <p className="description">Evidence suggests that breached firms exhibit higher
financial reporting quality, as represented lower earnings management (proxied by discretionary accruals) and fewer accounting restatements in the two-year period following data breaches <a href="https://doi.org/10.1080/09638180.2020.1856162">(Rosati et al., 2022)</a>.
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
    <div className="ConFirmOperations" style={ConFirmOperationsStyle}>
        <div className="flip-card-DCFO" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                    <div className="icon-and-text">
                        <FontAwesomeIcon icon={faFileContract} className="management-icon" />
                        <div>Firm Operations</div>
                    </div>
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleOPClick}>Operating Performance</a>
                    <a href="#" onClick={handleCFClick}>Corporate Finance</a>
                    <a href="#" onClick={handleFISClick}>Investment Strategies</a>
                    <a href="#" onClick={handleAAClick}>Auditing & Accounting</a>
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

const ConFirmOperationsStyle = {  
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'relative',
      top: 0,
      right: 0,
  };