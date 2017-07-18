import React from 'react';
import ReactDOM from 'react-dom';

export default class PageHeader extends React.Component{
	constructor(){
		super();
		this.header = "Dashboard"
	}
	render(){
		return(
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">{this.header}</h1>
                </div>
             
            </div>
		);
	}
}