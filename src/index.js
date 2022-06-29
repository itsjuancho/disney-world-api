const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes.js');

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const sequelize = require('./database/db');
require('./database/associations');

app.use(express.urlencoded({ extended: false }));
app.set('port', PORT);
app.set('json spaces', 2);
app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.get('/', (req, res) => {
    res.status(200).json({
        msg: "Bienvenido a tu primera API rest"
    })
});

app.use((req, res) => {
    res.status(404).json({
        message: "El recurso al que intenta acceder, no existe o está fuera de su alcance...",
        path: req.path
    })
});

app.listen(PORT, () => {
    console.log(`Running app in http://localhost:${PORT}`);

    sequelize.sync({ force: false }).then(() => {
        console.log("Connected to the database succesfully!");
    }).catch(error => {
        console.log("ERROR DB! => ", error);
    });
});