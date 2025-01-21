import { Product } from "@/types";

export const getBestProducts=async():Promise<Product[] | undefined> => {
    
    const url=`${process.env.NEXT_PUBLIC_API_URL}/api/products?filters[isTrend][$eq]=true&populate=*`;
    try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a slow network
        const response=await fetch(url)
        const data=await response.json()
        return data.data as Product[]
    } catch (error) {
        if(error instanceof Error){
            return undefined
        }
    }
}