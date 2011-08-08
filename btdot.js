#!/opt/node/bin/node


var dwarf = require("./food"); // Dwarf Needs Food!
var http = require('http');
var port = process.env.PORT || 3000;
require("sys").puts("Ok lets do this... Leeerrroy Jeeeeeenkins (Listening on port " + port + ")");
app.listen(port);
require('./routes');
