import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';

class Deals extends React.Component {
	renderList() {
    	return this.props.products.map((n) => {
      	const url = 'http://dev-deals-api.pantheonsite.io/'+ n.field_image;
      	return (
			<Grid key={n.title} item xs={12} sm={8} lg={4}>
				<div style={{padding:20}} >
					<Paper style={{padding:20}} >
						<Card elevation={0}>
							<CardMedia
								image={url}
								style={{paddingTop:'87%'}}
							/>
						</Card>
						<Typography component='p' variant='h6' style={{textAlign:'center', paddingTop:5}}>
							{n.title}
						</Typography>
						<Typography component='p' style={{textAlign:'center', paddingTop:5}}>
							{n.body}
						</Typography>
					</Paper>
				</div>
			</Grid>
      	);
    })
  }

  render() {
	return (
		<Grid container style={ {maxWidth:'75rem', margin:'30px auto', width: '100%'} }>
			{this.renderList()}
		</Grid>
    );
  }
}

export default Deals;
