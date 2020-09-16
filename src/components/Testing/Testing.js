// Template for components
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components

const useStyles = makeStyles((theme) => ({}));

function Testing(props) {
  const classes = useStyles();

  const handleClick = () => {
    console.log('clicked');
  };

  return <Button onClick={handleClick}>Click me</Button>;
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Testing);
