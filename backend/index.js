// KHOI TAO WEB SERVER
const express = require('express');
const app = express();

// middleware
app.use(express.static("html&css.1"));

// Router
app.get('/', (request, response) => {
    console.log(__dirname)
    response.sendFile(__dirname+'/html&css.1/index.html');
});

// app.get('/style.css', (request, response) => {
//     response.sendFile(__dirname +'/html&css.1/style.css');
// })

// middleware
// http://localhost:6969/...
app.use(express.static("html&css"));

// Router
app.get('/about', (request, response) => {
    response.sendFile(__dirname+ '/html&css/about/index.html')
});

// http://localhost:6969
const port = 6969;
app.listen(port, function(err) {
    if(err) console.log(err)
    else console.log("Server start success");
})