import express from "express"
import getDeal from "./service/getDeal.js"


const app  = express()
app.use(express.json())


app.post("/api", async (req, res)=>{
    const deal = await getDeal(req.body.dealID, process.env.TOKEN)
    console.log(deal)

})

export default app