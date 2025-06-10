import { useState } from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  TextField,
  Typography,
  InputAdornment,
  IconButton
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuth } from '../Componets/Security/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login, user } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;

    if (!username.trim()) {
      setUsernameError('Username is required');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleLogin = () => {
    if (!validateForm()) return;

    setLoading(true);
    const success = login(username, password);
    setLoading(false);

    if (!success) {
      setError('Invalid username or password');
    } else {
      setError('');
      navigate('/home');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <FormControl
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 4,
          bgcolor: 'white',
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Welcome back
        </Typography>

        <FormGroup>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
            User Name:
          </Typography>
          <TextField
            id="UserName"
            label="User Name"
            variant="standard"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!usernameError}
            helperText={usernameError}
            sx={{ mb: 3 }}
          />

          <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
            Password:
          </Typography>
          <TextField
            id="Password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="standard"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
            sx={{ mb: 4 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              alignContent: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              onClick={handleLogin}
              disabled={loading}
              type="submit"
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
            <Button variant="contained" onClick={() => navigate('/signup')}>
              Sign up
            </Button>
          </div>

          {error && (
            <Typography color="error" align="center" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          {user && (
            <Typography sx={{ mt: 2, color: 'green', textAlign: 'center' }}>
              Logged in as {user.username}
            </Typography>
          )}

          <Typography
            variant="body1"
            align="center"
            sx={{ my: 2, color: 'text.secondary' }}
          >
            — OR —
          </Typography>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <GoogleIcon
              style={{
                border: '1px solid black',
                padding: '8px',
                borderRadius: '6px',
                fontSize: '36px',
                cursor: 'pointer',
                color: 'black',
              }}
            />
            <GitHubIcon
              style={{
                border: '1px solid black',
                padding: '8px',
                borderRadius: '6px',
                fontSize: '36px',
                cursor: 'pointer',
                color: 'black',
              }}
            />
            <LinkedInIcon
              style={{
                border: '1px solid black',
                padding: '8px',
                borderRadius: '6px',
                fontSize: '36px',
                cursor: 'pointer',
                color: 'black',
              }}
            />
          </div>
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default Login;
