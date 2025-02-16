import { Product } from "@/types"
import { create } from 'zustand'
import {persist,createJSONStorage} from 'zustand/middleware'




//OKEY LO PRIMERO QUE HAY QUE HACER ES CREAR NUESTRO TYPE PARA EL CARRITO, CREAMOS UN CONTRATO
//POR EL CUAL SE REGIRA NUESTRO CARRITO Y SU ESTRUCTURA

type carritoModel={
    carrito:Product[],//PRIMERO CREAMOS LA LISTA VACIA CON LA QUE INICIA Y ES LA QUE UTILIZAREMOS 
    setItems:(product:Product)=>boolean, //CREAMOS UNA FUNCIÓN QUE AGREGARA PRODUCTOS A NUESTRO CARRITO, ESTE recibe un producto
    removeItems:(id:number)=>void,
    removeAllItems:()=>void
}

export const useCarrito=create(
    persist<carritoModel>(
        (set,get)=>({

            carrito:[],

            setItems:(product:Product)=> {
                const currentCarrito=get().carrito//TRAEMO EL CARRITO ACTUAL o vacio

                const existeItem=currentCarrito.find(item=>item.id==product.id) //BUSCAMOS EN EL CARRITO SI YA EXISTE EL PRODUCTO MEDIANTE EL ID
                if(existeItem){ //SI YA EXISTE aqui podemos elevar el contador, evitar que se vuelva a cargar ETC
                    
                    return false;//en este caso nosotros mostramos un ALERT que diga que ya existe 
                }

                set({carrito:[...currentCarrito,product]}) //si no existe, entonces SETEAMOS en el OBJETO en el valor carrito le decimos que  
                                                        //Carrito ahora vale lo que tenemos en el carrito viejo ya sea vacio 
                                                        // o con productos, más el nuevo producto  
                return true                                                                              
            },

            removeItems:(id:number)=>{
                
                const currentCarrito=get().carrito
                set({carrito:[...currentCarrito].filter(product=>product.id!==id)}) //aqui filtro los productos, me vas a dar los productos donde
                                                        //el id del producto no sea igual al yo meti o escogi como parametro.
              
            },

            removeAllItems: ()=> {          
                set({carrito:[]})             
            },
}),
{
    name:"carrito-storage",
    storage:createJSONStorage(()=>localStorage)
}));