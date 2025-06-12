import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const SemiCircleGauge = ({ value }) => {
  const clampedValue = Math.min(Math.max(value, 0), 100);
  const [animatedOffset, setAnimatedOffset] = useState(283);

  useEffect(() => {
    const offset = 283 - (283 * clampedValue) / 100;
    requestAnimationFrame(() => {
      setAnimatedOffset(offset);
    });
  }, [clampedValue]);

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
        backgroundColor: '#ffffff',
        gap: 1.5,
        height:260
      }}
    >

      {/* Title and subtitle */}
      <Box sx={{ width: "100%", textAlign: "left", mb: 2, p: 1 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "#2c3e50", mb: 0.5 }}
        >
          Overall Performance
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#7f8c8d", fontStyle: "italic" }}
        >
          Course Completion
        </Typography>
      </Box>

      {/* Semi-circle gauge */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 240,
          height: 120,
          mx: "auto",
          p: 1,
        }}
      >
        <svg width="240" height="120" viewBox="0 0 240 120">
          <path
            d="M 20 120 A 100 100 0 0 1 220 120"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="20"
          />
          <path
            d="M 20 120 A 100 100 0 0 1 220 120"
            fill="none"
            stroke="#2ecc71"
            strokeWidth="20"
            strokeDasharray="314"
            strokeDashoffset={animatedOffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1s ease-out" }}
          />
        </svg>

        {/* Centered text inside gauge */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -10%)",
            textAlign: "center",
            p: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "#2ecc71" }}
          >
            {clampedValue}%
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#7f8c8d", fontWeight: 500 }}
          >
            Pro Learner
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SemiCircleGauge;
