import {pipeDriveApi} from "../config/axios.js"

async function getDeal(dealID, apiToken){
    try{
        const response = await pipeDriveApi.get(`deals/${dealID}?api_token=${apiToken}`)
        return response.data
    }catch(err){
        console.error(err)
    }
}

export default getDeal