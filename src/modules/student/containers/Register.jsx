import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, Typography, Paper, FormControl, FormHelperText, InputLabel } from '@cw/rds';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

const Register = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const navigate = useNavigate();
  const [captchaToken, setCaptchaToken] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (localStorage.getItem(`registered-${id}`)) {
      navigate('/already-registered');
    }
  }, [id, navigate]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!captchaToken) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    if (!validate()) return;

    if (localStorage.getItem(`registered-${id}`)) {
      navigate('/already-registered');
      return;
    }

    const newEntry = {
      id,
      ...formData,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem(`registered-${id}`, JSON.stringify(newEntry));

    const examKey = `exam-${id}-registrations`;
    const examData = JSON.parse(localStorage.getItem(examKey) || '[]');
    examData.push(newEntry);
    localStorage.setItem(examKey, JSON.stringify(examData));

    const allData = JSON.parse(localStorage.getItem('all-registrations') || '[]');
    allData.push(newEntry);
    localStorage.setItem('all-registrations', JSON.stringify(allData));

    navigate('/success');
  };

  return (
    <Box
      component='main'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7',
        padding: '0 1rem'
      }}>
      <Paper
        elevation={4}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '2rem',
          borderRadius: '12px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
        }}>
        <Typography
          variant='h5'
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#0B1D51',
            marginBottom: '1.5rem',
            fontFamily: 'Roboto, sans-serif'
          }}>
          Register for Exam
        </Typography>

        <Box
          component='form'
          onSubmit={handleSubmit}
          noValidate
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem'
          }}>
          <FormControl fullWidth error={!!errors.name}>
            <InputLabel shrink>Name</InputLabel>
            <TextField
              fullWidth
              margin='none'
              placeholder='Name'
              variant='outlined'
              size='xlarge'
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
            {!!errors.name && <FormHelperText>{errors.name}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth error={!!errors.email}>
            <InputLabel shrink>Email</InputLabel>
            <TextField
              type='email'
              fullWidth
              margin='none'
              placeholder='Email'
              variant='outlined'
              size='xlarge'
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
            {!!errors.email && <FormHelperText>{errors.email}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth error={!!errors.phone}>
            <InputLabel shrink>Phone</InputLabel>
            <TextField
              type='tel'
              fullWidth
              margin='none'
              placeholder='Phone'
              variant='outlined'
              size='xlarge'
              inputProps={{ maxLength: 10 }}
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
            />
            {!!errors.phone && <FormHelperText>{errors.phone}</FormHelperText>}
          </FormControl>

          <Box
            style={{
              margin: '0.5rem 0'
            }}>
            <ReCAPTCHA
              sitekey='6LeUr2IrAAAAACi8s1-MJOMKt1iDA6FXQQ9OzjmO'
              onChange={token => setCaptchaToken(token)}
              onExpired={() => setCaptchaToken(null)}
            />
          </Box>

          <Button
            type='submit'
            variant='secondary1'
            fullWidth
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
            Register
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
