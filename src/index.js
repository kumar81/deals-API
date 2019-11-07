import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import DealDetailPage from './components/deal_detail_page';
import Footer from './components/footer';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const routing = (
    <Router>
        <Switch>
            <Route exact path='/deals/:specificDeals' component={DealDetailPage} />
            <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
