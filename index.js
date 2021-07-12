    const express = require('express');
    const http = require('http');
    const morgan = require('morgan');
    const bodyParser = require('body-parser');
    const dishRouter = require('./routes/dishRouter');
    const promotions = require('./routes/promoRouter');
    const leaders = require('./routes/leaderRouter');

    const hostname = 'localhost';
    const port = 3000;

    const app = express();
    

    app.use(morgan('dev'));                               //in thong tin bo sung
    
                          //chuyen noi dung thanh json truoc khi truyen tai

    app.use('/dishes', dishRouter);

    app.use('/promotions', promotions);

    app.use('/leaders', leaders);

    //

    app.use(express.static(__dirname + '/public'));                                        //đưa lên các tập tin tĩnh
    app.use((req, res, next) => {
                                                                                        // su dung middleware o day
        console.log(req.headers);
        res.statusCode =200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h1>This is an Express Server</h1></body></html>');
    });

    const server = http.createServer(app);

    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });