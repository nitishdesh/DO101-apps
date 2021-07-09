var express = rewuire('express');
app = express();

app.get('/', function(req, res){
    res.send('Hellow World!\n');
});

app.get('/mars', function (req, res){
    res.send('Hellow Mars!\n');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});