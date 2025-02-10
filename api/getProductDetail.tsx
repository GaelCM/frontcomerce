import { Product } from "@/types";


export const getProductDetail=async(slug:string):Promise<Product>=>{
    const url=`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*&filters[slug][$eq]=${slug}`;

    const response = await fetch(url,{cache: "no-cache"})
    if(!response.ok){
        throw new Error("Error al obtener la categoría")
    }
    const data = await response.json()
    return data.data[0] as Product
}