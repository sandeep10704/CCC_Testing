import React from 'react';
import { Box } from '@mui/material';

const SegmentedColorBar = ({ value }) => {
  const max = 30;
  const percent = Math.min(100, (value / max) * 100); // Clamp to 100%

  return (
    <Box
      width="100%"
      height={10}
      borderRadius={5}
      position="relative"
      sx={{
        backgroundColor: '#e0e0e0',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: `${percent}%`,
          background: `linear-gradient(to right, 
            rgb(255, 68, 51) 0%, 
            rgb(244, 187, 68) 38%, 
            rgb(76, 187, 23) 78%, 
            rgb(76, 187, 23) 100%)`,
        }}
      />
    </Box>
  );
};

export default SegmentedColorBar;
