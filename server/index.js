'use strict';

require('babel-core/register');
var http = require('http');
var fs = require('fs');
var path = require('path');

global.initAppData = {
    items: [
        'Item 0',
        'Item 1',
    ],
    disabled: true,
};

var AppRender = require('./render.js');

http.createServer((req, res) => {
    var file;

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');

        file = AppRender.render();
        res.end(file);
    } else if (req.url === '/public/js/app.js') {
        res.setHeader('Content-Type', 'text/javascript');

        file = fs.readFileSync(path.join(__dirname, '../public/js/app.js'));
        res.end(file);
    } else if (req.url === '/public/js/app.js.map') {
        res.setHeader('Content-Type', 'application/octet-stream');

        file = fs.readFileSync(path.join(__dirname, '../public/js/app.js.map'));
        res.end(file);
    } else {
        res.statusCode = 404;
        res.end();
    }

    // The http server listens on port 3000
}).listen(3000, (err) => {
    if (err) throw err;

    console.log('----------------------------------------------------');
    console.log('Complete: open http://localhost:3000 in your browser');
});
