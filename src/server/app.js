/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// aditional prototype helpers
require("./utils/proto/array.extend");

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');

var Promise = require('bluebird');

Promise.config({
    warnings: false
});

mongoose.Promise = Promise;

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
	console.error('MongoDB connection error: ' + err);
	process.exit(0);
	}
);

mongoose.set("debug",true);

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var server = require('http').createServer(app);
var socketio = require('socket.io')(server, {
  //serveClient: config.env !== 'production',
  //path: '/socket.io-client'
});

//Chat server
var app= express();
var server = require('http').Server(app);
var io=require('socket.io')(server);


// CORS enable
// var cors = require('cors');
// app.use(cors({ origin: false, credentials: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-ACCESS_TOKEN, Access-Control-Allow-Origin, Authorization, Origin, x-requested-with, Content-Type, Content-Range, Content-Disposition, Content-Description");
    next();
});


require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);


// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});
// Chatroom
  
  // usernames which are currently connected to the chat
  var usernames = {};
  var numUsers = 0;
  
  io.on('connection', function (socket) {
    console.log('a user connected');
    console.log("connected :"+socket.id);
    var addedUser = false;
  
    // when the client emits 'new message', this listens and executes
    socket.on('new message', function (data) {
      // we tell the client to execute 'new message'
      socket.broadcast.emit('new message', {
        username: socket.username,
        message: data,
        timestamp: Date.now()
      });
      console.log('I sent it');
    });
  
    // when the client emits 'add user', this listens and executes
    socket.on('add user', function (username) {
      // we store the username in the socket session for this client
   
      socket.username = username;
        console.log(socket.username);
      // add the client's username to the global list
      usernames[username] = username;
      ++numUsers;
      addedUser = true;
      socket.emit('login', {
        numUsers: numUsers
      });
      
      // echo globally (all clients) that a person has connected
      socket.broadcast.emit('user joined', {
        
        username: socket.username,
        numUsers: numUsers
        
      });
       
    });
  
    // when the client emits 'typing', we broadcast it to others
    socket.on('typing', function () {
      socket.broadcast.emit('typing', {
        username: socket.username
      });
    });
  
    // when the client emits 'stop typing', we broadcast it to others
    socket.on('stop typing', function () {
      socket.broadcast.emit('stop typing', {
        username: socket.username
      });
    });
  
    // when the user disconnects.. perform this
    socket.on('disconnect', function () {
      // remove the username from global usernames list
      if (addedUser) {
        delete usernames[socket.username];
        --numUsers;
  
        // echo globally that this client has left
        socket.broadcast.emit('user left', {
          username: socket.username,
          numUsers: numUsers
        });
      }
    });
    
  });

// Expose app
exports = module.exports = app;
