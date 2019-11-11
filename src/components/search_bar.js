import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
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
			<Grid container style={ {backgroundColor: 'lightgray', position: 'absolute', bottom: '10px', alignItems: 'flex-end', justifyContent: 'space-between', margin:'30px auto', padding: '10px 20px', width: '100%'} }>
				<Grid item xs={12} sm={6} lg={3}>
					<Autocomplete
						options={currencies}
						getOptionLabel={option => option.label}
						className='autoCompeleteLable'
						renderInput={params => (
							<TextField {...params} label="Search destinations here" fullWidth />
						)}
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
