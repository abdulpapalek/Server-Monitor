import dispatcher from "../dispatcher";
import ActionTypes from "./actiontype";
import axios from 'axios';

export function fetchData(){
	console.log(ActionTypes.FETCH_DATA);
	setInterval(()=>{
		axios.get("http://nspservers.xyz/user").then((data) => {
			//console.log("got the data !",JSON.parse(data));
			dispatcher.dispatch({
				type: ActionTypes.FETCH_DATA,
				info: data,
			});

		}).catch(error => {
		  console.log(error);
		  console.log('ERROR', error);
		})

	},4000);
}

/*export function deleteData(text){
	dispatcher.dispatch({
		type:"CREATA_DATA",
		text,
	});

}

export function fetchData(text){
	dispatcher.dispatch({
		type:"CREATA_DATA",
		text,
	});

}
*/