/* eslint-disable @next/next/no-img-element */
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPorCategoria({product}:{product:Product}) {
 
   return (
    <div className="flex flex-col items-center">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Link href="#" className="flex justify-center">
                <Image src={`${process.env.NEXT_PUBLIC_API_URL}${product.productImage[0].url}`} alt="" width={200} height={100} className="p-5" priority  ></Image>
        </Link>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl  tracking-tight text-gray-900 dark:text-white">{product.productName}</h5>
            </a>
            
            <div className="flex items-center justify-between mt-7">
                <span className="text-xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                <a href="#" className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar al carrito</a>
            </div>
        </div>
        </div>
    </div>    
  );
}