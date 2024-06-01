import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';
const SmallCard = () => (
    <div className="small-card">
        <h3>Peer Effects</h3>
        <div className='small-card-text'>
        Cyberattacks have significant impacts not only on the breached firms but also on their industry
peers (i.e., competitors firms operating in the same industry as the breached firms). 
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
function PeerEffects() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalContent, setActiveModalContent] = useState('default')
  const [activeSMContent, setActiveSMContent] = useState('default');
  const [activePPContent, setActivePPContent] = useState('default');

  const PeerEffectsStyle = {  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'relative',
    top: 500,
    right: 280,
};

  const handleSMClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('SM');
  };

  const handlePPClick = () => {
    setIsModalOpen(true);
    setActiveModalContent('PP');
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setActiveModalContent('default');
    setActiveSMContent('default');
    setActivePPContent('default');
  }

  const renderModal = () => {
    switch (activeModalContent){
        case 'SM':
            return(
                <div className="modal">
                    <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Consumers</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Competitors' Share Price </h3></div>
                            <p className="description">Evidence shows that industry peer firms experience positive stock price changes in response to data breaches of their rival firms <a href="https://aisel.aisnet.org/cgi/viewcontent.cgi?article=1947&context=amcis2006">(Aytes et al., 2006;</a> <a href="https://doi.org/10.1016/j.im.2018.11.003">Jeong et al., 2019)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;Competitors' Share Price (contrary opinions) </h3></div>
                            <p className="description">However, a competing view is that industry peers of the breached firm also experience
negative stock price reactions to a data breach, which could reveal adverse information not only
concerning the breached firm but also relevant to all firms in that industry <a href="https://doi.org/10.1016/j.jfineco.2019.05.019">(Kamiya et al., 2021)</a>.</p>
<p className="description">
Consistent with this spillover or contagion effect, empirical evidence shows that industry peer firms from the same industry as the breached firms experience stock price declines in response to their rivals' data breaches, even when the peer firms themselves have not suffered data breaches <a href="https://link.springer.com/chapter/10.1007/978-3-319-26647-3_62">(Kashmiri et al., 2016;</a> <a href="https://doi.org/10.1509/jm.15.0497">Martin et al., 2017;</a> <a href="https://weis2017.econinfosec.org/wp-content/uploads/sites/6/2019/05/WEIS_2019_paper_13.pdf">Haislip et al., 2019;</a> <a href="https://doi.org/10.1016/j.jfineco.2019.05.019">Kamiya et al., 2021)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot neutral-dot"></span><h3>&nbsp;&nbsp;Depends on industry</h3></div>
                            <p className="description">Following a data breach, different industry peers of the breached firm experience different stock price reactions <a href="https://link.springer.com/chapter/10.1007/978-3-319-26647-3_62">(Kashmiri et al., 2016)</a>. Negative contagion is stronger when the rival firms and the breached firms are more similar in size and product markets or shared governance features (interlocked directors or overlap of institutional ownership), whereas the contagion effect is weaker when the peer firms have influential IT executives in their top management teams or engage in corporate social responsibility.
</p>
                            </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            );

        case 'PP':
            return(
                <div className="modal">
                    <SmallCard/>
                    <div className="large-card">
                    <h2 className="title">Determinants —— Consumers</h2>
                        <div className="content">
                            <div className="legend-item"><span className="legend-dot negative-dot"></span><h3>&nbsp;&nbsp;peers' brand capital </h3></div>
                            <p className="description">Supported by evidence of reputational contagion that spills over from the breached firms to
their industry peers <a href="https://doi.org/10.1016/j.frl.2022.102715">(Corbet and Goodell, 2022)</a>, which negatively affect peer firms' brand capital <a href="http://dx.doi.org/10.2139/ssrn.3907923">(Hsu et al., 2022)</a>.
</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>Internal Control Weaknesses&nbsp;&nbsp;&nbsp;&nbsp;</h3><span className="legend-dot negative-dot"></span><h3>Peer Audit Fees</h3></div>
                            <p className="description">In response to a rival firm's data breach which can potentially sound warning bells, peer firms
are documented to change their own cybersecurity policies and practices, specifically by reducing their internal control weaknesses <a href="https://doi.org/10.1016/j.jfds.2022.08.001">(Ashraf, 2021)</a>, increasing their auditing spending <a href="https://weis2017.econinfosec.org/wp-content/uploads/sites/6/2019/05/WEIS_2019_paper_13.pdf">(Haislip et al., 2019)</a>.</p>
                            <div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Performance of peer</h3></div>
                            <p className="description">For stock
market valuation, one view is that rival firms gain from a data breach against their competitor,
which prompt the breached firm's customers to switch their patronage to rival firms, leading to increased market share of the latter <a href="https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=c4f94252197c35108769c18e4d5205413894a981">(Ko and Dorantes, 2006;</a> <a href="https://www.igi-global.com/article/content/61419">Zafar et al., 2012)</a>.
</p>
<div className="legend-item"><span className="legend-dot positive-dot"></span><h3>&nbsp;&nbsp;Human resource</h3></div>
                                <p className="description">peer firms also appoint IT experts onto their top management teams <a href="https://doi.org/10.1016/j.jfds.2022.08.001">(Ashraf, 2021)</a>, as the presence of IT executives, such as CIO, can help mitigate potential negative reputation contagion from breached firms <a href="https://doi.org/10.1016/j.jaccpubpol.2021.106916">(Islam et al., 2022)</a>.
    </p>
                            </div>
                    </div>
                    <span className="close-btn" onClick={handleClose}>x</span>
                </div>
            )
    }
  }

  return (
    <div className="PeerEffects" style={PeerEffectsStyle}>
        <div className="flip-card-DP"  onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                    <div className="icon-and-text">
                        <FontAwesomeIcon icon={faHandshake} className="management-icon" />
                        <div>Peer Effects</div>
                    </div>
                    
                </div>
                <div className="card-back">
                    <a href="#" onClick={handleSMClick}>Stock Market Reaction</a>
                    <a href="#" onClick={handlePPClick}>Reputation, Policy and Procedures</a>
                </div>
            </div>
        </div>
        <div>    
            {renderModal()}
        </div>
    </div>
    
  );
}

export default PeerEffects;