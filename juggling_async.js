var bl = require('bl')
var http = require('http');
var results = [];
var count = 0;

function printresults(){
  for(var i = 0; i < 3; i++){
    console.log(results[i]);
  }
}

function getHttp (i){
  http.get(process.argv[2 + i], function(res){
    res.pipe(bl(function (err, data){
      if(err){
        return console.error(err);
      }
      results[i] = data.toString();
      count++;
      if(count === 3){
        printresults();
      }
    }))
  })
}

for(var i = 0; i < 3; i++){
  getHttp(i)
}
