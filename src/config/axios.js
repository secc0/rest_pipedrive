import axios from "axios"

export const pipeDriveApi = axios.create({
    baseURL:"https://api.pipedrive.com/v1",
    headers: {
        "Content-Type":"application/json"
    }
})