
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';



const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: 'none',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: 'transparent',
  color: '#000',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  position: 'relative',
  '&:after': {
    position: 'absolute',
    content: '""',
    width: 0,
    height: '100%',
    top: 0,
    left: 0,
    direction: 'rtl',
    zIndex: -1,
    boxShadow: '7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001',
    transition: 'all 0.3s ease',
  },
  '&:hover': {
    color: '#000',
    backgroundColor: '#0069d9',
    borderColor: 'transparent',
    boxShadow: 'none',
    '&:after': {
      left: 'auto',
      right: 0,
      width: '100%',
    },
  },
  '&:active': {
    top: 2,
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: 'transparent',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});





export default function HomeButton() {
  return (
   
      <BootstrapButton variant="contained" disableRipple>
        Skill Censui.Ai
      </BootstrapButton>
    
  );
}
