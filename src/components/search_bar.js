import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
	dealsRoot: {
		width: '100%',
	},
  	searchInput: {
		padding: 20,
  	}
};
const currencies = [
	{
		label: 'USD',
	  	value: 'usd',
	},
	{
		label: 'EUR',
		value: 'eur',
	},
	{
		label: 'BTC',
		value: 'btc',
	},
	{
		label: 'JPY',
		value: 'jpy',
	},
];
class SearchBar extends React.Component {
	constructor (props) {
    	super(props);
		this.state = {
			searchterm: '',
			value: '',
			activity: '',
		};
	}

	// Returning Activity List.
  	acticitiesList() {
		return this.props.products.map((al) => {
			return al.term_node_tid;
	  	})
	}

  	render() {
		const { classes } = this.props;
		const activityList = this.acticitiesList();

		return (
			<Grid container style={ {alignItems: 'flex-end', justifyContent: 'space-between', maxWidth:'75rem', margin:'30px auto', padding: '10px 20px', width: '100%'} }>
				<Grid item xs={12} sm={6} lg={3}>
					<TextField
						onChange={event => this.onInputChange(event.target.value)}
						type='search'
						className={classes.dealsRoot}
						placeholder='Search destinations here'
						InputProps={{ classes: { input: classes.searchInput } }}
					/>
				</Grid>
				<Grid item xs={12} sm={6} lg={3}>
					<TextField
						select
						className={classes.dealsRoot}
						label='Activity'
						onChange={this.onHandleChange}
						value={this.state.activity}
					>
						{activityList.map(al => (
							<MenuItem key={ "" + al} value={ "" + al }>
								{al}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xs={12} sm={6} lg={3}>
					<TextField
						select
						className={classes.dealsRoot}
						label='Budget'
						onChange={this.onHandleChange1}
						value={this.state.value}
					>
						{currencies.map(option => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xs={12} sm={6} lg={2}>
					<Button
						className={classes.dealsRoot}
						variant="contained"
						color="primary"
					>
						Search Deals
					</Button>
				</Grid>
			</Grid>
		);
  	}

	onInputChange(term) {
    	this.setState({term});
    	this.props.onSearchTermName(term);
  	}
  	onHandleChange = (event) => {
		this.setState({
			activity: event.target.value
		});
	  }
	onHandleChange1 = (event) => {
		this.setState({
			value: event.target.value
		});
  	}
}
export default withStyles(styles)(SearchBar);
