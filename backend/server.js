import express from 'express';
import data from './data.js'
const app = express();

app.get('/api/products',(req,res)=>{
    return res.send(data.products)
})
app.get('/api/products/:id',(req,res)=>{
    const product = data.products.find(x=>x._id===req.params.id)
    if(product){
       return res.send(product)
    }
    return res.status(404).send({message:'product not found'})
})
app.get('/',(req,res)=>{
    res.send("app")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log('server is running at port 5000')
})