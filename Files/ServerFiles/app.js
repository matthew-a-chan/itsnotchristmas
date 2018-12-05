let express = require('express');
let path = require('path');
const PORT = process.env.PORT || 3000

var app = express();

app.use(function (req, res, next) {

    if(req.originalUrl.endsWith('.html')){
//        console.log(path.join(__dirname,'/../WebFiles/HTML'+req.originalUrl))
        res.sendFile(path.join(__dirname,'/../WebFiles/HTML'+req.originalUrl));
    }
    else if (req.originalUrl === '/') {
        res.sendFile(path.join(__dirname,'/../WebFiles/HTML/main.html'));
    }
    else {
        res.sendFile(path.join(__dirname ,'/../WebFiles' + req.originalUrl));
    }
    
});
/*
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../WebFiles/HTML/main.html'))
})

app.get('*.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/../WebFiles/HTML/about.html'))
})*/

app.listen(PORT, () => console.log(`Listening on ${PORT}`));