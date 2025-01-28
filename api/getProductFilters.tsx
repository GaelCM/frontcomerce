import { Schema} from "@/types";

export const getProductsFilters = async ():Promise<Schema>=> {

    const url=`${process.env.NEXT_PUBLIC_API_URL}/api/content-type-builder/content-types/api::product.product`;
    const response = await fetch(url,{cache: "no-cache"})
    if(!response.ok){
        throw new Error("Error al obtener la categoría")
    }
    const data = await response.json()
    return data.data as Schema

}