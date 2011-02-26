app.get('/test/:id', function (req, res, next) {
	var id = req.params.id;
	var render_payload;
	render_payload = {
        locals: {
					test: id
				}
    }
	console.log('User accessed: ' + id);
	res.render('test.ejs', render_payload);
});

// Lets do some redirects
app.get('/p/schedule', function(req, res, next) {
	res.writeHead(301, {'Location' : 'http://goo.gl/h0RWL'});
	res.end();
})