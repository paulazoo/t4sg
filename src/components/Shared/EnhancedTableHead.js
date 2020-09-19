import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  withStyles,
  IconButton,
  Box,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

// Redux

// Theme

// Custom Components

const styles = (theme) => ({
  tableSortLabel: {
    cursor: 'text',
    userSelect: 'auto',
    color: 'inherit !important',
  },
  noIcon: {
    '& path': {
      display: 'none !important',
    },
  },
});

function EnhancedTableHead({
  order,
  orderBy,
  rows,
  onRequestSort,
  handleAddPersonDialogOpen,
  classes,
}) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const renderRowCell = (row, index) => {
    let tableCellPadding = 0;
    if (index === 0) {
      tableCellPadding = 20;
    }
    if (row.id === 'actions') {
      return (
        <TableCell
          key={`table-cell-'${index}`}
          align='inherit'
          style={{ padding: tableCellPadding }}
        >
          <Box display='flex' justifyContent='flex-end'>
            <IconButton
              onClick={() => {
                handleAddPersonDialogOpen();
              }}
              aria-label='Add'
            >
              <AddIcon />
            </IconButton>
          </Box>
        </TableCell>
      );
    }
    if (row.id === 'edit') {
      return (
        <TableCell
          key={`table-cell-'${index}`}
          align='inherit'
          style={{ padding: tableCellPadding }}
        >
          <Typography variant='body2'>{row.label}</Typography>
        </TableCell>
      );
    }
    return (
      <TableCell
        key={`table-cell-'${index}`}
        align='inherit'
        style={{ padding: tableCellPadding }}
        sortDirection={orderBy === row.name ? order : false}
      >
        <Tooltip
          title='Sort'
          placement={row.numeric ? 'bottom-end' : 'bottom-start'}
          enterDelay={300}
        >
          <TableSortLabel
            active={orderBy === row.id}
            direction={order}
            onClick={createSortHandler(row.id)}
          >
            <Typography variant='body2'>{row.label}</Typography>
          </TableSortLabel>
        </Tooltip>
      </TableCell>
    );
  };

  return (
    <TableHead>
      <TableRow>
        {rows.map((row, index) => (
          <React.Fragment key={`fragment-${index}`}>
            {renderRowCell(row, index)}
          </React.Fragment>
        ))}
      </TableRow>
    </TableHead>
  );
}
EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles, { withTheme: true })(EnhancedTableHead);
