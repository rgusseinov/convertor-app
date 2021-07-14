import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import classes from './loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={ classes.mt20 }>
      <Grid container justify="center" alignItems="center">
        <CircularProgress />
      </Grid>
    </div>
  );
};

export default Loader;
