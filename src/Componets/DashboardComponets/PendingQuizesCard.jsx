import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Stack,
} from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const quizData = [
  {
    title: 'Vector division',
    questions: 10,
    duration: 15,
    imgAlt: 'Vector division quiz icon with purple background',
  },
  {
    title: 'Vector division',
    questions: 10,
    duration: 15,
    imgAlt: 'Vector division quiz icon with purple background',
  },
];

function PendingQuizesCard() {
  return (
    <Card
      sx={{
        width: 358,
        borderRadius: 2,
        border: '1px solid #e0e0e0',
        boxShadow: 1,
        backgroundColor: '#fff',
        p: 1,
      }}
      aria-label="Pending quizzes card"
    >
      <CardContent sx={{ pb: 1 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography fontSize={16} fontWeight="600">
            Pending quizzes
          </Typography>
          <Button
            size="small"
            variant="outlined"
            sx={{ textTransform: 'none', fontSize: 12, py: 0.3, px: 1 }}
          >
            See all
          </Button>
        </Box>

        <Stack spacing={1.5}>
          {quizData.map((quiz, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                p: 2,
              }}
            >
              <Box display="flex" alignItems="center" gap={1.5}>
                <Avatar
                  sx={{
                    bgcolor: '#E0E0FF',
                    width: 40,
                    height: 40,
                  }}
                  variant="rounded"
                  alt={quiz.imgAlt}
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8dea5bf5-c59e-4352-839f-4eb4e237097a.png"
                >
                  <QuizIcon sx={{ color: '#6B46C1', fontSize: 18 }} />
                </Avatar>

                <Box>
                  <Typography fontSize={14} fontWeight="600" lineHeight={1.2}>
                    {quiz.title}
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={0.8}
                    sx={{ color: '#757575', fontSize: 12 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: 6, mt: '2px' }} />
                    <Typography component="span" fontSize={12}>
                      {quiz.questions} questions
                    </Typography>
                    <FiberManualRecordIcon sx={{ fontSize: 6, mt: '2px' }} />
                    <AccessTimeIcon sx={{ fontSize: 12 }} />
                    <Typography component="span" fontSize={12}>
                      {quiz.duration} min
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  px: 1.2,
                  py: 0.3,
                  fontSize: 12,
                  fontWeight: 500,
                  minWidth: 'auto',
                }}
                aria-label={`Start quiz: ${quiz.title}`}
                endIcon={
                  <Box
                    component="span"
                    sx={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      ml: 0.5,
                    }}
                  >
                    &gt;
                  </Box>
                }
              >
                Start
              </Button>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default PendingQuizesCard;
