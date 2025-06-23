import React from 'react';
import { Box, Typography, Paper } from '@cw/rds';
import { CircleCheckbox } from '@cw/rds/icons';

const Success = () => (
  <Box
    minHeight='100vh'
    display='flex'
    alignItems='center'
    justifyContent='center'
    px={2}
    style={{
      backgroundColor: 'var(--success-light)',
      overflow: 'hidden'
    }}>
    <Paper
      elevation={4}
      style={{
        padding: '2rem',
        textAlign: 'center',
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
        borderRadius: '12px',
        boxShadow: 'var(--shadow-2)',
        backgroundColor: 'var(--background-default)'
      }}>
      <CircleCheckbox
        color='success'
        size='xlarge' 
      />

      <Typography
        variant='h4'
        style={{
          fontWeight: 'bold',
          color: 'var(--text-primary)',
          marginBottom: '0.75rem',
          fontFamily: 'Roboto, sans-serif'
        }}>
        Registration Successful!
      </Typography>

      <Typography
        variant='body1'
        style={{
          color: 'var(--text-secondary)',
          fontFamily: 'Roboto, sans-serif'
        }}>
        You&apos;re all set. We&apos;ll see you at the exam!
      </Typography>
    </Paper>
  </Box>
);

export default Success;
