const http = require("http");
const fs = require("fs");
const path = require("path");

http
	.createServer(function (req, res) {
		//lembre-se de usar path.join
		let filePath = path.join(
			__dirname,
			req.url === "/" ? "index.html" : req.url + ".html"
		);
		fs.readFile(filePath, function (err, data) {
			if (err) {
				res.writeHead(404, { "Content-Type": "text/html" });
				return res.end("404 Not Found");
			}
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	})
	.listen(8080);
