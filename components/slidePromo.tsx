"use client";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function SlidePromo(){

    const promos=[
        {
            title:"Envios a México, USA y Canadá apartir de $1000 MXN",
            description:"Promocion valida hasta el 31 de diciembre de 2025",
            link:"/"
        },
        {
            title:"Este mes de Enero, 20% de descuento en todos los productos",
            description:"Leer los terminos y condiciones",
            link:"/"
        },
        {
            title:"50% de descuento en productos seleccionados",
            description:"todos los productos seleccionados tienen un 50% de descuento",
            link:"/"
        },
        {
            title:"Verte mejor nunca fue tan facil con GagoShop",
            description:"obten un cupón de descuento del 10% en tu primera compra con el código GAGOSHOP10",
            link:"/"
        }
    ]

    return(
        <Carousel
            plugins={[Autoplay({
                delay: 2000,
            })]}
        >
            <CarouselContent>
                {promos.map((promo)=>(
                    <CarouselItem key={promo.title} className="cursor-pointer">
                        <div className="flex flex-col items-center justify-center h-full p-10 bg-gray-100 dark:bg-gray-900">
                            <h1 className="text-2xl font-bold">{promo.title}</h1>
                            <p>{promo.description}</p>
                            <Link href={promo.link} className="mt-5 text-blue-500">Ver más</Link>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}