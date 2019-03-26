exports.myDateTime = function () {
  return Date();
};

const fs = require('fs')

fs.readFile('./swe.json', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {
    const data = JSON.parse(fileContents)
    console.log("YatchName: "+jsonData[i].emp_id);
  } catch(err) {
    console.error(err)
  }
})

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);