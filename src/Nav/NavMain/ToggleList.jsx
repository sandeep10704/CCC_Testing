import React, { useState, useRef } from "react";
import {
  List as MuiList,
  ListItemButton,
  ListItemText,
  Box,
  Button,
  Paper,
  ClickAwayListener,
} from "@mui/material";


const styles = {
  container: {
    position: "relative",
    display: "inline-block",
  },
  dropdownButton: {
    fontWeight: "bold",
    borderRadius: 2,
  },
  paper: {
    position: "absolute",
    top: "100%",
    left: 0,
    zIndex: 10,
    mt: 1,
    width: 250,
    maxHeight: 300,
    overflowY: "auto",
    borderRadius: 2,
    backgroundColor: "#f5f5f5",
    boxShadow: 3,
  },
};

function ToggleBoxListItems({ Name }) {
  return (
    <ListItemButton>
      <ListItemText primary={Name} />
    </ListItemButton>
  );
}

export default function ToggleList({ List, ListName }) {
  const [showList, setShowList] = useState(false);
  const buttonRef = useRef(null);

  const handleClickAway = () => {
    setShowList(false);
  };

  return (
    <Box sx={styles.container}>
      <Button
        ref={buttonRef}
        variant="contained"
        sx={styles.dropdownButton}
        onClick={() => setShowList((prev) => !prev)}
      >
        {ListName}
      </Button>

      {showList && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Paper elevation={3} sx={styles.paper}>
            <MuiList dense>
              {List.map((item) => (
                <ToggleBoxListItems key={item} Name={item} />
              ))}
            </MuiList>
          </Paper>
        </ClickAwayListener>
      )}
    </Box>
  );
}
