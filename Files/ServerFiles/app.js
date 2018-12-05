let express = require('express');
let path = require('path');
let http = require("http");

const PORT = process.env.PORT || 3000

var app = express();


app.use(function (req, res, next) {

    console.log(req.originalUrl);



    if(req.originalUrl.endsWith('.html')){
//        console.log(path.join(__dirname,'/../WebFiles/HTML'+req.originalUrl))
        res.sendFile(path.join(__dirname,'..','WebFiles','HTML',req.originalUrl));
    }
    else if (req.originalUrl === '/') {
        res.sendFile(path.join(__dirname,'..','WebFiles','HTML','main.html'));
    }
    else {
        res.sendFile(path.join(__dirname,'..','WebFiles',req.originalUrl));
    }
    
});


/*
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../WebFiles/HTML/main.html'))
})
*/

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

setInterval(function() {
    http.get("http://itsnotchristmas.herokuapp.com");
}, 900000); // every 5 minutes (900000)