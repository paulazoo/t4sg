// Template for components
import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components

const useStyles = makeStyles((theme) => ({}));

function Homepage(props) {
  const classes = useStyles();

  const handleClick = () => {
    console.log('clicked');
  };

  return <Typography>Super secret homepage</Typography>;
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
