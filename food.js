var e = require("express");
require('ejs');
app = e.createServer();
app.set('view engine', 'ejs');

app.configure(function () {
    app.use(e.logger('\x1b[33m:method\x1b[0m \x1b[32m:url\x1b[0m (:response-time ms)'));
    app.use(e.bodyDecoder());
    app.use(e.methodOverride());
    app.use(e.cookieDecoder());
    app.use(app.router);
    app.use(e.staticProvider(__dirname + '/static'));
	app.set('views', __dirname + '/views');
    app.use(e.errorHandler({ dumpExceptions: true, showStack: true }));

});