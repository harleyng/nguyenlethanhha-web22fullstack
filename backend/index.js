// KHOI TAO WEB SERVER
const express = require('express');
const app = express();

// Router
app.use(express.static("html&css.1"));
app.get('/', (request, response) => {
    console.log(__dirname)
    response.sendFile(__dirname+'/html&css.1/index.html');
});

// Router
app.use(express.static("html&css"));
app.get('/about', (request, response) => {
    console.log(__dirname)
    response.sendFile(__dirname+ '/html&css/about/index.html')

});

// http://localhost:6969
const port = 6969;
app.listen(port, function(err) {
    if(err) console.log(err)
    else console.log("Server start success");
})