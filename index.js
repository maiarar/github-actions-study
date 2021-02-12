var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(`<!doctype html><html lang="pt-br"><meta charset="utf-8"><h1><span style="color: #5e9ca0;">Hello!</span></h1><div><h1 style="color: #5e9ca0;"><span style="color: #3366ff;">You are looking at an amazing blank page, with a wonderful motivational text on it!</span></h1></div><div><h1><span style="color: #99cc00;">Don't forget:</span></h1></div><div><ul><li style="color: #5e9ca0;"><h1><span style="color: #000080;">Drink water</span></h1></li><li style="color: #5e9ca0;"><h1><span style="color: #800000;">Fuck facists</span></h1></li><li><h1><span style="color: #ff9900;">Fuck capitalism</span></h1></li><li style="color: #5e9ca0;"><h1><span style="color: #666699;">And take care of your mind :)</span></h1></li></ul></div>`);
    res.end();
}).listen(3000, 'localhost');
console.log('Página de pé em localhost:3000');