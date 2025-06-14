import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function CardList({ cardData }) {
  const [showAll, setShowAll] = useState(false);
  const displayedCards = showAll ? cardData : cardData.slice(0, 2);

  return (
    <Box width={760} sx={{
      borderRadius: 3,
      boxShadow: 1,
      p: 1,
    }}>
      <Typography>Cards</Typography>
      {displayedCards.map((card) => {
        const remaining = dayjs().to(dayjs(card.datetime));
        const isSoon = dayjs(card.datetime).diff(dayjs(), "minute") <= 5;

        return (
          <Card
            key={card.id}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: 3,
              boxShadow: 1,
              px: 2,
              py: 2,
              mb: 2,
              mx: "auto",
            }}
          >
            {/* Image */}
            <CardMedia
              component="img"
              image={card.image}
              alt={card.title}
              sx={{
                width: 80,
                height: 80,
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.2)',
                },
              }}
            />

            {/* Content */}
            <CardContent sx={{ flex: 1, ml: 2, p: 1 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {card.title}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                {card.subjects.map((subject, idx) => (
                  <Chip key={idx} label={subject} size="small" />
                ))}
              </Stack>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: 0.5 }}
              >
                by {card.description}
              </Typography>
            </CardContent>

            {/* Date, Remaining, Join */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ whiteSpace: "nowrap" }}
            >
              <Typography
                variant="body2"
                sx={{
                  backgroundColor: "#f5e1d9",
                  px: 1.2,
                  py: 0.3,
                  borderRadius: 1,
                }}
              >
                {dayjs(card.datetime).format("Do MMM, YYYY • hh:mmA")}
              </Typography>
              <Typography
                variant="body2"
                color={isSoon ? "error.main" : "info.main"}
              >
                {remaining.replace("in ", "").replace("ago", "left")}
              </Typography>
              <Button
                variant="contained"
                color="success"
                size="small"
                sx={{ textTransform: "none" }}
              >
                Join
              </Button>
            </Stack>
          </Card>
        );
      })}
    </Box>
  );
}

export default CardList;