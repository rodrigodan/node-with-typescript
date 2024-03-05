import express from "express";

const router = express.Router();

router.get('/todo', (req,res)=>{
    res.json({message: 'todo'})
})

router.post('/todo', (req,res)=>{
    res.json({message: 'todo'})
})

router.put('/todo', (req,res)=>{
    res.json({message: 'todo'})
})

export default router;