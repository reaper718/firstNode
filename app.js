const http=require('http');

const server = http.createServer((req,res) => {
    console.log("Server is created");

    res.setHeader('content-Type','text/html');
    if(req.url =='/'){
        res.statusCode = 200;
        res.end("<h1>Hello world</h1>");
    }
    else if(req.url= '/pizza'){
        res.statusCode = 200;
        res.end("<h1>This is your pizza</h1>");
    }
    else if(req.url = '/home'){
        res.statusCode = 200;
        res.end("<h1>Wlcome home</h1>");
    }
    else if(req.url = '/about'){
        res.statusCode = 200;
        res.end("<h1>Welcome to about us</h1>");
    }
    else if(req.url = '/node'){
        res.statusCode = 200;
        res.end("<h1>Welcome to my node js</h1>");
    }
    else {
        res.statusCode = 404;
        res.end("<h1>Page not found</h1>");
    }
})

let port = 3000;
server.listen(port,()=>{
    console.log("Server is running");
})