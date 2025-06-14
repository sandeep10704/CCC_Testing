import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Code = () => {
  const [selected, setSelected] = useState('organizers');

  return (
    <Box sx={{ mt: '50px' }}>
      <Box
        sx={{
          display: { xs: 'flex', md: 'block' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          position: 'relative',
          width: { xs: '100%', md: '500px' },
          height: { xs: 'auto', md: '50px' },
          margin: '0 auto',
        }}
      >
        {/* Organizer Button Wrapper */}
        <Box
          sx={{
            position: { xs: 'static', md: 'absolute' },
            left: { md: 0 },
            zIndex: selected === 'organizers' ? 2 : 1,
            padding: selected === 'organizers' ? '4px' : '0px',
            backgroundColor: selected === 'organizers' ? 'white' : 'transparent',
            borderRadius: '29px',
            height: { xs: '50px', md: selected === 'organizers' ? '95%' : '100%' },
            width: { xs: '80%', md: '280px' },
            boxSizing: 'content-box',
            transition: {md:'all 0.3s ease'},
          }}
        >
          <Button
            onClick={() => setSelected('organizers')}
            endIcon={<ArrowOutwardIcon />}
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '25px',
              backgroundColor: {md:selected === 'organizers' ? 'white' : '#1976d2',xs:selected === 'participants' ? 'white' : '#1976d2'},
              color: {md:selected === 'participants' ? 'white' : '#1976d2',xs:selected === 'organizers' ? 'white' : '#1976d2'},
              fontWeight: 'bold',
              textTransform: 'none',
              border: '2px solid #1976d2',
              transition: 'all 0.3s ease',
            }}
          >
            For Organizers
          </Button>
        </Box>

        {/* Participant Button Wrapper */}
        <Box
          sx={{
            position: { xs: 'static', md: 'relative' },
            left: { md: '230px' },
            zIndex: selected === 'participants' ? 2 : 1,
            padding: selected === 'participants' ? '4px' : '0px',
            backgroundColor: selected === 'participants' ? 'white' : 'transparent',
            borderRadius: '29px',
            height: { xs: '50px',md: selected === 'organizers' ? '100%' : '95%'},
            width: { xs: '80%', md: '280px' },
            boxSizing: 'content-box',
            transition: {md:'all 0.3s ease'},
          }}
        >
          <Button
            onClick={() => setSelected('participants')}
            endIcon={<ArrowOutwardIcon />}
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '25px',
              backgroundColor: {md:selected === 'participants' ? 'white' : '#1976d2',xs:selected === 'organizers' ? 'white' : '#1976d2'},
              color: {md:selected === 'organizers' ? 'white' : '#1976d2',xs:selected === 'participants' ? 'white' : '#1976d2'},
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
    </Box>
  );
};

export default Code;
