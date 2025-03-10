"use client";

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ModeToggle } from "./toogleTheme";
import { BaggageClaim, CircleUserRound, ShoppingCart, Heart} from "lucide-react";
import { useCarrito } from "@/hooks/CarritoHook";
import { useFavoritesList } from "@/hooks/FavoritesHook";

export default function Navbar(){

    const router=useRouter();
    const {carrito} =useCarrito()
    const {favoritesList}=useFavoritesList()

    return(
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center" onClick={(e)=>{e.preventDefault();router.push("/")}}>
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <ModeToggle />
                        <Link href="#" className="text-white ml-2 bg-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-secondary dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Iniciar Sesion</Link>
                        
                        {carrito.length==0?
                            <ShoppingCart size={20} className="cursor-pointer" onClick={()=>{router.push("/carrito")}}></ShoppingCart>
                            :(
                            <div className="flex gap-1 m-2" onClick={()=>{router.push("/carrito")}} >
                                <BaggageClaim size={20} className="cursor-pointer"></BaggageClaim>
                                <span>{carrito.length}</span>
                            </div>
                            )
                        }
                        {favoritesList.length==0?
                            <Heart size={20} className="cursor-pointer" onClick={()=>{router.push("/favorites")}}></Heart>
                            :(
                            <div className="flex gap-1" onClick={()=>{router.push("/favorites")}} >
                                <Heart size={20} className="cursor-pointer"></Heart>
                                <span>{favoritesList.length}</span>
                            </div>
                            )
                        }


                        <CircleUserRound size={20} className="cursor-pointer mx-2"></CircleUserRound>           
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link href={"/"} className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Inicio</Link>
                            </li>
                            <li>
                                <Link href="/products" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Productos</Link>
                            </li>
                            <li>
                                <Link href="/" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contacto</Link>
                            </li>
                            <li>
                                <Link href="/" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-blue-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
} 