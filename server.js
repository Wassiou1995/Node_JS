
// Question 4 : pour tester la quatriéme question (mettre la deuxiéme partie en commentaire )

//const http = require('http');
//const app = require('./app');

//app.set('port', process.env.PORT || 3000);
//const server = http.createServer(app);

//server.listen(process.env.PORT || 3000);

// la premiére Question  pour tester la quatriéme question (mettre la premiére partie en commentaire )

const http = require('http');

const server = http.createServer((req, res) => {
    //res.end('le serveur marche bien!');    
    res.end('le contenu marche bien!');

});

server.listen(process.env.PORT || 3300);