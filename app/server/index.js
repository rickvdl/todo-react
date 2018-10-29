// ES5 compatible server
const express = require('express')

const app = express()

app.use(express.static(__dirname + '/build'));

app.get('*', function(req, res){
  res.sendfile(__dirname + '/build/index.html');
});

const port = process.env.HTTP_PORT || 3000

app.listen(port, function () {
  console.log('App running on port ' + port)
})