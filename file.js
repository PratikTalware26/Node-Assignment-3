const fs= require("fs");
const http= require("http")

fs.writeFile("index.html", "<h1> Hello World </h1>\n<p> This is Pratik... </p>", (err)=>{
    console.log(err)
});

const server= http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});

    fs.readFile("./index.html", (err, data)=>{
        if(err){
            console.log(err);
        }else{
            res.write(data);
            res.end();
        }
    })
})

server.listen(5000, ()=> console.log("App is running on port 5000"))