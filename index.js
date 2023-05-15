import express from 'express';
import { config } from 'dotenv';
import { sequelize } from './model/database.js';
import * as model from './model/model.js';
import cors from 'cors';
import { rootRouter } from './routes/index.js';
import { errorHandler } from './middlewware/ErrorHandlingMiddleware.js'
import fileUpload from 'express-fileupload'
import { resolve } from 'path'

const mod = model;
config();
/** Инициализация сервера. */
const app = express();

const PORT = process.env.PORT || 3333;
const HOST = process.env.HOST || 'localhost';

app.use(cors());
app.use(express.json());
app.use(express.static(resolve('static')))
app.use(fileUpload());
app.use('/api', rootRouter);

/** Обработка ошибок (последним). */
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, HOST, () => console.log(`Server started: http://${HOST}:${PORT}`));
    } catch(e) {
        console.log(e);
    }
}

start();

