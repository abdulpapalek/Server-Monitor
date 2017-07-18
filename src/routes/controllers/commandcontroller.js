var zerorpc = require("zerorpc");

var client = new zerorpc.Client();

module.exports.command = function(){

	this.data;
	client.connect("tcp://127.0.0.1:4242");
	client.invoke("jsonfle","RPC" ,function(error, res, more) {
	    this.data = JSON.parse(res);


	    console.log(this.data);

	});
	console.log(this.data);
	return this.data;

}