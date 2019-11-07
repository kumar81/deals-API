import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from "@material-ui/core/styles";
const styles = muiBaseTheme => ({
	footer_menu_link: {
	  backgroundColor: "#ebebeb",
	},
  });

function Footer({ classes }) {
	return (
		<Grid container alignItems='baseline' style={{marginTop:'30px', width: '100%', padding: '15px 0px 0px 60px', backgroundColor:'#ebebeb'}}>
		<Grid item xs={12} sm={8} lg={4}>
			<Paper elevation={0} className={classes.footer_menu_link}>
			<Typography component='h3' variant='h5'>
				Deals API
			</Typography>
			<Typography component='p'>
				Build an API that you can query sending multiple parameters (e.g. destination, budget, type of activity) so we present relevant deals based on customers behaviour.
			</Typography>
			</Paper>
		</Grid>
		<Grid item xs={12} sm={8} lg={4}>
			<Paper elevation={0} className={classes.footer_menu_link}>
			<MenuList>
				<MenuItem>
				<Link href='' className=''>One</Link>
				</MenuItem>
				<MenuItem>
				<Link href='' className=''>Two</Link>
				</MenuItem>
				<MenuItem>
				<Link href='' className=''>Three</Link>
				</MenuItem>
			</MenuList>
			</Paper>
		</Grid>
		<Grid item xs={12} sm={8} lg={4}>
			<Paper className={classes.footer_menu_link} elevation={0}>
			<MenuList>
				<MenuItem>
				<Link href='' className=''>One</Link>
				</MenuItem>
				<MenuItem>
				<Link href='' className=''>Two</Link>
				</MenuItem>
				<MenuItem>
				<Link href='' className=''>Three</Link>
				</MenuItem>
			</MenuList>
			</Paper>
		</Grid>
		</Grid>
	);
}

export default withStyles(styles)(Footer);
