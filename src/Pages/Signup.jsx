import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  TextField,
  Typography,
  IconButton,
  InputAdornment
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  formBox: {
    width: '100%',
    maxWidth: 400,
    p: 4,
    bgcolor: 'white',
    borderRadius: 3,
    boxShadow: 4,
  },
  fieldLabel: {
    mb: 1,
    fontWeight: 'bold',
  },
  iconGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    mt: 1,
  },
  authIcon: {
    border: '1px solid black',
    padding: '8px',
    borderRadius: '6px',
    fontSize: '36px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validatePassword = (pwd) => {
    const hasCapital = /[A-Z]/.test(pwd);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
    return pwd.length >= 4 && pwd.length <= 9 && hasCapital && hasSymbol;
  };

  const validate = () => {
    const newErrors = {};

    if (!fullName.trim()) newErrors.fullName = 'Full name is required';

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    } else if (localStorage.getItem(username)) {
      newErrors.username = 'Username already exists';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password =
        'Password must be 4-9 chars, include a capital letter & symbol';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = () => {
    if (!validate()) return;

    const userInfo = { fullName, email, username, password };
    localStorage.setItem(username, JSON.stringify(userInfo));
    alert('User registered successfully!');

    setFullName('');
    setEmail('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
  };

  return (
    <div style={styles.container}>
      <FormControl sx={styles.formBox}>
        <Typography variant="h4" align="center" gutterBottom>
          Create an Account
        </Typography>

        <FormGroup>
          <Typography variant="h6" sx={styles.fieldLabel}>
            Full Name:
          </Typography>
          <TextField
            label="Full Name"
            variant="standard"
            fullWidth
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={!!errors.fullName}
            helperText={errors.fullName}
            sx={{ mb: 3 }}
          />

          <Typography variant="h6" sx={styles.fieldLabel}>
            Email:
          </Typography>
          <TextField
            label="Email"
            variant="standard"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ mb: 3 }}
          />

          <Typography variant="h6" sx={styles.fieldLabel}>
            User Name:
          </Typography>
          <TextField
            label="User Name"
            variant="standard"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!errors.username}
            helperText={errors.username}
            sx={{ mb: 3 }}
          />

          <Typography variant="h6" sx={styles.fieldLabel}>
            Password:
          </Typography>
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="standard"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            sx={{ mb: 3 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Typography variant="h6" sx={styles.fieldLabel}>
            Confirm Password:
          </Typography>
          <TextField
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            variant="standard"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            sx={{ mb: 4 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleSignup}
            sx={{ mb: 3 }}
          >
            Sign Up
          </Button>

          <Typography
            variant="body1"
            align="center"
            sx={{ my: 2, color: 'text.secondary' }}
          >
            — OR —
          </Typography>

          <div style={styles.iconGroup}>
            <a
              href="https://accounts.google.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <GoogleIcon style={styles.authIcon} />
            </a>
            <a
              href="https://github.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <GitHubIcon style={styles.authIcon} />
            </a>
            <a
              href="https://www.linkedin.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <LinkedInIcon style={styles.authIcon} />
            </a>
          </div>

        </FormGroup>
      </FormControl>
    </div>
  );
};

export default Signup;
