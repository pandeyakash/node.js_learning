// const http = require("http"); //We can inmport files from our system as well
// // ./ for relative path and / for absolute path

// const rqListener = (req, res) => {
//     console.log(req.url, req.method, req.headers);
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>")  // With re.write the whole html is sent in chucks
//     res.write("<head><title>Node JS</title></head>")
//     res.write("<body><h1>Hello from my Node JS Server</h1></body>")
//     res.write("</html>")
//     res.end(); //We need to specify when we are done sending a response. And after that we caanot send responses
//     // process.exit();
// }

// const server = http.createServer(rqListener) //Event Driven Architecture. If X happens then do Y

// server.listen(3000); //We don't need to pass port in production. By default it uses port 80.


const http = require("http");
const fs = require("fs")

const requestListener = (req, res) => {
    const url = req.url;
    const method = req.method

    if(url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")  
        res.write("<head><title>Node JS</title></head>")
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Send</button></form></body>")
        res.write("</html>")
        return res.end(); 
    }

    if(url === "/message" && method === "POST") {
        const body = [];
        
        req.on("data", (chunk) => {
            console.log("Chunk", chunk)
            body.push(chunk)
        })

        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1] 
            fs.writeFileSync("message.txt", message);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        })
    }


    res.setHeader("Content-Type", "text/html");
    res.write("<html>")
    res.write("<head><title>Node JS</title></head>")
    res.write("<body><h1>Hello from my Node JS Server</h1></body>")
    res.write("</html>")
    res.end(); 
}

const server = http.createServer(requestListener);

server.listen(3000)