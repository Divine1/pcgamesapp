const express = require("express")
const app = express();
const PORT= process.env.PORT || 4000;

const router = express.Router()


router.get("/fish",(req,res)=>{
    console.log("in /fish route")
    res.send({data : "fish"});
})

router.get("/ant",(req,res)=>{
    console.log("in /ant route")
    res.send({data : "ant"});
})

app.use("/animals",router);


app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})