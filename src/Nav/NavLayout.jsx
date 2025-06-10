import React from "react";
import HomeButton from "./NavMain/HomeButton.jsx";
import LoginButton from "./NavMain/LoginButton.jsx";
import SignUpButton from "./NavMain/SignUpButton.jsx";
import ToggleList from "./NavMain/ToggleList.jsx";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Componets/Security/AuthContext.js";
import ProfileMenu from "./NavMain/ProfileMenu.jsx";

// 🔶 Style Variables
const styles = {
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 16px',
    gap: '40px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  centerContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  toggleLists: {
    display: 'flex',
    gap: '16px',
  },
  rightControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
};

export default function NavLayout() {
  const list1 = ["contest01", "contest02", "contest03"];
  const list2 = ["contest04", "contest05", "contest06"];
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={styles.navContainer}>
      {/* Left - Home Button */}
      <div>
        <HomeButton />
      </div>

      {/* Center - Toggle Lists */}
      <div style={styles.centerContainer}>
        <div style={styles.toggleLists}>
          <ToggleList List={list1} ListName="Contests 1" />
          <ToggleList List={list2} ListName="Contests 2" />
        </div>
      </div>

      {/* Right - Auth Buttons */}
      <div style={styles.rightControls}>
        {user ? (
          <>
            <Button variant="contained" color="error" onClick={handleLogout}>
              Logout
            </Button>
            <ProfileMenu
              onCreateProfile={() => console.log('Create Profile clicked')}
              onLogout={handleLogout}
            />
          </>
        ) : (
          <>
            <SignUpButton />
            <LoginButton />
          </>
        )}
      </div>
    </div>
  );
}
