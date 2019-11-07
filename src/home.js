import React, { Component } from 'react';
import Header from './components/header';
import Deals from './components/deal_list';
import Heading from './components/heading';
import SearchBar from './components/search_bar';
import './App.css';

const API_URL = 'https://dev-deals-api.pantheonsite.io/api/all/deals?_format=json';
class App extends Component {

	constructor(props) {
    super(props);

	this.state = {
    	products: [],
      	searchterm : null
    };
  }

	searchdealsdata(searchterm) {
    	if(!searchterm) {
      		fetch(API_URL)
      		.then(response => response.json())
      		.then(data => this.setState({ products: data }));
    	}
    	else {
      		fetch('https://dev-deals-api.pantheonsite.io/api/deals?_format=json&title='+searchterm)
      		.then(response => response.json())
      		.then(data => this.setState({ products: data }));
    	}
  	}
  	componentDidMount() {
    	fetch(API_URL)
    	.then(response => response.json())
    	.then(data => this.setState({ products: data }));
  	}
  	render() {
    	return (
			<div className='deals-api'>
				<Header />
				<SearchBar onSearchTermName = {searchterm =>this.searchdealsdata(searchterm)} products = {this.state.products}/>
				<Heading />
				<Deals products = {this.state.products} />
			</div>
    	);
  	}
}

export default App;
