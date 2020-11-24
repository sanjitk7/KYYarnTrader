const express = require("express")
const path = require("path")
const cors = require("cors")
const app = express()

const port = process.env.PORT || 9000

app.use(cors())

app.use(express.static(path.join(__dirname,"../build")))

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"../build/index.html"))
})

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../build/index.html"))
})

app.listen(port)