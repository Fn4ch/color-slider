const express = require('express')

const app = express()
app.use(express.static('.'))

app.get('/', function (req, res) {
    res.sendfile('./index.html');
});

app.listen(4040);

console.log('Сервер стартовал на: http://localhost:8080');