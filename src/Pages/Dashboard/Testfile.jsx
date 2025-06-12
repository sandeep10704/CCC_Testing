import React from 'react';
import { Grid, Paper, Typography, Box, Button, CircularProgress, LinearProgress, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const Dashboard = () => {
  return (
    <Box sx={{ p: 2 }}>
      {/* Top Summary Cards */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="subtitle2">Overall performance</Typography>
            <Box display="flex" justifyContent="center" alignItems="center" height={120}>
              <CircularProgress variant="determinate" value={80} size={100} thickness={5} />
              <Box position="absolute">
                <Typography variant="h6">80%</Typography>
                <Typography variant="caption">PRO LEARNER</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="subtitle2">Total enroll courses: 5</Typography>
            <Typography variant="subtitle2">Course completed: 1</Typography>
            <Typography variant="subtitle2">Hours spent: 112h</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="subtitle2">Live class attended: 70%</Typography>
            <Typography variant="subtitle2">Quiz practiced: 20/30</Typography>
            <Typography variant="subtitle2">Assignment done: 10/15</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Upcoming Classes */}
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Upcoming classes</Typography>
            {[{
              title: 'Newtonian Mechanics - Class 5',
              subject: 'Physics 1',
              teacher: 'Rakesh Ahmed',
              time: '2 min left'
            }, {
              title: 'Polymer - Class 3',
              subject: 'Chemistry 1',
              teacher: 'Khalil Khan',
              time: '4 hr left'
            }].map((cls, i) => (
              <Box key={i} display="flex" justifyContent="space-between" alignItems="center" my={1}>
                <Box>
                  <Typography variant="subtitle1">{cls.title}</Typography>
                  <Chip label={cls.subject} size="small" sx={{ mt: 0.5 }} />
                  <Typography variant="caption">by {cls.teacher}</Typography>
                </Box>
                <Box textAlign="right">
                  <Typography variant="caption" color="error">{cls.time}</Typography>
                  <Button variant="contained" size="small" sx={{ ml: 1 }}>Join</Button>
                </Box>
              </Box>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">5 days without a break</Typography>
            <Box display="flex" alignItems="center" gap={1}>
              {["Sat","Sun","Mon","Tue","Wed","Thu","Fri"].map((day, i) => (
                <Box key={day} textAlign="center">
                  <Typography variant="caption">{day}</Typography>
                  <WhatshotIcon color={i < 5 ? 'error' : 'disabled'} />
                </Box>
              ))}
            </Box>
            <Typography variant="body2" mt={1}>6 classes covered • 4 assignment completed</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Total Courses and Assignments */}
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Total courses (5)</Typography>
            {["Physics 1", "Physics 2", "Chemistry 1", "Chemistry 2", "Higher math 1"].map((course, i) => (
              <Box key={i} my={1}>
                <Typography variant="subtitle2">{course}</Typography>
                <LinearProgress variant="determinate" value={course === 'Higher math 1' ? 100 : 30} />
              </Box>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Assignment</Typography>
            <Typography variant="subtitle2">Advanced problem solving math</Typography>
            <Typography variant="body2">Submit before: 15th Oct, 2024 • 12:00PM</Typography>
            <Button variant="outlined" sx={{ mt: 1, mr: 1 }}>View</Button>
            <Button variant="contained" sx={{ mt: 1 }}>Upload</Button>
          </Paper>

          <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6">Pending quizzes</Typography>
            {[1, 2].map((q) => (
              <Box key={q} display="flex" justifyContent="space-between" alignItems="center" my={1}>
                <Typography variant="subtitle2">Vector division</Typography>
                <Button variant="outlined" size="small">Start</Button>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;