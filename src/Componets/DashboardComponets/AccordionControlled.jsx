import { Box, Typography } from '@mui/joy';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function AccordionControlled() {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch('/jsondata/faqData.json')

      .then((res) => res.json())
      .then((data) => setFaqData(data))
      .catch((err) => console.error("Failed to fetch FAQ data:", err));
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        border: '1px solid #ccc',
        borderRadius: 2,
        overflow: 'hidden',
        flexDirection: { xs: 'column', sm: 'row' },
        maxWidth: '1200px',
        mx: 'auto',
        m: 2,
        transition: 'all 0.3s ease',
      }}
    >
      {/* Left Panel - FAQ List */}
      <Box
        sx={{
          width: activeIndex === null ? '100%' : { xs: '100%', sm: '400px' },
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          borderRight: activeIndex !== null ? '1px solid #ccc' : 'none',
          boxSizing: 'border-box',
          transition: 'width 0.3s ease',
        }}
      >
        <Typography level="h4" sx={{ mb: 2 }}>
          FAQs
        </Typography>

        {faqData.map(({ question, answer }, index) => (
          <Paper
            key={index}
            elevation={activeIndex === index ? 4 : 1}
            onClick={() => handleClick(index)}
            sx={{
              width: '100%',
              p: 2,
              mb: 2,
              cursor: 'pointer',
              bgcolor: activeIndex === index ? '#90ee90' : '#fff',
              borderRadius: 2,
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
              '&:hover': {
                bgcolor: '#f0f0f0',
              },
              wordBreak: 'break-word',
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography>{question}</Typography>
            <ArrowForwardIosIcon
              sx={{
                transform: activeIndex === index ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            />
          </Paper>
        ))}
      </Box>

      {/* Right Panel - Answer */}
      {activeIndex !== null && (
        <Box
          sx={{
            width: { xs: '100%', sm: '700px' },
            p: 5,
            bgcolor: '#fff',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            boxSizing: 'border-box',
            transition: 'all 0.3s ease',
          }}
        >
          <Typography sx={{ fontSize: '1.1rem' }}>
            {faqData[activeIndex]?.answer}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default AccordionControlled;
