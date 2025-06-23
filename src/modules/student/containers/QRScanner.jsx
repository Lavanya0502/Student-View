import React, { useEffect, useRef } from 'react';
import { BrowserQRCodeReader } from '@zxing/browser';
import { Box, Paper, Typography } from '@cw/rds';

const QRScanner = () => {
  const videoRef = useRef(null);
  const readerRef = useRef(null);

  useEffect(() => {
    const codeReader = new BrowserQRCodeReader();
    readerRef.current = codeReader;

    let stopStream = null;

    codeReader.decodeFromVideoDevice(null, videoRef.current, (result, error, controls) => {
      if (result) {
        console.log('QR Code:', result.getText());
        controls.stop();
        window.location.href = result.getText();
      }

      if (error && error.name !== 'NotFoundException') {
        console.warn('QR error:', error);
      }

      stopStream = controls.stop;
    });

    return () => {
      if (stopStream) {
        stopStream();
      }
    };
  }, []);

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
      <Paper
        elevation={4}
        style={{
          width: '100%',
          maxWidth: 420,
          padding: '2rem',
          borderRadius: '16px',
          textAlign: 'center',
          backgroundColor: 'var(--background-default)'
        }}>
        <Typography
          variant='h5'
          style={{
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            fontFamily: 'Roboto, sans-serif',
            color: 'var(--text-primary)'
          }}>
          Scan your Exam QR
        </Typography>

        <Box
          style={{
            width: '100%',
            aspectRatio: '1 / 1',
            borderRadius: '8px',
            overflow: 'hidden',
            margin: '0 auto',
            boxShadow: 'var(--shadow-1)'
          }}>
          <video
            ref={videoRef}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default QRScanner;
