const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const funcionariosRouter = require('./Routes/funcionariosRouter');
const carouselRouter = require('./Routes/carouselRouter');
const feriasRouter = require('./Routes/feriasRouter');
const intranetRouter = require('./Routes/intranetRouter');

const app = express();
const publicDirectory = path.join(__dirname, 'public');

app.use(cors());
app.use(bodyParser.json());

app.use('/v1/funcionarios', funcionariosRouter);
app.use('/v1/carousel', carouselRouter);
app.use('/v1/ferias', feriasRouter);

app.use('/v1/intranet', intranetRouter);

app.use('/img/carousel', express.static(path.join(publicDirectory, 'carousel')));

app.use((req, res, next) => {
    const error = new Error('Rota não encontrada');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});