import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import FadeIn from 'react-fade-in';

// Theme
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  loading: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Loading(props) {
  const { classes } = props;
  return (
    <div className={classes.loading}>
      <FadeIn>
        <MoonLoader type='bars' color='#318FB5' />
      </FadeIn>
    </div>
  );
}

export default withStyles(styles)(Loading);
