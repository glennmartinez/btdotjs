var yaml = require('yaml');
var fs = require('fs');

app.get('/yamltest', function(req, res) {
    fs.readFile('test.yaml', function(err, data) {
        res.header('Content-Type', 'application/json');
        if (err) {
            res.send('{error: \'An error has occured reading the file\'}');
        } else {
			try {
            	res.send(JSON.stringify(yaml.eval(data.toString('utf-8'))));				
			} catch (e) {
            	res.send('{error: \'An error has occured parsing the file\'}');				
			}
        }
    });
});

// Google+ Link
app.get('/%2B', function(req, res) {
	res.redirect('https://plus.google.com/113408318000356722001');
});
app.get('/plus', function(req, res) {
	res.redirect('https://plus.google.com/113408318000356722001');
});

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
});
// All roads lead to rome
app.get('/p/:id', allPurpose);
function allPurpose(req, res, next) {
	res.writeHead(301, {'Location' : '/'});
	res.end();
}
