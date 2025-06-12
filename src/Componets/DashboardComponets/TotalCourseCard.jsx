import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Chip,
  LinearProgress,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const courseData = [
  { id: 1, icon: 'P', color: '#f97316', name: 'Physics 1', chapters: 5, lectures: 30, progress: 30, score: 80, status: 'In progress' },
  { id: 2, icon: 'P', color: '#f97316', name: 'Physics 2', chapters: 5, lectures: 30, progress: 30, score: 80, status: 'In progress' },
  { id: 3, icon: 'C', color: '#06b6d4', name: 'Chemistry 1', chapters: 5, lectures: 30, progress: 30, score: 70, status: 'In progress' },
  { id: 4, icon: 'C', color: '#06b6d4', name: 'Chemistry 2', chapters: 5, lectures: 30, progress: 30, score: 80, status: 'In progress' },
  { id: 5, icon: 'H', color: '#3b82f6', name: 'Higher math 1', chapters: 5, lectures: 30, progress: 100, score: 90, status: 'Completed' },
];

const columns = [
  {
    field: 'name',
    headerName: 'Course name',
    flex: 2.2,
    renderCell: (params) => {
      const { row } = params;
      return (
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar sx={{ bgcolor: row.color, width: 32, height: 32 }}>{row.icon}</Avatar>
          <Box>
            <Typography fontWeight={600} variant="body2">{row.name}</Typography>
            <Typography variant="caption" color="text.secondary">
              {row.chapters} chapter • {row.lectures} lecture
            </Typography>
          </Box>
        </Box>
      );
    },
  },
  {
    field: 'progress',
    headerName: 'Progress',
    flex: 2.2,
    renderCell: (params) => {
      const progress = params.value;
      return (
        <Box width="100%">
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderRadius: 4,
              mt: 1,
              mb:0.5,
              '& .MuiLinearProgress-bar': {
                backgroundColor: progress === 100 ? '#22c55e' : '#f97316',
              },
              backgroundColor: '#f3f4f6',
            }}
          />
          <Typography variant="caption">{progress}%</Typography>
        </Box>
      );
    },
  },
  {
    field: 'score',
    headerName: 'Overall score',
    flex: 1.3,
    renderCell: (params) => (
      <Typography fontWeight={600}>{params.value}%</Typography>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1.3,
    renderCell: (params) =>
      params.value === 'Completed' ? (
        <Chip label="Completed" color="success" variant="outlined" size="small" />
      ) : (
        <Chip label="In progress" color="warning" variant="outlined" size="small" />
      ),
  },
  {
    field: 'action',
    headerName: '',
    sortable: false,
    flex: 0.4,
    renderCell: () => (
      <ArrowForwardIosIcon fontSize="small" sx={{ color: '#ccc' }} />
    ),
  },
];

function TotalCourseCard() {
  return (
    <Box p={3} sx={{
      margin: 'auto',
      width: 730,
      p: 2,
      border: '1px solid #e0e0e0',
      borderRadius: 2,
      boxShadow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 1.5,
    }}>
      <Typography variant="h6" gutterBottom>
        Total courses ({courseData.length})
      </Typography>
      <Box sx={{ height: 430, width: 720 }}>
        <DataGrid
          rows={courseData}
          columns={columns}
          disableColumnMenu
          disableRowSelectionOnClick
          hideFooter
          sx={{
            border: 'none',
            fontFamily: 'sans-serif',
            '& .MuiDataGrid-columnHeaders': {
              fontWeight: 'bold',
              borderBottom: 'none',
            },
            '& .MuiDataGrid-columnHeader': {
              padding: ' o 12px',
              
            },
            '& .MuiDataGrid-cell': {
              border: 'none',
              padding: ' 0 12px',
            },
            '& .MuiDataGrid-row': {
              borderBottom: '1px solid #eee',
              paddingY: '8px',
            },
          }}
        />

      </Box>
    </Box>
  );
}

export default TotalCourseCard;
