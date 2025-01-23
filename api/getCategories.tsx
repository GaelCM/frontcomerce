import { Category } from "@/types";


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