import {pipeDriveApi} from "../config/axios.js";

async function getProduct(dealID, apiToken){
    try{
        const response = await pipeDriveApi.get(`deals/${dealID}/products?start=0&limit=1000&include_product_data=1&api_token=${apiToken}`)
        return response
    }catch(err){
        console.error(err)
    }
}

export default getProduct





// deals/${dealID}/products?start=0&limit=1000&include_product_data=1&api_token=${apiToken}