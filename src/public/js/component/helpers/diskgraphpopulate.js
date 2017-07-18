//const React = require('react')
//const ReactDOM = require('react-dom')
//const {Bar} = require("react-chartjs")
//const randomColorFactor = require('../lib/randomColorFactor')

import React from 'react';
import {Line} from 'react-chartjs-2';
import * as actions from '../actions/actions';
import diskgraphdata from  './../stores/diskstore';
//import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
import RedrawOnPrint from 'react-highcharts';
var chart;
export default class DiskGraphpopulate extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	graph:diskgraphdata.getAll(),
	    	val:diskgraphdata.getVal()
	    }

	  }


	componentWillMount(){
			chart = this;
			this.setState({
		    	graph: diskgraphdata.getAll(),
		    	val:diskgraphdata.getVal()
			});
	}

	componentDidMount(){
			var x,y = 0;
			let chart =  this.refs.chart.getChart();
			//Action Dispatch
			//actions.fetchData();	
			diskgraphdata.on("DISK_CHANGE_VALUE",()=>{
				console.log("componentDidMount");
				console.log(diskgraphdata.getVal());
	            x = (new Date()).getTime(), // current time
	            y =  diskgraphdata.getVal();
				setTimeout(function() {
					this.chart.series[0].addPoint([x, y], true, true);

				}, 3000)

			});
    }

	render(){
		return (
				<ReactHighstock config = {this.state.graph} 	ref="chart"/>
		)
	}
}






/*
	constructor(){
		super();
		this.state = {
			linegraph: graphdata.getAll(),
		}
	}
	componentWillMount(){
			graphdata.on("change",()=>{
			this.setState({
				linegraph: graphdata.getAll(),
			});
		
		});
	}

	componentWillUnmount(){
		console.log("component will unmount");
		graphdata.removelistener("change",()=>{
			this.setState({
				linegraph: graphdata.getAll(),
			});
		
		});
	}
/
	componentDidMount(){
		var _this = this;
		
		setInterval(function(){
				var data = {};
				//actions.fetchData();
				data = _this.state;
				//recover here  3.28(data not displayed)
				data.linegraph.datasets[0].data.shift()
				data.linegraph.datasets[0].data.push(8)
				console.log(data.linegraph.datasets[0].data);
				_this.setState(data);
			}, 5000);
		
		}
	render(){
		return(
				<Line
				    xType={'time'}
				    axes
				    grid
				    tickTimeDisplayFormat={'%d %m'}
				    interpolate={'cardinal'}
				    width={750}
				    height={250}
				    data={this.state.linegraph}
				    redraw={true}
				/>
		)
		
	}
*/
function randomScalingFactor() {
  return (Math.random() > 0.5
    ? 1.0
    : -1.0) * Math.round(Math.random() * 100)
}
//window.Graphpopulate = Graphpopulate;

function fetchval(){
	return actions.fetchData();
}
/*function randomColor(opacity) {
  return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',0.7)'
}*/	
/*
			  let _this = this;
			  var x ,y = 0;

			  setInterval(()=>{
                       /* 	var x = (new Date()).getTime(), // current time
                            y = randomScalingFactor();
                        
                        */

                        
/*                       	x =  _this.state.val;
                        console.log(x);
                        //x = (new Date()).getTime(), // current time
                        y = randomScalingFactor();
                        //chart.series[0].addPoint([x, y], true, true);
			}, 3000);
*/