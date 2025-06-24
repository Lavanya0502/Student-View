import React from 'react';
import { Box, Typography, Paper, Link } from '@cw/rds';
import { CircleCross } from '@cw/rds/icons';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
        variant="body1"
        style={{
          marginBottom: '1rem',
          fontWeight: 500,
          fontFamily: 'Roboto, sans-serif',
          color: 'var(--text-primary)'
        }}
      >
        Your registration is captured already
      </Typography>

      <Box mb={1}>
        <Link
          href="https://www.incture.com"
          target="_blank"
          underline="hover"
          sx={{ display: 'flex',textDecoration: 'none',alignItems: 'center', justifyContent: 'center', gap: '4px' }}
        >
          Know more about Incture <OpenInNewIcon fontSize="small" />
        </Link>
      </Box>

      <Box mb={2}>
        <Link
          href="https://www.cherrywork.com"
          target="_blank"
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}
        >
          Know more about Cherrywork <OpenInNewIcon fontSize="small" />
        </Link>
      </Box>
    </Paper>
  </Box>
);

export default AlreadyRegistered;
