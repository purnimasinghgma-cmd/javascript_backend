const http = require("http");

const fs = require("fs");

const server = http.createServer(req, res) => {
    if (req.url == "/"){
        res.end("Home page");
    } else if (req.url == "/about"){
        res.end ("about page");
        

    }
    }

}