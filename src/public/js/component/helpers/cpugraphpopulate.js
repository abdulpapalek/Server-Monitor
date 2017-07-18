//const React = require('react')
//const ReactDOM = require('react-dom')
//const {Bar} = require("react-chartjs")
//const randomColorFactor = require('../lib/randomColorFactor')

import React from 'react';
import {Line} from 'react-chartjs-2';
import * as actions from '../actions/actions';
import cpugraphdata from  './../stores/cpustore';
//import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';
import RedrawOnPrint from 'react-highcharts';
const config = {
            chart: {
                /*events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.round(Math.random() * 100);
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
                */
                    type: 'spline',
                    marginRight: 10,
            },

            rangeSelector: {
                buttons: [{
                    count: 1,
                    type: 'minute',
                    text: '1M'
                }, {
                    count: 5,
                    type: 'minute',
                    text: '5M'
                }, {
                    type: 'all',
                    text: 'All'
                }],
                inputEnabled: false,
                selected: 0
            },

            title: {
                text: 'Live random data'
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: 'CPU usage',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -999; i <= 0; i += 1) {
                        data.push([
                            time + i * 1000,
                            Math.round(Math.random() * 100)
                        ]);
                    }
                    return data;
                }())
            }]

}
var chart;
export default class CPUGraphpopulate extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    	graph:cpugraphdata.getAll(),
	    	val:cpugraphdata.getVal()
	    }

	  }


	componentWillMount(){
			//console.log("only called once");
			this.setState({
		    	graph: cpugraphdata.getAll(),
		    	val:cpugraphdata.getVal()
			});
	}

	componentDidMount(){
			var x,y = 0;
			chart =  this.refs.chart.getChart();
			//Action Dispatch
			actions.fetchData();	
			cpugraphdata.on("CPU_CHANGE_VALUE",()=>{
				//console.log(cpugraphdata.getVal());
	            x = (new Date()).getTime(), // current time
	            y =  cpugraphdata.getVal();
	            console.log(x);
	            console.log(y);
					chart.series[0].addPoint([x, y], true, true);


			});
    }

	render(){
		return (
				<ReactHighstock config = {config} ref="chart"/>
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