// const express = require('express');
import express, {Request, Response} from 'express';
import dotenv from "dotenv"
import bodyParser from 'body-parser';
import { fullNameConcat } from './util/Utils';
import todoController from './controllers/todoController'

dotenv.config();

const app = express();



app.use(bodyParser.json());

app.use((req, res, next)=>{
    const token = req.headers['authorization']
    if(token === '123'){
        console.log(token);
        next();
        return ;
    }
    res.status(400).json({message: "Invalid Token"});
})
app.use(todoController);

app.post('/full-name',(req: Request, res: Response)=>{
    const body = req.body;
    res.json({name: fullNameConcat(body.firstName, body.lastName)});
})

app.get('/',(req: Request, res: Response)=>{
    res.json({message: "Welcome"});
})

interface ITodo{
    message: string;
    name: string
}


app.listen(process.env.PORT, () =>{
    console.log(`Servidor rodando: http://localhost:${process.env.PORT}`);
});


