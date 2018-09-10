import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RecipeCardBig from './RecipeCardBig';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 25,
    paddingBottom: 45,
    backgroundColor: '#eee', // @TODO szpachla
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function RecipeList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} lg={4}>
          <RecipeCardBig/>
        </Grid>
        <Grid item xs={12} lg={4}>
          <RecipeCardBig/>
        </Grid>
        <Grid item xs={12} lg={4}>
          <RecipeCardBig/>
        </Grid>
        <Grid item xs={12} lg={4}>
          <RecipeCardBig/>
        </Grid>
      </Grid>
    </div>
  );
}

RecipeList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeList);
