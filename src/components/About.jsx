// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to our website! We are dedicated to providing the best services and experiences to our users. 
        Our team is passionate about what we do, and we strive to make a positive impact in our industry.
      </p>
      <p style={styles.paragraph}>
        Our journey began in [Year], and since then, we have been continuously evolving to meet the needs 
        of our growing community. Thank you for being part of our story!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
  },
};

export default About;
