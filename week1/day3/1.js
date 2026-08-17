const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url== "/") {
        res.end("home pahe");
    } else if (req.url == "/read" && req.method == "POST"){
        // read client data that pass in request body
        // const data  = req.body;
        // console.log(data);

        let str = "";
        req.on("data",(chuck) => {
            str +=chunk;

        });

        req.on("end",() => {
            console.log(str);
        });
        res.end("Data fetch succfully");
    } else {
        res.end("Not found");
    }
});

server.listen(8080, () => {
    console.log("server started")
});