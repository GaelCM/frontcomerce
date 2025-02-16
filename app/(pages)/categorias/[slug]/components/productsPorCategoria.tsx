/* eslint-disable @next/next/no-img-element */
"use client";  

import { Badge } from "@/components/ui/badge";
import { useCarrito } from "@/hooks/CarritoHook";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductsPorCategoria({product}:{product:Product}) {

    const [isSelected,setSelected] = useState(false);
    const {toast}=useToast()
    const {setItems}=useCarrito()

    const addToCarrito=(product:Product)=>{
        setSelected(!isSelected)
        const res=setItems(product)
        setTimeout(()=>{
            setSelected(false)
        },2000)
        if(res){
            toast({
                title: "Producto agregado",
                description: `${product.productName} se ha añadido al carrito.`,
                className:"bg-blue-500 text-white rounded"
              });
        }else{
            toast({
                title: "Ya se encuentra en tu carrito",
                className:"bg-red-500 text-white rounded"
              });
        }
    }

 
   return (
    <div className="flex flex-col items-center">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Link href={`/producto/${product.slug}`} className="flex justify-center">
                <Image src={`${process.env.NEXT_PUBLIC_API_URL}${product.productImage[0].url}`} alt="" width={200} height={100} className="p-5" priority  ></Image>
        </Link>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl  tracking-tight text-gray-900 dark:text-white">{product.productName}</h5>
            </a>
            <Badge className="bg-black text-white mt-4 ">{product.Origen}</Badge>
            
            <div className="flex items-center justify-between mt-7">
                <span className="text-xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                <button onClick={()=>addToCarrito(product)} className={`px-2 py-1 text-sm border-r-2 rounded-xl ${isSelected?`bg-blue-500 text-white`:`bg-black text-white`}`}>
                    {isSelected?`Agregado`:`Agregar al carrito`}
                </button>
            </div>
        </div>
        </div>
    </div>    
  );
}