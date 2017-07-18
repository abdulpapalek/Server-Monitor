/* This file maps your route matches
 * to functions defined in various
 * controller classes
 */
app = module.parent.exports.app;

/* require your controllers here */
//var siteController = require('./routes/controllers/index');
//var loginController = require('./routes/controllers/logincontrollers');
var adminController = require('./routes/controllers/admincontrollers');
var data = require('./routes/models/data.json');
var commandcontroller = require('./routes/controllers/commandcontroller');

/* Put routes here */

// main site routes
app.get('/', function(req,res){
	res.sendfile('public/pages_to_be_js/index.html');	
});
app.get('/user', function(req,res){
    console.log("connecting");
	var zerorpc = require("zerorpc");
	var client = new zerorpc.Client({ timeout: 3000, heartbeatInterval: 300000 });
	client.connect("tcp://0.0.0.0:4444");
	client.invoke("jsonfle","RPC" ,function(error, info, more) {
		//console.log("piste");
	    //console.log(JSON.parse(res));
	   	//console.log("atay");
	   	//setter(res);
	    //this.data = JSON.parse(res);
	    if(error) {
            console.error(error);
            console.log(error);
        } 

	    //console.log(JSON.parse(info));
	    res.send(info);
	    client.close();
	    //console.log(this.data);

	});
	//console.log("bobobobobobo");
	//console.log(this.data);
	//return this.data;


});
//app.get('/admin',adminController.admin);
//app.post('/login', loginController.login);

// admin routes
//app.get('/admin', adminController.admin);
