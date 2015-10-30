var finalhandler = require('finalhandler')
var http = require('http')
var serveIndex = require('serve-index')
var serveStatic = require('serve-static')

// Serve directory indexes for public/ftp folder (with icons)
var index = serveIndex('/Users/David/Desktop/csgoserver', {'icons': true})

// Serve up public/ftp folder files
var serve = serveStatic('/Users/David/Desktop/csgoserver')

// Create server
var server = http.createServer(function onRequest(req, res){
    var done = finalhandler(req, res)
    serve(req, res, function onNext(err) {
        if (err) return done(err)
        index(req, res, done)
    })
});

//process.env.PORT is the port of Heroku
var port = process.env.PORT || 1337;
// Listen
server.listen(port);

/*
*
* expressjs/serve-index on github for more info.
*
*
* */