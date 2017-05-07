// ==============================================================================
// DEPENDENCIES
// Series of npm packages used to give server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");

// var path = require("path");
// var bootstrap-select = require("bootstrap-select");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties express server
// ==============================================================================

// Tells node that an "express" server is created
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 3000;

// BodyParser makes it possible for server to interpret data sent to it.
// The code below is standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// ================================================================================
// ROUTER
// The below points server to a series of "route" files.
// These routes give server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" the server
// ==============================================================================

app.listen(PORT, function() {
	console.log("App Listening on PORT: " + PORT);
})
