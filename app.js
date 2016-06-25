var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var ikhtisarStatistikRouter = express.Router();
ikhtisarStatistikRouter.route('/ikhtisar-statistiks')
  .get(function(req, res) {
    var responseJson = {
      hello: "This!"
    };
    res.json(responseJson);
  });

app.use('/v1/', ikhtisarStatistikRouter);

app.get('/', function(req, res) {
  res.send('Batavia RESTful service');
});

app.listen(port, function() {
  console.log('Here we are @' + port);
});
