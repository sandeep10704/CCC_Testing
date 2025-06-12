
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { purple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export default function LoginButtons() {
  const navigate =useNavigate()
  return (
    
      <ColorButton variant="contained" onClick={()=> navigate('/login')}>Login</ColorButton>
      
  );
}