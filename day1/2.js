const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == "/"){
        res.end("Home page");
    } else if (req.url == "/about"){
        res.end("about page");
    } else if (req.url == "/data"){
        const data = readFileSync("./1jeson", "utf-8");
        res.end(data);
    }else{
        res.end("not found");
    }
});

server.listen(8080, () => {
    console.log("server running at portal 8080");
})