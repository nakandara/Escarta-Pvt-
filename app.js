const http = require("http");
const fs = require("fs")

const PORT = 3000
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                data: "Hello World"
            })
        )
    }
    if (req.url === "/") {
        fs.readFile("page/home.html", "utf8", (err, data) => {
            console.log(data);
            if (err) throw err;
            res.write(data);
            res.end()
        })

    }
    else {
        res.writeHead(200, { "Content-Type": "text/html" });
        // res.end(
        //     JSON.stringify({
        //         data: "not Found"
        //     })
        // )
        res.write("<h1>page Not Found</h1>")
        res.end()
    }

})

server.listen(PORT)
const { area, circumferenc } = require("./circle")

console.log(area(5));

console.log(circumferenc(5));
