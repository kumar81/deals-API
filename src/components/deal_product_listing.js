import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';

class DealProductListinf extends Component {
	constructor(props) {
		super(props);
		this.state ={
			dProductTitle: [],
			dProductBody: [],
			dProductImage: '',
			dProductDestination: [],
			dProductDealType:[],
		}
	}

	componentDidUpdate(prevProps) {
		// Typical usage (don't forget to compare props):
		if (this.props.dTermId !== undefined && this.props.dTermId !== prevProps.dTermId) {
			let URL = 'https://dev-deals-api.pantheonsite.io/deals-product-listing/' + this.props.dTermId + '?_format=json';
			fetch(URL)
			.then(response => response.json())
			.then(data => {
				let title = data.map((dProductTitle) => {
					return(
						<Typography  key={dProductTitle.title} component='p' variant='h6' style={{textAlign:'center', paddingTop:5}}>
							{dProductTitle.title}
						</Typography>
					)
				})
				let body = data.map((dProductBody) => {
					return(
						<Typography key={dProductBody.body} component='h5' style={{textAlign:'center', paddingTop:5}}>
							{dProductBody.body}
						</Typography>
					)
				})
				let destination = data.map((dProductDestination) => {
					return(
						<div key={dProductDestination.field_destinations}>
							{dProductDestination.field_destinations}
						</div>
					)
				})
				let dealType = data.map((dProductDealType) => {
					return(
						<div key={dProductDealType.field_deal_type}>
							{dProductDealType.field_deal_type}
						</div>
					)
				})
				let image = data.map((dProductImage) => {
					return(
						<div key={dProductImage.field_image}>
							{dProductImage.field_image}
						</div>
					)
				})
				this.setState({ dProductTitle:title, dProductImage: image[0].props.children, dProductBody: body, dProductDestination: destination, dProductDealType: dealType })
			});
		}
	  }


	render() {
		return (
			<Grid item xs={12} sm={8} lg={4}>
				<div style={{ padding:20 }} >
					<Paper style={{ padding:20 }} >
						<Card elevation={0}>
							<CardMedia
								image={ 'https://dev-deals-api.pantheonsite.io/' +this.state.dProductImage }
								style={{ paddingTop:'87%' }}
							/>
						</Card>
						{this.state.dProductTitle}
						{this.state.dProductBody}
					</Paper>
				</div>
			</Grid>
		);
	}
}
export default DealProductListinf
