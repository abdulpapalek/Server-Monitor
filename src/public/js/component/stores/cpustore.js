//const React = require('react')
//const ReactDOM = require('react-dom')
//const {Bar} = require("react-chartjs")
//const randomColorFactor = require('../lib/randomColorFactor')

import {EventEmitter} from "events";	
import dispatcher from "../dispatcher";
class CPUGraphdata extends EventEmitter{
	constructor(){
		super();
		this.config = {
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

        this.val = 0;
		
	}

	getAll(){
		return this.config;

	}
    getVal(){
        return this.val;
    }
	getData(cpu){
		 this.val = cpu;
         console.log("getData");	
		 this.emit("CPU_CHANGE_VALUE");
	}

	handleActions(action){
        var data  = action.info
		switch(action.type){
			case "FETCH_DATA":{
				/*
				console.log("went here");
				axios.get('/user')
				  .then(function (response) {
				  	var data = response.data.data.users;
				  	console.log(data);
				    console.log(data[0]);
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
				 */
                 var cpu = parseFloat(data.data.CPU);
                 console.log("the cpu: ",cpu);
                 this.getData(cpu);
				 //this.emit("change");
                 
				//this.createData(action.text);
			}
		}
	}

}

function randomScalingFactor() {
  return (Math.random() > 0.5
    ? 1.0
    : -1.0) * Math.round(Math.random() * 100)
}

const cpugraphdata = new CPUGraphdata();
dispatcher.register(cpugraphdata.handleActions.bind(cpugraphdata));
//window.dispatcher = dispatcher;
//window.graphdata = graphdata;
export default cpugraphdata;

