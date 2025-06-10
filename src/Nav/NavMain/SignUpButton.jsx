import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

import { green } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
}));


export default function SignUpButton(){
  const navigate =useNavigate()
    return (
        <>
        <ColorButton variant="outlined" onClick={()=> navigate('/signup')} >Sign UP</ColorButton>
        </>
    )
}