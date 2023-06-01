const express = require('express')

const app = express()
app.use(express.static('.'))

app.get('/', function (req, res) {
    res.sendfile('./index.html');
});

app.listen(3000);

console.log('Сервер стартовал на: http://localhost:3000');