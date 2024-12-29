const express = require('express')
const app = express()
const path = require('path')
const PORT = 3500;

app.get('^/$|/index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/first',(req,res)=>{
    res.sendFile(path.join(__dirname,'january.html'))
})
app.get('/second',(req,res)=>{
    res.sendFile(path.join(__dirname,'febraury.html'))
})
app.get('/third',(req,res)=>{
    res.sendFile(path.join(__dirname,'march.html'))
})
app.get('/four',(req,res)=>{
    res.sendFile(path.join(__dirname,'april.html'))
})
app.get('/five',(req,res)=>{
    res.sendFile(path.join(__dirname,'may.html'))
})
app.get('/six',(req,res)=>{
    res.sendFile(path.join(__dirname,'june.html'))
})
app.get('/seven',(req,res)=>{
    res.sendFile(path.join(__dirname,'july.html'))
})
app.get('/eight',(req,res)=>{
    res.sendFile(path.join(__dirname,'augest.html'))
})
app.get('/nine',(req,res)=>{
    res.sendFile(path.join(__dirname,'september.html'))
})
app.get('/ten',(req,res)=>{
    res.sendFile(path.join(__dirname,'october.html'))
})
app.get('/eleven',(req,res)=>{
    res.sendFile(path.join(__dirname,'november.html'))
})
app.get('/twelth',(req,res)=>{
    res.sendFile(path.join(__dirname,'december.html'))
})

app.listen(PORT,()=>console.log('i am here'))