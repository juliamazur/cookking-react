import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import AddIngredient from './AddIngredient';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    margin: 'auto',
    maxWidth: 900,
    padding: theme.spacing.unit * 2,
    marginTop: 45,
    marginBottom: 45,
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  card: {
    maxWidth: 400,
    margin: 'auto',
    marginTop: 25,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

class RecipeForm extends React.Component {
  state = {
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.container}>
      <Grid container>
        <Grid item xs={12} lg={5}>
          <input
            accept="image/*"
            className={classes.input}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
          <Button variant="outlined" color="primary" raised component="span" className={classes.button}>
            Dodaj obrazek
          </Button>
        </label>
        <Card>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Contemplative Reptile"
                      style={{width: '100%'}}
          />
          </Card>
        </Grid>
        <Grid item xs={12} lg={7}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="recipe-name">Tytuł przepisu</InputLabel>
          <Input id="recipe-name" value={this.state.name} onChange={this.handleChange} />
        </FormControl>
        <AddIngredient/>
        </Grid>
        <Grid item xs={12}>
        <FormControl className={classes.formControl} fullWidth='true' >
          <TextField id="description" multiline={true} rows={7}/>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" color="primary" className={classes.button}>
            Zapisz
          </Button>
        </Grid>
      </Grid>
      </Paper>
    );
  }
}

RecipeForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeForm);
