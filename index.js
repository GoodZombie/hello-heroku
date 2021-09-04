const express = require('express');
const app = express();

app.get('/', function (req, res) {

    res.send('<h3><a href="https://github.com/GoodZombie/hello-heroku">Hello Node on Heroku</a></h3>');
    res.send('<h3><a href="https://github.com/GoodZombie/hello-heroku/blob/main/README.md">Read Me</a></h3>');

});

app.get('/about', function (req, res) {

    res.sendFile('/README.md', {root: __dirname});

});

app.listen(process.env.PORT || 3000);
