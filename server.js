var vertx = require('vertx');
var container = require('vertx/container');

vertx.createHttpServer().requestHandler(function(req) {
    req.response.end('Hello from Vert.x!');
}).listen(parseInt(container.env.get('PORT')));