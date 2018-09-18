import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ingredientsJson from '../fixtures/ingredients.json';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class AddIngredient extends React.Component {

  constructor() {
    super();

    let ingredientsArray = [];
    for (let i in ingredientsJson) {
      ingredientsArray[ingredientsJson[i].id] = ingredientsJson[i].name;
    }

    this.state = {
      open: false,
      ingredient: '',
      ingredientsList: [],
      allIngredients: ingredientsJson,
      ingredientsArray: ingredientsArray,
    };

    console.log(ingredientsJson);
    console.log(ingredientsArray);
  }

  handleChange = name => event => {
    this.setState(prevState => ({
      ingredientsList: [...prevState.ingredientsList, event.target.value]
    }))
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <ul>
          {this.state.ingredientsList.map(ingredient => {
            return (<li key={ingredient}>{this.state.ingredientsArray[ingredient]}</li>)
          })
        }
        </ul>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>Dodaj składnik</Button>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <Select
                  value={this.state.ingredient}
                  onChange={this.handleChange('ingredient')}
                  input={<Input id="ingredient" />}
                >
                  <MenuItem value="">
                    <em>Wybierz</em>
                  </MenuItem>
                    {this.state.allIngredients.map(ingredient => {
                      return(<MenuItem key={ingredient.id} value={ingredient.id}>{ingredient.name}</MenuItem>)
                    })
                  }
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AddIngredient.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddIngredient);
