const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    fs.readFile('./AnswersWebpage.html', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }


    })
});


server.listen(3500);