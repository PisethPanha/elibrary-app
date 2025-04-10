import axios from "axios"

export async function fetchbook(){

    const res = await axios.get("https://carefree-empathy-production.up.railway.app/getbookastype", { params: { leng: "Khmer" } })
    return res.data

}