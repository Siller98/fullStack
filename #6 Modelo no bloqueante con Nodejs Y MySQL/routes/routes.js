const pool = require('../data/config');

//Routes
const router = app => {
    //Home
    app.get('/', (req, res) => {
        res.send({
            message: 'Bienvenido a Node.js Express REST API'
        });
    });

    //Get all users
    app.get('/users', (req, res) => {
        pool.query('SELECT * FROM users', (err, result) => {
            if (err) throw err;

            res.send(result);
        });
    });

    //Select specific user
    app.get('/users/:id', (req, res) => {
        const id = req.params.id;
        pool.query('SELECT * FROM users where  id = ?', id, (err, result) => {
            if (err) throw err;

            res.send(result);
        });
    });

    //Add user
    app.post('/users', (req, res) => {
        pool.query('INSERT INTO users SET ?', req.body, (err, result) => {
            if (err) throw err;

            res.status(201).send(`User added with ID: ${result.insertId}`);
        });
    });
}

module.exports = router;