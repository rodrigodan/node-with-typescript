// const express = require('express');
import express, {Request, Response} from 'express';

const route =  express.Router;

module.exports = route;

route.get('/todo', (req: Request, res: Response)=>{
    req.headers['cookie']
    // res.json({message: 'Welcome', params: req.query});
    res.send(process.env.PORT);
})

route.post('/todo', (req: Request, res: Response)=>{
    console.log(req.body);
    res.json({body: req.body});
})

route.put('/todo/:id', (req: Request, res: Response)=>{
    res.json(req.params);
})

route.delete('/todo/:id', (req: Request, res: Response)=>{
    res.json(req.params);
})
