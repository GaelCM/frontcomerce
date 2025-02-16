import { Product } from "@/types"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"


type favoritesModel={
    favoritesList:Product[],//PRIMERO CREAMOS LA LISTA VACIA CON LA QUE INICIA Y ES LA QUE UTILIZAREMOS 
    setItems:(product:Product)=>boolean, //CREAMOS UNA FUNCIÓN QUE AGREGARA PRODUCTOS A NUESTRO favoritesList, ESTE recibe un producto
    removeItems:(id:number)=>void,
    removeAllItems:()=>void
}

export const useFavoritesList=create(
    persist<favoritesModel>(
        (set,get)=>({
            favoritesList:[],

            setItems:(product:Product)=> {
                const currentfavoritesList=get().favoritesList//TRAEMO EL favoritesList ACTUAL o vacio

                const existeItem=currentfavoritesList.find(item=>item.id==product.id) //BUSCAMOS EN EL favoritesList SI YA EXISTE EL PRODUCTO MEDIANTE EL ID
                if(existeItem){ //SI YA EXISTE aqui podemos elevar el contador, evitar que se vuelva a cargar ETC
                    
                    return false;//en este caso nosotros mostramos un ALERT que diga que ya existe 
                }

                set({favoritesList:[...currentfavoritesList,product]}) //si no existe, entonces SETEAMOS en el OBJETO en el valor favoritesList le decimos que  
                                                        //favoritesList ahora vale lo que tenemos en el favoritesList viejo ya sea vacio 
                                                        // o con productos, más el nuevo producto  
                return true                                                                              
            },

            removeItems:(id:number)=>{
                
                const currentfavoritesList=get().favoritesList
                set({favoritesList:[...currentfavoritesList].filter(product=>product.id!==id)}) //aqui filtro los productos, me vas a dar los productos donde
                                                        //el id del producto no sea igual al yo meti o escogi como parametro.
              
            },

            removeAllItems: ()=> {          
                set({favoritesList:[]})             
            },
        }),
        {
            name:"favorites-storage", //AQUI LE DECIMOS EL NOMBRE con el que vamos a guardarlo en local storage
            storage:createJSONStorage(()=>localStorage) //aqui ya creamos el local storage
        }));