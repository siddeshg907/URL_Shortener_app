import express from "express";
import cors from "cors";
import { connection } from "./db.js";
import { userRouter } from "./routes/user.route.js";
import { urlRouter } from "./routes/url.route.js";



const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).json({msg:"This is Home Page"})
})

app.use("/users",userRouter)
app.use("/url", urlRouter);

app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to Database")
        console.log("server is running on port 8080")
    } catch (error) {
        console.log(error)
    }

})