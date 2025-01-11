const express=require("express")
const app=express()
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
let mongoose = require("mongoose")

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

app.get("/", (req, res)=>{
    res.send("Welcome Node")
})

let MemberSchema= new mongoose.Schema({
    name:String,
    image:String,
    specialty:String,
    monthlyIncome:Number,
})

let MemberModel = mongoose.model("members", MemberSchema)

app.get("/members", async(req,res)=>{
    let members= await MemberModel.find()
    res.send(members)
})

app.get("/members/:id",async (req,res)=>{
    let id=req.params.id
    let mymember= await MemberModel.findById(id)
    res.send({
        message:"Success GetById",
        data:mymember
    })
})

app.delete("/members/:id", async  (req,res)=>{
    let {id}=req.params
   await MemberModel.findByIdAndDelete(id)
   res.send({
    message:"Success Delete",
})
})

app.post("/members", async (req,res)=>{
    let newMember= MemberModel(req.body)
   await newMember.save()
   res.send({
     message:"Success Post",
     data:req.body
   })
})

mongoose.connect(process.env.mongoURL)
.then(()=>{
    console.log("connected")
})

app.listen(3001,()=>{
    console.log("Bu Api 3001 portunda dinlenilir")
})