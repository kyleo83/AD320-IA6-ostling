var bl = require('bl')
var http = require('http');

http.get(process.argv[2], function(res){
  res.on("error", function (err){
    return console.error(err);
  })
  res.setEncoding('utf8');
  res.pipe(bl(function (err, data){
    if(err){
      return console.error(err);
    }
    console.log(data.length);
    console.log(data.toString());
  }))

})
