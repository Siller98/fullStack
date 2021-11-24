const request = require('request');

const json = {
    "nombre": "Ricardo",
    "apellido": "Robledo"
}

request.post({
        url: "http://localhost:3001/users",
        body: json,
        json: true,
    },
    function (err, res, body) {
        console.log(body)
    }
);