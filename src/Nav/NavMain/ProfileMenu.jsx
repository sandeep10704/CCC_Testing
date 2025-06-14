import React, { useState } from 'react';
import { Popover, Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const styles = {
  icon: {
    fontSize: 36,
    cursor: 'pointer',
  },
  popover: {
    padding: 2,
    minWidth: 160,
  },
  menuItem: {
    cursor: 'pointer',
    padding: '8px 0',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  logoutItem: {
    cursor: 'pointer',
    padding: '8px 0',
    color: 'error.main',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
};

const ProfileMenu = ({ onCreateProfile, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleIconClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget); // Toggle popover
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'profile-popover' : undefined;

  return (
    <>
      <AccountCircleIcon
        onClick={handleIconClick}
        sx={styles.icon}
        aria-describedby={id}
      />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{ sx: styles.popover }}
      >
        <Box>
          <Typography
            onClick={() => {
              onCreateProfile();
              handleClose();
            }}
            sx={styles.menuItem}
          >
            Create Profile
          </Typography>

          <Typography
            onClick={() => {
              alert('Profile Settings Clicked');
              handleClose();
            }}
            sx={styles.menuItem}
          >
            Profile Settings
          </Typography>

          <Typography
            onClick={() => {
              if (onLogout) onLogout();
              handleClose();
            }}
            sx={styles.logoutItem}
          >
            Logout
          </Typography>
        </Box>
      </Popover>
    </>
  );
};

export default ProfileMenu;
