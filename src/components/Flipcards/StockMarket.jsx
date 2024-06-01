import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const SmallCard = () => (
    <div className="small-card">
        <h3>Stock Market Consequences </h3>
        <div className='small-card-text'>
            We synthesize the empirical evidence on factors that affect firm 
            valuation losses by mitigating or exacerbating stock price reaction to data breaches. These factors fall into four categories: (i) factors 
            relating to the cyberattack incident, (ii) corporate responses to the attacks, (iii) firm-specific characteristics, and (iv) macro-/environmental 
            or temporal factors beyond the firms’ control. <br /> <br />
            &nbsp; &nbsp;Synthesized body of evidence shows that cyberattack-, response-, firm-level, and
            environmental characteristics all play a role in determining the market reactions to data breaches.
            These findings offer valuable practical implication for managers who seek to reduce or minimize
            the negative impact of cybersecurity breaches on the stock market valuation of their firms.
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


function StockMarket() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activeABRFContent, setActiveABRFContent] = useState('default');
  const [activeFRAContent, setActiveFRAContent] = useState('default');

  
  const StockMarketStyle = {  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'relative',
    top: 0,
    right: 500,
};

  const handleABRFClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('ABRF');
  };

  const handleFRAClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('FRA');
  };

  const handleFSFClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('FSF');
  }

    const handleOSMCClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('OSMC');
    }
    

  const handleClose = () => {
    setIsModalOpen(false);
    setActiveModalContent('default');
    setActiveABRFContent('default');
    setActiveFRAContent('default');
  }

  const renderModal = () => {
    switch (activeModalContent){
        case 'ABRF':
            return(
                <div className="modal">
                    <SmallCard />
                    <div className="large-card">
                    <h2 className="title">Determinants —— Attack-/Breach-Related Factors</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>Breach Type</h3></div>
                            <div className="legend-item" style={{textIndent:'2em'}}><h3>&nbsp;&nbsp;Denial of service & Phishing trigger </h3></div>
                            <p className="description"style={{textIndent:'2em'}}>Investors respond more negatively to attacks involving denial of service <a href="https://doi.org/10.1057/jit.2010.4">(Gordon et al., 2011;</a> <a href="https://doi.org/10.1057/s41288-020-00170-x">Yayla and Hu, 2011;</a> <a href="http://dx.doi.org/10.2139/ssrn.3589701">McShane and Nguyen, 2020)</a> and phishing <a href="http://dx.doi.org/10.2139/ssrn.3589701">(McShane and Nguyen, 2020)</a>, compared with unauthorized access to customer data.</p>
                            <div className="legend-item" style={{textIndent:'2em'}}><h3>&nbsp;&nbsp;Loss of customer data & Personal information  </h3></div>
                            <p className="description"style={{textIndent:'2em'}}>Losses of customer personal information trigger more adverse reactions <a href="http://dx.doi.org/10.2139/ssrn.3589701">(Hogan et al., 2020;</a> <a href="https://doi.org/10.1016/j.cose.2021.102502">Masuch et al., 2022)</a>, particularly confidential information <a href="https://search.ebscohost.com/login.aspx?direct=true&AuthType=sso&db=bsu&AN=9972866&site=ehost-live&scope=site&custid=s6967740">(Campbell et al., 2003;</a> <a href="https://dx.doi.org/10.2139/ssrn.1083891">Tanimura and Wehrly, 2009)</a> or personal financial information <a href="http://dx.doi.org/10.2139/ssrn.3589701">(Hogan et al., 2020;</a> <a href="https://doi.org/10.1016/j.jfineco.2019.05.019">Kamiya et al., 2021)</a>. </p>
                            <div className="legend-item" style={{textIndent:'2em'}}><h3>&nbsp;&nbsp;Loss of personal financial information</h3></div>
                            <p className="description"style={{textIndent:'2em'}}>Some evidence shows that loss of personal financial information triggers the worst price reactions <a href="https://doi.org/10.1016/j.econlet.2023.111001">(Peng et al., 2023)</a>, even when compared with other confidential information such as social security numbers <a href="http://dx.doi.org/10.2139/ssrn.3589701">(McShane and Nguyen, 2020)</a>.</p>
                            <div className="legend-item" style={{textIndent:'2em'}}><h3>&nbsp;&nbsp;Temporal changes</h3></div>
                            <p className="description"style={{textIndent:'2em'}}><a href="https://doi.org/10.1145/3051473.3051476">Hovav et al. (2017)</a> study the adoption of privacy law in 2007 in South Korea and finds that pre-2007 attacks involving denial-of-service and corruption of data triggered more significant negative market reactions whereas post-2007 loss of private information triggered more negative market reactions.</p>
                        </div>
                        <div className="content">
                        <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>Preventable breach</h3></div>
                            <p className="description"style={{textIndent:'2em'}}>Firms suffer more negative market reactions following preventable attacks which could have been avoided by adopting reasonable precautions <a href="https://doi.org/10.1080/19393555.2011.611860">(Morse et al., 2011)</a> and second-time breaches after a prior breach <a href="https://doi.org/10.1016/j.econlet.2023.111001">(Peng et al., 2023)</a>.</p>
                        </div>
                        <div className="content">
                        <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>Scope of breach</h3></div>
                            <p className="description"style={{textIndent:'2em'}}>Worse stock market reactions occur in response to larger-scale attacks affecting more customers <a href="https://doi.org/10.1016/j.jbusres.2019.04.024">(Chatterjee et al., 2019)</a> and high-profile attacks with media coverage in major news outlets <a href="https://doi.org/10.2202/1932-9156.1081">(Bolster et al., 2010)</a>.</p>
                        </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'FRA':
            return(
                <div className="modal">
                    <SmallCard />
                    <div className="large-card">
                    <h2 className="title">Determinants —— Firm Response to Attacks</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Withholding information</h3></div>
                            <p className="description">Generally, withholding or delaying information release
about the attacks result in worse market reactions <a href="https://doi.org/10.1111/j.1540-6296.2010.01178.x">(Gatzlaff and McCullough, 2010;</a> <a href="https://doi.org/10.1016/j.jfds.2022.08.001">Ashraf et al., 2022)</a>;
</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Timely notification </h3></div>
                            <p className="description">Timely disclosure and notification of the attacks help firms mitigate losses of market valuation <a href="http://hdl.handle.net/10125/41764">(Song et al., 2017;</a> <a href="https://doi.org/10.1007/s11142-018-9452-4">Amir et al., 2018)</a>, but only when the disclosure is kept succinct <a href="http://hdl.handle.net/10125/41764">(Song et al., 2017)</a>.</p>
                            <div className="legend-item"><span className="legend-dot neutral-dot"></span><h3>&nbsp;&nbsp;Response strategy</h3></div>
                            <p className="description"><span className='red-text'>Apology, excuses, and denial</span> are ineffective in mitigating stock price declines <a href="https://doi.org/10.1080/07421222.2018.1451962">(Gwebu et al., 2018;</a> <a href="https://doi.org/10.1016/j.cose.2021.102502">Masuch et al., 2022)</a>. <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Some short-term corporate response strategies are more effective than others in reducing stock market losses in the aftermath of cyberattacks. <span className='green-text'><a href="https://doi.org/10.1080/07421222.2018.1451962">Gwebu et al. (2018)</a> group these response strategies into four categories: image renewal (through correction commitment and stakeholder/value commitment), defensive (e.g., denial, excuses), moderating (ingratiation,
justification), and accommodative strategies (apology, remedial).</span>
Nevertheless, firm response strategies matter less for highly reputable firms <a href="https://doi.org/10.1080/07421222.2018.1451962">(Gwebu et al., 2018)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot neutral-dot"></span><h3>&nbsp;&nbsp;Use of social media</h3></div>
                            <p className="description">Social media
exposure exacerbate stock market reactions to data breaches, particularly <span className='red-text'>if the data breach is announced by a company’s Twitter account <a href="https://doi.org/10.1016/j.ribaf.2018.09.007">(Rosati et al., 2019a)</a>.</span> However, for <span className='green-text'>firms which have low visibility on traditional media</span>, social media exposure of a data breach can save
the firms from experiencing negative stock price changes <a href="https://doi.org/10.1016/j.ribaf.2018.09.007">(Rosati et al., 2019a)</a>.
</p>
<div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Replace CEO after 1st breach</h3></div>
                            <p className="description"><a href="https://doi.org/10.1016/j.econlet.2023.111001">Peng et al. (2023)</a> finds that if firms replace their CEOs after an initial data breach, subsequent second breaches do not trigger significantly negative market reactions; whereas in the absence of CEO replacement following the first breach, second-time breaches trigger worse market reactions.
</p>
                        </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'FSF':
            return(
                <div className="modal">
                    <SmallCard />
                    <div className="large-card">
                    <h2 className="title">Determinants —— Firm-Specific Factors</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot neutral-dot"></span><h3>&nbsp;&nbsp;Firm characteristics</h3></div>
                            <p className="description">Stock markets react less negatively to data breaches suffered by <span className="green-text"> larger firms <a href="https://doi.org/10.1111/j.1540-6296.2010.01178.x">(Gatzlaff and McCullough, 2010)</a> and subsidiary companies <a href="https://doi.org/10.1111/j.1540-6296.2010.01178.x">(Gatzlaff and McCullough, 2010)</a></span>, but more severely when <span className="red-text">the firms are older <a href="https://doi.org/10.1016/j.jfineco.2019.05.019">(Kamiya et al., 2021)</a> and have higher market valuation <a href="https://doi.org/10.1111/j.1540-6296.2010.01178.x">(Gatzlaff and McCullough, 2010)</a>. </span></p>
                            <div className="legend-item"><span className="legend-dot neutral-dot"></span><h3>&nbsp;&nbsp;Industry</h3></div>
                            <p className="description">Industry matters significantly: for example, <span className='red-text'>retail and service industries</span> are more frequently
targeted <a href="http://dx.doi.org/10.2139/ssrn.3589701">(Hogan et al., 2020;</a> <a href="https://doi.org/10.1016/j.jfineco.2019.05.019">Kamiya et al., 2021)</a> and experience worse market reactions <a href="http://dx.doi.org/10.2139/ssrn.3589701">(Hogan et al., 2020;</a> <a href="https://doi.org/10.1057/s41288-020-00170-x">McShane and Nguyen, 2020)</a>; <span className='red-text'>financial firms</span> also suffer worse stock price declines <a href="https://doi.org/10.1108/ICS-05-2018-0060">(Tweneboah-Kodua et al., 2018)</a>. But some evidence shows that this could be due to market overaction <a href="http://dx.doi.org/10.2139/ssrn.3589701">(Hogan et al., 2020)</a>.  <br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Technology firms attract mixed evidence: some researchers
document stronger market reactions to breach of technology firms <a href="https://doi.org/10.1016/j.jisa.2014.07.001">(Pirounias et al., 2014)</a>.
Similarly, e-commerce firms are also found to suffer worse market reactions to data breaches <a href="https://doi.org/10.1057/jit.2010.4">(Yayla and Hu, 2011)</a>.whereas others find weaker share price reactions because technology firms to have the capacity to deal with cyberattacks <a href="https://doi.org/10.1108/ICS-05-2018-0060">(Tweneboah-Kodua et al., 2018)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Governance</h3></div>
                            <p className="description">Corporate governance
plays a key role in mitigating valuation losses triggered by data breaches: firms experience less
negative market reactions when its board of directors has a technology committee <a href="https://doi.org/10.2308/isys-51402">(Higgs et al., 2016)</a> and pay greater attention to risk management <a href="https://doi.org/10.1016/j.jfineco.2019.05.019">(Kamiya et al., 2021)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Reputation</h3></div>
                            <p className="description">Firm reputation serves to cushion the firms from stock price declines <a href="https://doi.org/10.1080/07421222.2018.1451962">(Gwebu et al., 2018)</a>.</p>
                        </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )

        case 'OSMC':
            return(
                <div className="modal">
                    <SmallCard />
                    <div className="large-card">
                    <h2 className="title">Determinants —— Other Stock Market Consequences </h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Long-Term Market Returns</h3></div>
                            <p className="description">Apart from affecting companies’ stock price in the short term, data breaches and cybersecurity
disclosure also have other stock market impacts. Firms that have experienced data breaches have worse long-term market returns
<a href="https://doi.org/10.4018/irmj.2009040101">(Ko et al., 2009;</a> <a href="https://doi.org/10.3390/math8050808">Chang et al., 2020;</a> <a href="http://dx.doi.org/10.2139/ssrn.3589701">Hogan et al., 2020)</a></p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Risk & Volatility  </h3></div>
                            <p className="description">Data breaches significantly increase the firms’ stock price volatility <a href="https://doi.org/10.1016/j.irfa.2019.101386">(Corbet and Gurdgiev, 2019;</a> <a href="https://business.unl.edu/academic-programs/departments/accounting/about/seminar-series/documents/PhillipLamoreaux.pdf">Alhusaini et al., 2022;</a> <a href="https://doi.org/10.1016/j.frl.2022.103329">Goodell and Corbet, 2022)</a> and risk <a href="https://ora.ox.ac.uk/objects/uuid:9f44d247-1337-4fbb-b833-ca67815ceba7">(Malliouris and Simpson, 2020;</a> <a href="https://doi.org/10.3905/jpm.2021.1.286">Alan et al., 2021)</a>. For example, empirical researchers use regular and downside beta as proxies for firm risk <a href="https://ora.ox.ac.uk/objects/uuid:9f44d247-1337-4fbb-b833-ca67815ceba7">(Malliouris and Simpson, 2020)</a>
<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Following data breaches, attacked firms also experience
increased trading volume <a href="https://doi.org/10.1016/j.irfa.2017.01.001">(Rosati et al., 2017;</a> <a href="https://heinonline.org/HOL/P?h=hein.journals/hbusrew9&i=9">Mitts and Talley, 2019;</a> <a href="https://doi.org/10.1016/j.irfa.2021.101795">Tosun, 2021)</a>, higher
liquidity <a href="https://doi.org/10.1016/j.irfa.2021.101795">(Tosun, 2021)</a>, and increased information asymmetry as measured by higher bid-ask
spread in the stock markets <a href="https://doi.org/10.1016/j.irfa.2017.01.001">(Rosati et al., 2017;</a> <a href="https://business.unl.edu/academic-programs/departments/accounting/about/seminar-series/documents/PhillipLamoreaux.pdf">Alhusaini et al., 2022)</a>.
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
    <div className="StockMarket" style={StockMarketStyle}>
        <div className="flip-card-DSM" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                    <div className="icon-and-text">
                        <FontAwesomeIcon icon={faChartLine} className="management-icon" />
                        <div>Stock Market</div>
                    </div>
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleABRFClick}>Attack-/Breach-Related Factors</a>
                    <a href="#" onClick={handleFRAClick}>Firm Response to Attacks</a>
                    <a href="#" onClick={handleFSFClick}>Firm-Specific Factors</a>
                    <a href="#" onClick={handleOSMCClick}>Other Stock Market Consequences</a>
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