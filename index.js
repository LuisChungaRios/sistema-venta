import express from "express";
const app = express();

import morgan from "morgan";
import cors from"cors";
import mongoose from "mongoose";
import {join} from "path";

/*
routes
 */

import router from './routes'

const dbUrl = "mongodb://localhost:27017/dbsistema";
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, {useCreateIndex: true, useNewUrlParser: true})
    .then( res => console.log("Conectando a la db en el puerto 27017"))
    .catch(err => console.log("error", err));

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(join(__dirname,'public')));

app.use('/api', router);
app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), () => console.log(`iniciando en el puerto ${app.get('port')}`));
