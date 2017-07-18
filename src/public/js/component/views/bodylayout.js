import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from './pageheader.js';
import CPUGraphChart from './cpugraphchart.js';
import DiskGraphChart from './diskgraphchart.js';
import NetworkGraphChart from './networkgraphchart.js';
import RamGraphChart from './ramgraphchart.js';
//import BarChart from './barchart.js';

export default class BodyLayout extends React.Component{
	render(){
		return(
         <div id="page-wrapper">
			        <PageHeader></PageHeader>
					<CPUGraphChart></CPUGraphChart>         
					<DiskGraphChart></DiskGraphChart>   					
					<NetworkGraphChart></NetworkGraphChart>
					<RamGraphChart></RamGraphChart>                
        </div>    
		);
	}
}