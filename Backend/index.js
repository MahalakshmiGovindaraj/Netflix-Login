const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

var username = 'Maha';
var password = 1234;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.post("/login",function(req,res){

    if (req.body.username === username && Number(req.body.password) === password)
    {
        res.send(true)
    }
    else
    {
        res.send(false)
    }
})

app.listen(5000,function(){
    console.log("Server Started...")
})