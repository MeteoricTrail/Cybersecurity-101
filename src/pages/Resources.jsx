import React from 'react';
import { Link } from "react-router-dom";

const styles = {
  resources: {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    textAlign: 'right',
  },
  title: {
    color: 'white',
    fontSize: '24px',
    marginBottom: '10px',
  },
  link: {
    color: '#1E90FF',
    textDecoration: 'none',
  },
  linkHover: {
    color: '#87CEFA',
    textDecoration: 'underline',
  },
  paragraph: {
    margin: '10px 0',
  }
};

const Resources = () => {
  return (
    <div style={styles.resources}>
      {/* <h style={styles.title}>Resources</h> */}
      <div style={{height:'10px'}}></div>
      <a
        href='https://business.adelaide.edu.au/'
        style={styles.link}
        onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
        onMouseLeave={(e) => Object.assign(e.target.style, styles.link)}
      >   
        Adelaide Business School | University of Adelaide
      </a>
      <p style={styles.paragraph}>
        <Link
          style={styles.link}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
          onMouseLeave={(e) => Object.assign(e.target.style, styles.link)}
          to='https://www.ibm.com/reports/data-breach'
        >
          IBM's Cost of a Data Breach Report 2023
        </Link>
      </p>
      <p style={styles.paragraph}>
        <Link
          style={styles.link}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.linkHover)}
          onMouseLeave={(e) => Object.assign(e.target.style, styles.link)}
          to='https://www.cyber.gov.au/'
        >
          Australian Cyber Security Centre
        </Link>
      </p>
    </div>
  );
}

export default Resources;
