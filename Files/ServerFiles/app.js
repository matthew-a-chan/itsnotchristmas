let express = require('express');
let path = require('path');

const PORT = process.env.PORT || 3000

var app = express();


app.use(function (req, res, next) {

    console.log(req.originalUrl);


    if (req.originalUrl === '/' || req.originalUrl === '/main.html') {
        //res.sendfile(path.join(__dirname, '..', 'WebFiles', 'HTML', '404.html'));
        res.sendFile(path.join(__dirname,'..','WebFiles','HTML','about.html'));
    }
    else if (req.originalUrl.endsWith('.html')) {
        //res.sendfile(path.join(__dirname, '..', 'WebFiles', 'HTML', '404.html'));
        res.sendFile(path.join(__dirname,'..','WebFiles','HTML',req.originalUrl));
    }
    else {
        res.sendFile(path.join(__dirname, '..', 'WebFiles', req.originalUrl));
    }

});


/*
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../WebFiles/HTML/main.html'))
})
*/

app.listen(PORT, () => console.log(`Listening on ${PORT}`));