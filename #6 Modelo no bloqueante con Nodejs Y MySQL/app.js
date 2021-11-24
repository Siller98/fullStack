const express = require('express');
const port=3001;

const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);


const server = app.listen(port, (error) =>{
    if(eror) return console.log(`Error: $(error)`);

    console.log(`El servidor escucha en el puerto $(server.adress().port)`);
});