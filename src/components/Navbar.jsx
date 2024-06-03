import React, { useState } from "react";
import {Link} from "react-router-dom";
import Resources from "../pages/Resources";

const Navbar = () => {
  const [isHovered_resource, setIsHovered_resource] = useState(false);
  const [isHovered_about, setIsHovered_about] = useState(false);

  const handleHover_resource = () => {
    setIsHovered_resource(true);
    setIsHovered_about(false);
  };

  const handleLeave_resource = () => {
    setIsHovered_resource(false);
  };

  const handleHover_about = () => {
    setIsHovered_about(true);
    setIsHovered_resource(false);
  };
  const handleLeave_about = () => {
    setIsHovered_about(false);
  };

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">logo</div>

        <div className="home_btn">
          <Link className="link" to="/">
            <button>Home</button>
          </Link>
        </div>

        <div className="roadmap_btn">
          <Link className="link" to="/roadmap">
            <button>Roadmap</button>
          </Link>
        </div>

        <div className="game_btn">
          <Link className="link" to="https://iamulaodou.itch.io/cyber101">
            <button>Game</button>
          </Link>
        </div>

        <div className="resources_btn">
          <button onMouseEnter={handleHover_resource}>
            Resources
          </button>
          {isHovered_resource && (
            <div className="resources_unfold" onMouseLeave={handleLeave_resource}>
              <Resources/>
            </div>
          )}
        </div>

        <div className="about_btn">
          <button onMouseEnter={handleHover_about}>
            About
          </button>
          {isHovered_about && (
            <div className="about_unfold" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onMouseLeave={handleLeave_about}>
              <p style={{textAlign:'justify',width:'800px'}}>The project “Cybersecurity 101” is developed as an industry outreach resource to disseminate the academic knowledge derived from a systematic review paper authored by Chelsea Liu and M. Ali Babar entitled “Cybersecurity Risk and Data Breaches for Corporations: A Systematic Review of Empirical Research”. Content of this website contains quotes from the aforementioned paper, as well as citations and references to other academic studies included in the systematic review. </p>
            </div>
          )}
        </div>  

      </div>
    </div>
  )
}

export default Navbar