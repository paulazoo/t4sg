import React, { useEffect, useState } from 'react';

// Redux
import { connect } from 'react-redux';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components

const useStyles = makeStyles((theme) => ({}));

function Landing(props) {
  const classes = useStyles();

  return (
    <>
      <p>Landing page</p>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
