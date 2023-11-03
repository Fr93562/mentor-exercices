// Utilise la librairie Express
var express = require('express');
// Path détermine les adresses reçues
var path = require("path");
var app = express();
// Détermine le port 'écoute
var port = 8081;
 
/**
 * Librairies de la méthode Express.js
 * Sert à récupérer les fichiers css/js du site
 */
app.use(express.static(__dirname + '/assets'));
app.use('/static', express.static(__dirname + '/assets'));

 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
 
app.listen(port);
console.log(`server runnig on port ${port} : http://localhost:${port}/`);
