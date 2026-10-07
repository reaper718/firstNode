const http=require('http');
const fs=require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;

    if(res.url === '/'){
        res.setHeader('content-Type','text/html');
        
        res.end(`
                <form action="/message" method="POST">
                    <label>Name:</label>
                    <input type="text" name="username"></input>
                    <button type="submit">ADD</button>
                </form>
            `)
    }
    else{
        if(req.url === "/message"){
            let body = [];
            req.on("data",(chunks) => {
                body.push(chunks);
            });

            req.on("end",() => {
                let buffer = Buffer.concat(body);
                console.log(buffer);

                let formData = buffer.toString();
                console.log(formData);

                const formValues = formData.split("=");

                fs.writeFile("formValues.txt",formValues,(err) => {
                    res.statusCode = 302;

                    res.setHeader('Location','/');
                    res.end();

                })
            })

        }
    }
    
})

let port = 3000;
server.listen(port,()=>{
    console.log("Server is running");
})