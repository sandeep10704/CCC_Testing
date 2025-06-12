import { Typography, Box } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useState } from "react";

function WeekCard() {
  const list = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [Count, setCount] = useState(4);

  return (
    <Box
      sx={{
        width: 340,
        p:2,
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        boxShadow: 1,
        backgroundColor: '#ffffff',
      }}
    >

      {/* Top Stats */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          5 days without break
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The record is 16 days without a break
        </Typography>
      </Box>

      {/* Weekly Icons */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 2 }}>
        {list.map((element, index) => (
          <Box
            key={element}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              px: 1,
              py: 0.5,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", }}>
              <LocalFireDepartmentIcon
                fontSize="small"
                sx={{ color: index < Count ? "red" : "grey" }}
              />
              <Typography variant="body2">{element}</Typography>
            </Box>
          </Box>
        ))}

      </Box>

      {/* Bottom Stats */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <Typography variant="body2" fontWeight={500}>
          6 classes covered
        </Typography>
        <Typography variant="body2" fontWeight={500}>
          4 assignments completed
        </Typography>
      </Box>
    </Box>
  );
}

export default WeekCard;
