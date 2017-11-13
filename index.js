const http = require('http');
const request = require('request');

http.createServer((req, res) => {
  //res.setHeader('Host', 'google.fr');
  const website = 'deezer.com';
  const target = req.url === '/' ? website : `${website}/${req.url}`;
  res.setHeader('Content-Type', 'text/html;charset=utf8');

  console.log(`targetting ${target}`);

  request(`http://www.${target}`).pipe(res);
  //res.end('hello');
}).listen(9999);
