import axios from "axios"

export const realizarVentaRequest=axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_URL,
    headers:{
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
    },
})