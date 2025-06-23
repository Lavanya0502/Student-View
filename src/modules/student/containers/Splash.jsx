import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <p style={styles.powered}>Powered by</p>
        <img src="assets/logo.png" alt="Incture Logo" style={styles.logoImage} />
        <p style={styles.tagline}>
          Enhancing People’s Lives with Digital Innovation
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'var(--background-paper)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    padding: '32px 24px',
    background: 'var(--background-default)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
  },
  powered: {
    fontSize: '0.9rem',
    letterSpacing: '1.5px',
    color: 'var(--text-tertiary)',
    marginBottom: '8px',
    fontWeight: 'bold',
    fontFamily: 'Roboto, sans-serif',
  },
  logoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  tagline: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    maxWidth: '280px',
    lineHeight: '1.4',
    fontStyle: 'italic',
    fontFamily: 'Roboto, sans-serif',
  },
};

export default Splash;
