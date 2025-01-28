/* eslint-disable @next/next/no-img-element */


import { getBestProducts } from "@/api/getBestProductsF";
import { SlideTrendProducts } from "./slideTrendProducts";




//import { useGetBestProducts } from "@/api/getBestProducts";
export default async function TrendProducts() {

     //const {result}=useGetBestProducts()
      const result=await getBestProducts()
     //console.log(result)

    return (
        <div>
            <SlideTrendProducts result={result}></SlideTrendProducts>
        </div>
    );
}