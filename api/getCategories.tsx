import { Category, Product } from "@/types";


export const getCategories = async ():Promise<Category[]|undefined>=> {

    const url=`${process.env.NEXT_PUBLIC_API_URL}/api/categories?populate=*`;
    try {
        const response = await fetch(url,{cache: "no-cache"})
        const data = await response.json()
        return data.data as Category[]
    } catch (error) {
        if(error instanceof Error){
            return undefined
        }
    }
    
}


export const getCategoryProduct = async (slug:string):Promise<Product[]>=> {
    const url=`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a slow network    
    const response = await fetch(url,{cache: "no-cache"})
    if(!response.ok){
        throw new Error("Error al obtener la categoría")
    }
    const data = await response.json()
    return data.data as Product[]
}    