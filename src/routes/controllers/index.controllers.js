
import { poll } from "../../db.js"
export const ping = async(req, resp)=>{
    const [result]= await poll.query('select * from employed')
    resp.json(result)
}