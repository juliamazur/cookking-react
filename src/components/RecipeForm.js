import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
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
    file: 'http://simpleicon.com/wp-content/uploads/dish.png',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleImageChange = event => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
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
            id="button-file"
            multiple
            type="file"
            onChange={this.handleImageChange}
          />
          <Card>
            <CardMedia
              className={classes.media}
              image={this.state.file}
              style={{width: '100%'}}
            />
          </Card>
          <label htmlFor="button-file">
            <Button variant="fab" color="primary" component="span" className={classes.button}>
              <AddIcon />
            </Button>
          </label>
        </Grid>
        <Grid item xs={12} lg={6}>
        <h1>Edytuj przepis</h1>
          <FormControl fullWidth={true}>
            <TextField
              id="recipe-name"
              value={this.state.name}
              label="Nazwa przepisu"
              placeholder="Wpisz nazwę przepisu"
              className={classes.formControl}
              margin="normal"
              onChange={this.handleNameChange}
            />
          </FormControl>
          <AddIngredient/>
          <FormControl className={classes.formControl} fullWidth={true}>
            <TextField
              id="recipe-description"
              value={this.state.description}
              label="Opis przepisu"
              multiline
              rows={3}/>
          </FormControl>
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>Zapisz</Button>
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
