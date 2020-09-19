import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Box,
  Button,
  Typography,
} from '@material-ui/core';
// Redux
import { connect } from 'react-redux';

// Theme
import { useTheme, makeStyles } from '@material-ui/core/styles';

// Custom Components
import EnhancedTableHead from '../Shared/EnhancedTableHead';
import stableSort from '../Shared/stableSort';
import getSorting from '../Shared/getSorting';

const useStyles = makeStyles((theme) => ({
  alignRight: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingLeft: 2,
  },
  dBlock: {
    display: 'block',
  },
  dNone: {
    display: 'none',
  },
}));

const rows = [
  { id: 'id', label: 'ID' },
  {
    id: 'first_name',
    label: 'First Name',
  },
  {
    id: 'last_name',
    label: 'Last Name',
  },
  { id: 'email', label: 'Email' },
  { id: 'bio', label: 'Bio' },
];

const rowsPerPage = 10;

function ShowUsers({ people, ...props }) {
  const classes = useStyles();

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(null);
  const [page, setPage] = useState(0);

  const handleRequestSort = (__, property) => {
    const _orderBy = property;
    let _order = 'desc';
    if (orderBy === property && order === 'desc') {
      _order = 'asc';
    }
    setOrder(_order);
    setOrderBy(_orderBy);
  };

  const handleChangePage = (_, page) => {
    setPage(page);
  };

  return (
    <>
      <Box>
        {people && people.length > 0 ? (
          <Table aria-labelledby='tableTitle'>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={people.length}
              rows={rows}
            />
            <TableBody key='table-body'>
              {stableSort(people, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((person, index) => (
                  <TableRow hover tabIndex={-1} key={people.id}>
                    <TableCell
                      component='th'
                      scope='row'
                      style={{ padding: 0, paddingLeft: 20 }}
                    >
                      {person.id}
                    </TableCell>
                    <TableCell
                      component='th'
                      scope='row'
                      style={{ padding: 0 }}
                    >
                      {person.first_name}
                    </TableCell>
                    <TableCell
                      component='th'
                      scope='row'
                      style={{ padding: 0 }}
                    >
                      {person.last_name}
                    </TableCell>
                    <TableCell
                      component='th'
                      scope='row'
                      style={{ padding: 0 }}
                    >
                      {person.email}
                    </TableCell>
                    <TableCell
                      component='th'
                      scope='row'
                      style={{ padding: 0 }}
                    >
                      {person.bio}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        ) : (
          <Box m={2}>
            <Typography variant='h5'>No users yet.</Typography>
          </Box>
        )}
        <div className={classes.alignRight}>
          <TablePagination
            component='div'
            count={people.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={handleChangePage}
            classes={{
              select: classes.dNone,
              selectIcon: classes.dNone,
              actions: people.length > 0 ? classes.dBlock : classes.dNone,
              caption: people.length > 0 ? classes.dBlock : classes.dNone,
            }}
            labelRowsPerPage=''
          />
        </div>
      </Box>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUsers);
