import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
const styles = {
  searchInput: {
    height: 33
  }
};

class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = { searchterm: '' };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="row small-up-1 medium-up-1 large-up-4">
        <TextField
          onChange={event => this.onInputChange(event.target.value)}
          type='search'
          className="column search-deals"
          placeholder='Search destinations here'
          InputProps={{ classes: { input: classes.searchInput } }}
        />

        <Select
          value={10}
          className="column search-deals"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        <Select
          value={30}
          className="column search-deals"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Button
          variant="contained"
          color="primary"
          className="search-deals" >
          Search Deals
        </Button>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermName(term);
  }

}
export default withStyles(styles)(SearchBar);
