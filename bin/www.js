#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('demo:server');
var http = require('http');


/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8080');
// app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app.callback());

// function getLocalIP() {
//   const os = require('os');
//   const osType = os.type(); //系统类型
//   const netInfo = os.networkInterfaces(); //网络信息
//   let ip = '';
//   if (osType === 'Windows_NT') { 
//       for (let dev in netInfo) {

//           for (let j = 0; j < netInfo[dev].length; j++) {
//               if (netInfo[dev][j].family === 'IPv4') {
//                   ip = netInfo[dev][j].address;
//                   return ip;
//               }
//           }
//       }

//   } else if (osType === 'Linux') {
//       ip = netInfo.eth0[0].address;
//   }
//   console.log(ip)
//   return ip;
// }
/**
 * Listen on provided port, on all network interfaces.
 */
// let loacl = getLocalIP()
server.listen(port, '127.0.0.1');
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    // console.log('Listening on ' + `${loacl}:${addr.port}`)
  debug('Listening on ' + bind);
}
