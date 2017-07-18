var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var errorhandler   = require('errorhandler');
var path           = require('path');

var app = module.exports = express();

// Check node_env, if not set default to development
var env = (process.env.NODE_ENV || "development");
//var config = require('./config/config')[env];

// Configuration, defaults to jsx as the view engine
app.set('views', __dirname + '/public/js/component/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jsx');
app.engine('jsx',require('express-react-views').createEngine());
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
//app.set('view engine', 'jade');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ //to support URL-encoded bodies
	extend: true
}));

//THIS SERVES STATIC FILES USING EXPRESS, DON'T  use  in production
//if (process.argv[2] == "dev"){
//	app.use(express.static(path.join("/var/www/server.com/public_html")));
//}

app.use(methodOverride());
//app.use(app.router);
//app.use(express.static(__dirname + '/public_html/views'));
//app.use(express.static("Help_Desk/Template-FAQ/Template-FAQ/"));

/*
 * This section is for environment specific configuration
 */
//app.configure('development', function(){
    app.use('development',errorhandler({ dumpExceptions: true, showStack: true }));
//});

//app.configure('production', function(){
    app.use('production',errorhandler());
//});


app.listen(1338, function(){
  console.log("Express server listening on port %d in %s mode", 1338, app.settings.env);
});


/*
 * Exports the express app for other modules to use
 * all route matches go the routes.js file
 */
module.exports.app = app;
routes = require('./routes');
