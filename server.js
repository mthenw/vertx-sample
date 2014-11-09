var vertx = require('vertx');
var container = require('vertx/container');

vertx.createHttpServer().requestHandler(function(req) {
    req.response.end('Hello from Vert.x 2.1.4!');
}).listen(parseInt(container.env.get('PORT')));
