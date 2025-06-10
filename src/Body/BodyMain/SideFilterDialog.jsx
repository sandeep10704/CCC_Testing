import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Checkbox,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Slide
} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const SideFilterDialog = ({ open, onClose, data, onApply, defaultSelected = {} }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (open) {
      const initial = {};
      for (const category in data) {
        initial[category] = defaultSelected[category] || [];
      }
      setSelectedFilters(initial);
      setActiveCategory(Object.keys(data)[0] || null);
    }
  }, [open, data, defaultSelected]);

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prev) => {
      const current = prev[category] || [];
      const newValues = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [category]: newValues };
    });
  };

  const handleApply = () => {
    const formatted = {};
    for (const category in selectedFilters) {
      const selected = selectedFilters[category];
      if (selected.length > 0) {
        formatted[category] = selected.join(',');
      }
    }
    onApply(formatted);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      PaperProps={{
        sx: {
          width: 600,
          maxWidth: '90vw',
          height: 400,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 'bold',
          bgcolor: '#f5f5f5',
          borderBottom: '1px solid #ddd',
          py: 1.5,
          px: 2
        }}
      >
        Filter Options
      </DialogTitle>

      <DialogContent dividers sx={{ display: 'flex', p: 0, flex: 1 }}>
        {/* Left Panel: Categories */}
        <List
          sx={{
            width: 180,
            borderRight: '1px solid #eee',
            bgcolor: '#fafafa',
            overflowY: 'auto',
          }}
        >
          {Object.keys(data).map((category) => (
            <ListItemButton
              key={category}
              selected={category === activeCategory}
              onClick={() => setActiveCategory(category)}
              sx={{
                '&.Mui-selected': {
                  bgcolor: '#e3f2fd',
                  color: '#1976d2',
                  fontWeight: 'bold'
                },
                '&:hover': {
                  bgcolor: '#f0f0f0'
                },
                px: 2
              }}
            >
              <ListItemText
                primary={category}
                primaryTypographyProps={{ fontSize: '0.95rem' }}
              />
            </ListItemButton>
          ))}
        </List>

        {/* Right Panel: Options */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            overflowY: 'auto',
            bgcolor: '#fff'
          }}
        >
          {activeCategory && (
            <>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  color: '#333',
                  mb: 1
                }}
              >
                {activeCategory}
              </Typography>
              {data[activeCategory].map((value) => (
                <Box
                  key={value}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1,
                    pl: 1,
                    borderRadius: 1,
                    transition: '0.2s',
                    '&:hover': {
                      bgcolor: '#f9f9f9'
                    }
                  }}
                >
                  <Checkbox
                    checked={selectedFilters[activeCategory]?.includes(value) || false}
                    onChange={() => handleCheckboxChange(activeCategory, value)}
                    size="small"
                    sx={{
                      color: '#1976d2',
                      '&.Mui-checked': {
                        color: '#1976d2'
                      }
                    }}
                  />
                  <Typography variant="body2" component="span" sx={{ color: '#444' }}>
                    {value}
                  </Typography>
                </Box>
              ))}
            </>
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 2, py: 1.5 }}>
        <Button
          onClick={handleApply}
          variant="contained"
          sx={{
            textTransform: 'none',
            bgcolor: '#1976d2',
            '&:hover': {
              bgcolor: '#1565c0'
            }
          }}
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SideFilterDialog;
