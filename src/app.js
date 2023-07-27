const express = require('express');
require('dotenv').config();
const apiRoutes = require('./routes/index');
const errorRoutes = require('./routes/error.routes')

const morgan = require('morgan');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(morgan('tiny'))
apiRoutes(app);

app.get('/', (req, res) => {
    res.send('servidor funcionando')
});

errorRoutes(app);

app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
});
