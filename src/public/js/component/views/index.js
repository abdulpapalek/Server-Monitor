import React from 'react';
import ReactDOM from 'react-dom';
//var DefaultLayout = require('./layout/master').default;
import NavLayout from './layout/navlayout.js';
import BodyLayout from './bodylayout.js';
import Process from './process.js';
import {Router,Route,IndexRoute,hashHistory} from "react-router";

export default class Index extends React.Component{
	constructor(){
		super();
		this.state = {
			title : "Welcome"
		}
	}
	render(){
		return(
			<div>
				<NavLayout></NavLayout>
				{this.props.children}
			</div>
		)	
	} 
	
}

const wrapper = document.getElementById('wrapper');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRoute component={BodyLayout}>
			</IndexRoute>
			<Route path="process" component={Process}>
			</Route>
		</Route>
	</Router>,
	wrapper);
//ReactDOM.render(<Index/>,wrapper);
/*ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRoute component={BodyLayout}>
			</IndexRoute>

		
		</Route>
	</Router>,
	wrapper);
*/


/*var React  = require('react');
var DefaultLayout = require('./layout/master');
var IndexComponent = React.createClass({
	render:function(){
		return(
		    <DefaultLayout name={this.props.name}>
				<div>
					<h1>This was built using react!</h1>
				</div>
			</DefaultLayout>	
		)
	}
});

module.exports = IndexComponent;

*/