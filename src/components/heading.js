import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
class Heading extends React.Component{

  render() {
    return (
    	<Grid container style={ {alignItems: 'flex-end', maxWidth:'75rem', margin:'30px auto', padding: '10px 20px', width: '100%'} }>
        	<Grid item xs={12} sm={12} lg={12}>
				<Paper elevation={0}>
					<Typography component='p'>
						Hand picked by Flight Centre's Travel Experts, you'll find everything from our latest promotions to airfare deals, current competitions, special event packages and travel expos.
					</Typography>
				</Paper>
			</Grid>
      	</Grid>
    );
  }
}

export default Heading;
