// Indique que la norme utilisée est HTTP
var http = require('http');

// Initialise un serveur qui sera basé sur la norme HTTP
var server = http.createServer(function(req, res) {

  // Détermine la réponse de l'entête HTTP 
  // 200: OK
  // Contenu de type HTML
  // Encodage en UTF8
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

  // Détermine le contenu de la réponse
  res.end('Votre première requête sur un serveur Node.js!');
});

// Indique sur quel port, on peut effecuter nos requêtes. Ici: http://localhost:8081/
server.listen(8081);