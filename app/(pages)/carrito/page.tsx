"use client";

import { useCarrito } from "@/hooks/CarritoHook"
import ProductItemCar from "./components/productItemCar";
import {loadStripe} from "@stripe/stripe-js"
import { realizarVentaRequest } from "@/api/realizarVentas";
import { Button } from "@/components/ui/button";

export default function CarritoPage(){
  
    const {carrito,removeItems,removeAllItems}=useCarrito()

    const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY||'')
    //.REDUCE nos da 2 variables, una global q es como un acumulador que guarda valores, por cada uno
    //de nuestros intems que tengamos en nuestro array y la otra variable es el valor u objeto del array
    //aqui le decimos que el acumulador sera igual a la suma del acumulador (suma) más el precio de cada uno de nuestros productos
    const TotalOrder=carrito.reduce((total,priceItem)=>total+priceItem.price,0)
    const calcularEnvio=()=>{
      if(TotalOrder<2000){
        return 0
      }else{
        return 300
      }
    }
    const res=calcularEnvio()
    const FinalOrder=TotalOrder+res

    

    const comprarConStripe=async()=>{
      try {
        const stripe=await stripePromise
        const res=await realizarVentaRequest.post("/api/ventas",{
          products:carrito
        })
        await stripe?.redirectToCheckout({
          sessionId:res.data.stripeSession.id
        })

        removeAllItems()
        
      } catch (error) {
        console.log(error)
      }
    }


    return(
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Tus productos</h2>
      
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">

            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
             
            {carrito.map((item)=>(
                <ProductItemCar key={item.slug} product={item} removeItems={removeItems}></ProductItemCar>
            ))}

            </div>
      
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>
      
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">{`$${TotalOrder}`}</dd>
                    </dl>
      
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">{`$${res}`}</dd>
                    </dl>
                  </div>
      
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">{`$${FinalOrder}`}</dd>
                  </dl>
                </div>
      
                <Button onClick={comprarConStripe} className="flex w-full items-center justify-center 
                rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black
                hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 
                dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceder al pago</Button>
      
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> o </span>
                  <a href="#" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                    Continuar comprando
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
}