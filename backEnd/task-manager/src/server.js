import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {router} from "./routes/task-routes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;
const host = process.env.HOST;

app.use('/tasks', router);




mongoose.connect(process.env.BD_URI)
    .then(() => console.log("Base de Dados Conectada Com Sucesso"))
    .catch((error)=>
    console.log("Ocorreu um erro ao conectar com a base de Dados", error)
    );

app.listen(port, () => {
  console.log(`Server is running at http://${host}:${port}`);
});