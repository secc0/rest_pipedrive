import express from "express"
import getDeal from "./service/getDeal.js"
import getProduct from "./service/getProduct.js"


const app  = express()
app.use(express.json())


app.post("/api", async (req, res)=>{
    const deal = await getDeal(req.body.dealID, process.env.TOKEN)
    const product = await getProduct(req.body.dealID, process.env.TOKEN)
    const productName = product.data.data.map((produto)=>{
        return produto.name
    })
    const productPrice = await product.data.data.map((produto)=>{
        return produto.item_price
    })
    

    const object = {
        "email": deal.data.creator_user_id.email,
        "nome": deal.data.creator_user_id.name,
        "nome_produto": productName,
        "valor_produto": productPrice
    }   

    res.status(200).json({client_data:object})
})

export default app