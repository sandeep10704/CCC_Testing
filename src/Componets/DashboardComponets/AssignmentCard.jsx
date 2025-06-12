import React from 'react';
import { Box, Typography, Chip, Button, Divider } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

function AssignmentCard() {
  return (
    <Box
      sx={{
        width: 340,
        p: 2,
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        boxShadow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
      }}
    >
      <Typography variant="subtitle1" fontWeight={600}>
        Assignment
      </Typography>

      <Box display="flex" alignItems="center" gap={1}>
        <Box
          sx={{
            backgroundColor: '#e0f2f1',
            p: 1,
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AssignmentIcon color="primary" />
        </Box>
        <Box>
          <Typography fontWeight={600}>
            Advanced problem solving math
          </Typography>
          <Box display="flex" gap={1} mt={0.5}>
            <Chip label="H. math 1" size="small" color="success" />
            <Typography variant="body2" color="text.secondary">
              • Assignment 5
            </Typography>
          </Box>
        </Box>
      </Box>

      <Typography
        variant="body2"
        color="error"
        fontWeight={500}
        sx={{ mt: 1 }}
      >
        ● Submit before : 15th Oct, 2024 ; 12:00PM
      </Typography>

      <Divider sx={{ my: 1.5 }} />

      <Box display="flex" justifyContent="space-between">
        <Button variant="outlined" size="small">
          View
        </Button>
        <Button variant="contained" size="small">
          Upload
        </Button>
      </Box>
    </Box>
  );
}

export default AssignmentCard;
