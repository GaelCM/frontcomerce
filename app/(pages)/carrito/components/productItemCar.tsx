"use client";

import { Product } from "@/types";
import Link from "next/link";

type ProductItemProps={
    product:Product;
    removeItems:(id:number)=>void;
}

export default function ProductItemCar({product,removeItems}:ProductItemProps){

    return(
        <div className="space-y-6">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                  <div className="space-y-4 justify-center md:flex md:justify-center md:gap-6 md:space-y-0">
                             
                    <Link href={`/producto/${product.slug}`} className="shrink-0 md:order-1 flex justify-center">
                      <img className="h-20 w-20" src={`${process.env.NEXT_PUBLIC_API_URL}${product.productImage[0].url}`} alt="imac image" />
                    </Link>

                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">{`$${product.price}`}</p>
                        </div>
                    </div>
    
                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <Link href={`/producto/${product.slug}`} className="text-base font-medium text-gray-900 hover:underline dark:text-white">
                      {product.productName}
                      </Link>
                    
                        
                      <div className="flex items-center gap-4">
                        <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                          <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                          </svg>
                          Add to Favorites
                        </button>
      
                        <button onClick={()=>removeItems(product.id)} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                          <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>

                  </div>
                </div>    
        </div>
    )
}