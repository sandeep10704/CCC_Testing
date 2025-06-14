import { Box, Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useState } from 'react';

function OrganizerParticipantButtons() {
    const [selected, setSelected] = useState('organizers');
  return (
       <Box
      sx={{
        position: 'relative',
        width: '450px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Organizers Button Wrapper */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          zIndex: selected === 'organizers' ? 2 : 1,
          padding: selected === 'organizers' ? '4px' : '0px',
          backgroundColor: selected === 'organizers' ? 'white' : 'transparent',
          borderRadius: '29px',
          height: '100%',
          boxSizing: 'content-box',
          transition: 'all 0.3s ease',
        }}
      >
        <Button
          onClick={() => setSelected('organizers')}
          endIcon={<ArrowOutwardIcon />}
          sx={{
            width: '280px',
            height: '100%',
            borderRadius: '25px',
            backgroundColor: selected === 'organizers' ? 'white' : '#1976d2',
            color: selected === 'organizers' ? '#1976d2' : 'white',
            fontWeight: 'bold',
            textTransform: 'none',
            border: '2px solid #1976d2',
            transition: 'all 0.3s ease',
          }}
        >
          For Organizers
        </Button>
      </Box>

      {/* Participants Button Wrapper */}
      <Box
        sx={{
          position: 'absolute',
          left: '240px',
          zIndex: selected === 'participants' ? 2 : 1,
          padding: selected === 'participants' ? '4px' : '0px',
          backgroundColor: selected === 'participants' ? 'white' : 'transparent',
          borderRadius: '29px',
          height: '100%',
          boxSizing: 'content-box',
          transition: 'all 0.3s ease',
        }}
      >
        <Button
          onClick={() => setSelected('participants')}
          endIcon={<ArrowOutwardIcon />}
          sx={{
            width: '280px',
            height: '100%',
            borderRadius: '25px',
            backgroundColor: selected === 'participants' ? 'white' : '#1976d2',
            color: selected === 'participants' ? '#1976d2' : 'white',
            fontWeight: 'bold',
            textTransform: 'none',
            border: '2px solid #1976d2',
            transition: 'all 0.3s ease',
          }}
        >
          For Participants
        </Button>
      </Box>
    </Box>
  );
}

export default OrganizerParticipantButtons;
