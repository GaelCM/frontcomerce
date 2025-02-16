/* eslint-disable @next/next/no-img-element */
"use client";

import { useFavoritesList } from "@/hooks/FavoritesHook";


export default function FavoritesPage(){

    const {favoritesList,removeItems}=useFavoritesList()

    return(
        <div className="container mx-auto p-4 md:h-[75dvh]">
        <h2 className="text-2xl font-bold mb-4">Productos Favoritos</h2>
        {favoritesList.length === 0 ? (
          <p className="text-gray-500">No tienes productos favoritos.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {favoritesList.map((product) => (
              <div key={product.id} className="border rounded-lg shadow-md p-4 flex flex-col items-center">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${product.productImage[0].url}`}
                  alt={product.productName}
                  className="w-1/4  object-cover rounded-t-lg mb-2"
                />
                <h3 className="text-lg font-medium mb-1">{product.productName}</h3>
                <p className="text-gray-600 mb-2">Código: {product.productCode}</p>
                <p className="text-gray-600 mb-2">Categoría: {product.category.categoryName}</p>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p> {/* Precio formateado */}
                <button
                  onClick={() => removeItems(product.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    )
}