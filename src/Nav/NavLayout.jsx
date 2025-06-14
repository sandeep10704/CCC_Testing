import React, { useState } from "react";
import HomeButton from "./NavMain/HomeButton.jsx";
import LoginButton from "./NavMain/LoginButton.jsx";
import SignUpButton from "./NavMain/SignUpButton.jsx";
import ToggleList from "./NavMain/ToggleList.jsx";
import ProfileMenu from "./NavMain/ProfileMenu.jsx";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Componets/Security/AuthContext.js";

export default function NavLayout() {
  const list1 = ["contest01", "contest02", "contest03"];
  const list2 = ["contest04", "contest05", "contest06"];
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        {/* Left - Home Button */}
        <Box>
          <HomeButton />
        </Box>

        {isMobile ? (
          <>
            {/* Menu Icon */}
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile Drawer */}
            <Drawer
              anchor="top"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <List>
                <ListItem>
                  <ToggleList List={list1} ListName="Contests 1" />
                </ListItem>
                <ListItem>
                  <ToggleList List={list2} ListName="Contests 2" />
                </ListItem>
                {user && (
                  <ListItem button onClick={() => navigate("/dashboard")}>
                    <ListItemText primary="Dashboard" />
                  </ListItem>
                )}
                <ListItem>
                  {user ? (
                    <Stack spacing={1} width="100%">
                      <Button
                        variant="contained"
                        color="error"
                        fullWidth
                        onClick={handleLogout}
                      >
                        Logout
                      </Button>
                      <ProfileMenu
                        onCreateProfile={() =>
                          console.log("Create Profile clicked")
                        }
                        onLogout={handleLogout}
                      />
                    </Stack>
                  ) : (
                    <Stack spacing={1} width="100%">
                      <SignUpButton />
                      <LoginButton />
                    </Stack>
                  )}
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <>
            {/* Center - Toggle Lists */}
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <ToggleList List={list1} ListName="Contests 1" />
                <ToggleList List={list2} ListName="Contests 2" />
                {user && (
                  <Button onClick={() => navigate("/dashboard")}>
                    Dashboard
                  </Button>
                )}
              </Stack>
            </Box>

            {/* Right - Auth Buttons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {user ? (
                <>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                  <ProfileMenu
                    onCreateProfile={() =>
                      console.log("Create Profile clicked")
                    }
                    onLogout={handleLogout}
                  />
                </>
              ) : (
                <>
                  <SignUpButton />
                  <LoginButton />
                </>
              )}
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
