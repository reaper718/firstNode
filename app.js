const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/' && method === 'GET') {

        res.setHeader('Content-Type', 'text/html');

        fs.readFile('formValues.txt',(err,data) => {
            console.log(data.toString());
            res.end(`<h1>${data.toString()}</h1>
            
            <form action="/message" method="POST">
                <label>Name:</label>
                <input type="text" name="username">
                <button type="submit">ADD</button>
            </form>
            `
        );
        })

    } else if (url === '/message' && method === 'POST') {

        let body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {

            const buffer = Buffer.concat(body);

            console.log(buffer);

            const formData = buffer.toString();

            console.log(formData);

            const formValues = formData.split('=');

            fs.writeFile('formValues.txt', formValues[1], (err) => {

                if (err) {
                    console.log(err);
                    return;
                }

                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            });
        });

    } else {

        res.statusCode = 404;
        res.end('Page not found');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});