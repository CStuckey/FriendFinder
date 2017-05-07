// ===============================================================================
// LOAD DATA
// Link routes to a series of "data" sources.
// These data sources hold arrays of information on survey.
// ===============================================================================
var express = require("express");
var path = require("path");
var friendsList = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
	// API GET Requests
  	// Below code handles when users "visit" a page.
  	// In each of the below cases when a user visits a link
  	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  	// ---------------------------------------------------------------------------

  	app.get("/api/friends", function(req, res) {
  		res.json(friendsList);
  	});

  	// API POST Requests
	// Below code handles when a user submits the form and thus submits data to the server.
	// When a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate JavaScript array
	// (ex. User fills out question(s) request... this data is then sent to the server...
	// Then the server saves the data to friends object array)
	// ---------------------------------------------------------------------------

	// Search through list of friends to match user to a particular Character
	app.post("/api/new", function(req, res) {
		// Note the code here. Our "server" will respond to requests and let users know who they match with.
    	// It will do this by sending out the value "true" have a match
    
    // *** logic will go here to connect input data with saved data
    	var newClient = req.body;
    	var myScore = newClient.scores;
    	var total = 0;
    	var bestMatch = 100;
    	var index = -1;

    	for (var i = 0; i < buddy.length; i++) {
    		// iterate through the list of friends
    		total = 0;

    		for ( var j = 0; j < myScore.length; j++) {
    			// for each friend calcule total value
    			var dif = Math.abs(myScore[i] - buddy.length[i]);
    			total += dif;
    		}

    		if (total < bestMatch) {
    			bestMatch = total;
    			index = i;
    		}

    	}

    	console.log("Best Choice ", buddy[index]);
    	buddy.push(newClient);
    	res.json(buddy[index]);

	}); // post api newfriend function

} // module exports function