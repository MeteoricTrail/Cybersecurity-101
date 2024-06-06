import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className="title" style={{height:'300px'}}>
       <h>Gamification of Cybersecurity 101</h>
      </div>

      <div className="background" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', padding: '20px', backgroundColor: '#fff', color: '#333', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '20px 0' }}>
        <div className="content" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '10px', display: 'inline-block', paddingBottom: '5px' }}>Background</h2>
          <div>
          <h3 style={{ fontSize: '1.2em', fontWeight: 'normal',width:'500px',textAlign:'justify' }}>The project “Cybersecurity 101” is developed as an industry outreach resource to disseminate the academic knowledge derived from a systematic review paper authored by Chelsea Liu and M. Ali Babar entitled “Cybersecurity Risk and Data Breaches for Corporations: A Systematic Review of Empirical Research”. </h3>
          <h3 style={{ fontSize: '1.2em', fontWeight: 'normal',width:'500px',textAlign:'justify' }}>This website and online game are designed to provide a user-friendly, self-paced learning resource to improve cybersecurity literacy for business executives, industry professionals, and general members of our community. </h3>
          </div>
        </div>
      </div>

      <div className="projectinfo">
  <div className="content">
    <div className="supervisors">
      <h2>Supervisors</h2>
      <div className="supervisor">
        {/* <img src="" alt="Supervisor 1" className="supervisor-img" /> */}
        <p>Professor Ali Babar</p>
        <p>School of Computer Science</p>
      </div>
      <div className="supervisor">
        {/* <img src="supervisor2.jpg" alt="Supervisor 2" className="supervisor-img" /> */}
        <br />
        <p>Associate Professor Chelsea Liu</p>
        <p>Adelaide Business School and CREST</p>
      </div>
    </div>
    <div className="center-content">
      <h2>Project Info</h2>
      <h3 style={{textAlign:'justify'}}>This industry outreach project is a student-led initiative for the dissemination of faculty research, completed under the guidance of faculty members of CREST, as a part of the coursework for the Master of Computing and Innovation (MCI) program at the School of Computer Science, The University of Adelaide. </h3>
      <h3 style={{ fontFamily: "'Arial', sans-serif", color: "#2E86C1", textAlign: "center", padding: "10px", border: "2px solid #2E86C1", borderRadius: "10px", backgroundColor: "#E8F8F5", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
  Have fun with it!
</h3>
    </div>
    <div className="team-members">
      <h2>Team Members</h2>
      <div className="member">
        {/* <img src="./image/Wang.JPG" alt="Team Member 1" className="member-img" /> */}
        <div>
          <p>Chuhan Wang</p>
          <p>Master of Computing and Innovation</p>
          <a href="https://www.linkedin.com/in/ryan-w-ch/">Linkedin</a>
        </div>
      </div>
      <div className="member">
        {/* <img src="member2.jpg" alt="Team Member 2" className="member-img" /> */}
        <div>
          <br />
          <p>Qingtong Zhang</p>
          <p>Master of Computing and Innovation</p>
        </div>
      </div>
      <div className="member">
        {/* <img src="member3.jpg" alt="Team Member 3" className="member-img" /> */}
        <div>
          <br />
          <p>Huanwei Xu</p>
          <p>Master of Computing and Innovation</p>
          <a href="https://www.linkedin.com/in/huanwei-gray-xu-4a384421a/">Linkedin</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Home