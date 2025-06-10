import { Box, Button, Chip, Stack, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function SelectedFilter({
  ListOfObject,
  onFilterChange,
  onOpenDialog,
  setDialogOpen
}) {
  // Handle chip delete
  const handleDelete = (category, chipValue) => {
    const currentValues = ListOfObject[category]?.split(',') || [];
    const updatedValues = currentValues.filter(val => val !== chipValue);
    const updatedList = {
      ...ListOfObject,
      [category]: updatedValues.join(',')
    };
    onFilterChange(updatedList);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        p: 1.5,
        gap: 2,
        bgcolor: '#fafafa',
      }}
    >
      {/* Chips Display */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          flex: 1,
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 1
        }}
      >
        {Object.entries(ListOfObject).flatMap(([category, values]) =>
          values
            ? values.split(',').map((val) => (
                <Chip
                  key={`${category}-${val}`}
                  label={`${val}`}
                  onDelete={() => handleDelete(category, val)}
                  deleteIcon={<DeleteIcon />}
                  sx={{
                    bgcolor: '#e3f2fd',
                    color: '#1976d2',
                    '& .MuiChip-deleteIcon': {
                      color: '#1976d2'
                    }
                  }}
                />
              ))
            : []
        )}

        {Object.values(ListOfObject).every(v => !v) && (
          <Typography variant="body2" sx={{ color: 'gray', fontStyle: 'italic' }}>
            No filters applied
          </Typography>
        )}
      </Stack>

      {/* Filter Dialog Button */}
      <Button
        onClick={() => setDialogOpen(prev => !prev)}
        variant="outlined"
        sx={{
          textTransform: 'none',
          borderRadius: 2
        }}
      >
        Open Filter
      </Button>

      {/* Optional Search */}
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search..."
        sx={{ minWidth: 180 }}
      />
    </Box>
  );
}
