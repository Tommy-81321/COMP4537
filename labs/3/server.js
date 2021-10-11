var http = require('http');
var url = require('url');
const dateTime = require('./modules/utils');
var PORT = process.env.PORT || 8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let q = url.parse(req.url, true).query;
  let name = q.name;
  const string = "Hello " +  name + ", What a beautiful day. Server current date and time is " + dateTime.myDateTime();
  res.end("<p style='color:blue'>" + string + "</p>");
}).listen(PORT);