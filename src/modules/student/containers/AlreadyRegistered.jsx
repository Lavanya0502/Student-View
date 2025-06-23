import React from 'react';
import { Box, Typography, Paper } from '@cw/rds';
import { CircleCross } from '@cw/rds/icons';

const AlreadyRegistered = () => (
  <Box
    minHeight="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    px={2}
    style={{
      backgroundColor: 'var(--error-light)',
      overflow: 'hidden',
    }}
  >
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
        backgroundColor: 'var(--background-default)',
      }}
    >
      <CircleCross
        color="error"
        size='xlarge'
      />

      <Typography
        variant="h4"
        style={{
          fontWeight: 'bold',
          color: 'var(--error-dark)',
          marginBottom: '0.75rem',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        Already Registered!
      </Typography>

      <Typography
        variant="body1"
        style={{
          color: 'var(--text-secondary)',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        Your registration has already been captured.
      </Typography>
    </Paper>
  </Box>
);

export default AlreadyRegistered;
