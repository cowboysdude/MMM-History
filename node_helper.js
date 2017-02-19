/* Magic Mirror
    * Module: MMM-History
    *
    * By Cowboysdude
    * 
    */
const NodeHelper = require('node_helper');
const request = require('request');
const parser = require('xml2js').parseString;
const fs = require('fs');


module.exports = NodeHelper.create({
	  
    start: function() {
    	console.log("Starting module: " + this.name);
    },
    
    getHistory: function(url) {
    	request({ 
    	          url: url,
    	          method: 'GET' 
    	        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                parser(body, (err, result)=> {
                    if(result.hasOwnProperty('rss')){
                        var result = JSON.parse(JSON.stringify(result.rss.channel[0]));
                        this.sendSocketNotification("HISTORY_RESULT", result);
                    }
                });
            }
       });
    },

    //Subclass socketNotificationReceived received.
    socketNotificationReceived: function(notification, payload) {
        if (notification === 'GET_HISTORY') {
                this.getHistory(payload);
            }
         }  
    });