import React from 'react';
import ReactDOM from 'react-dom';
//import Graphpopulate from './graphpopulate.js';
import RamGraphpopulate from '../helpers/ramgraphpopulate';

export default class RamGraphChart extends React.Component{
    constructor(){
        super();
        this.graph = "RAM";
    }
    render(){
        
        return(
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-bar-chart-o fa-fw"></i> {this.graph}
                            <div class="pull-right">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                        Actions
                                        <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu pull-right" role="menu">
                                        <li><a href="#">Action</a>
                                        </li>
                                        <li><a href="#">Another action</a>
                                        </li>
                                        <li><a href="#">Something else here</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="#">Separated link</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      
                        <div class="panel-body">
                            <RamGraphpopulate/>
                        </div>
                     
                    </div>
        );
    }
}