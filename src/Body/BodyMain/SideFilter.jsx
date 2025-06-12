import {
  FormControl,
  FormLabel,
  Box,
  Stack,
  Collapse,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from "react";

// Convert CSV string like "A,B" into { A: true, B: true }
const csvToBoolObject = (csvString, allOptions) => {
  const selected = csvString ? csvString.split(',') : [];
  const obj = {};
  allOptions.forEach(opt => {
    obj[opt] = selected.includes(opt);
  });
  return obj;
};

// Convert bool object to CSV string
const boolObjectToCsv = (boolObj) => {
  return Object.entries(boolObj)
    .filter(([_, checked]) => checked)
    .map(([key]) => key)
    .join(',');
};

// One section with only selected filters & option to deselect
function SelectedOnlySection({ object, listName, index, onUpdate }) {
  const [open, setOpen] = useState(true);

  const handleToggle = () => setOpen(prev => !prev);

  const selectedValues = Object.entries(object)
    .filter(([_, checked]) => checked)
    .map(([key]) => key);

  const handleDeselect = (name) => {
    const updated = {
      ...object,
      [name]: false
    };
    onUpdate(index, updated);
  };

  return (
    <FormControl
      component="fieldset"
      variant="standard"
      sx={{
        width: '100%',
        bgcolor: '#fafafa',
        p: 2,
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        transition: '0.3s',
        '&:hover': {
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1
        }}
      >
        <FormLabel
          component="legend"
          sx={{
            fontWeight: 'bold',
            color: '#1976d2',
            textTransform: 'uppercase'
          }}
        >
          {listName}
        </FormLabel>
        <IconButton size="small" onClick={handleToggle} sx={{ color: '#1976d2' }}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      <Collapse in={open}>
        {selectedValues.length > 0 ? (
          <List dense>
            {selectedValues.map((val, idx) => (
              <ListItem
                key={idx}
                sx={{
                  px: 1,
                  borderRadius: 1,
                  '&:hover': {
                    bgcolor: '#f0f4f8'
                  }
                }}
              >
                <ListItemText
                  primary={`• ${val}`}
                  primaryTypographyProps={{
                    fontSize: '0.9rem',
                    color: '#333'
                  }}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    size="small"
                    onClick={() => handleDeselect(val)}
                    sx={{
                      color: '#d32f2f',
                      '&:hover': {
                        bgcolor: 'rgba(211, 47, 47, 0.08)'
                      }
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body2" sx={{ pl: 2, color: 'gray' }}>
            No selections
          </Typography>
        )}
      </Collapse>
    </FormControl>
  );
}

// Parent filter container
export default function SideFilter({
  ListOfObject,
  ListOfObjectName,
  onFilterChange,
  allOptionsPerCategory
}) {
  const [internalFilters, setInternalFilters] = useState([]);

  useEffect(() => {
    if (
      ListOfObject &&
      allOptionsPerCategory &&
      ListOfObject.length === allOptionsPerCategory.length
    ) {
      const boolObjs = ListOfObject.map((csvString, idx) =>
        csvToBoolObject(csvString, allOptionsPerCategory[idx])
      );
      setInternalFilters(boolObjs);
    }
  }, [ListOfObject, allOptionsPerCategory]);

  const handleUpdate = (index, updatedObject) => {
    const newInternal = [...internalFilters];
    newInternal[index] = updatedObject;
    setInternalFilters(newInternal);

    const newCsvFilters = newInternal.map(boolObjectToCsv);
    onFilterChange(newCsvFilters);
  };

  return (
    <Box sx={{ width: '100%', p: 2, bgcolor: '#fff', borderRadius: 2 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: 'bold',
          color: '#1a237e',
          textShadow: '0 1px 1px rgba(0,0,0,0.05)'
        }}
      >
        Filters
      </Typography>
      <Stack direction="column" spacing={2}>
        {internalFilters.map((obj, index) => (
          <SelectedOnlySection
            key={index}
            object={obj}
            listName={ListOfObjectName[index]}
            index={index}
            onUpdate={handleUpdate}
          />
        ))}
      </Stack>
    </Box>
  );
}
