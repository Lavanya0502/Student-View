import React from 'react';
import { Box, Button, Typography, Paper } from '@cw/rds';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      minHeight='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      px={2}
      style={{
        backgroundColor: 'var(--background-paper)'
      }}>
      <Box style={{ width: '100%', maxWidth: 500, margin: '0 auto', padding: '0 1rem' }}>
        <Paper
          elevation={4}
          style={{
            padding: '2rem',
            textAlign: 'center',
            borderRadius: '16px',
            backgroundColor: 'var(--background-default)'
          }}>
          <Typography
            variant='h4'
            style={{
              marginBottom: '1.5rem',
              fontSize: '2.2rem',
              fontWeight: 'bold',
              color: 'var(--text-primary)',
              fontFamily: 'Roboto, sans-serif'
            }}>
            Welcome to the Exam Portal
          </Typography>

          <Box
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
            <Button
              variant='outlined'
              onClick={() => navigate('/scan')}
              sx={{
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary-main)',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '14px',
                px: 2,
                py: 1,
                minWidth: '200px',
                boxShadow: 'none',
                border: 'none',
                '&:hover': {
                  backgroundColor: 'var(--primary-light)',
                  boxShadow: 'none'
                }
              }}>
              Proceed to Exam
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
