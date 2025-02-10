"use client";

import { Product, Schema } from "@/types";
import FiltersControl from "./filtersControlCategory";
import ProductsPorCategoria from "./productsPorCategoria";
import { useEffect, useState } from "react";

type ProductsPageClientProps={
    productsByCategory: Product[];
    filters: Schema;
  }

export default function ProductsPage({productsByCategory,filters}:ProductsPageClientProps) {

    const [filterProducts, setFilterProducts] = useState("");
    const [productsFiltered, setProductsFiltered] = useState<Product[]>(productsByCategory);

    useEffect(()=>{
        if(filterProducts){
            const filtered = productsByCategory.filter((product) => product.Origen === filterProducts);
            setProductsFiltered(filtered);
        }else{
            setProductsFiltered(productsByCategory);
    }},[filterProducts,productsByCategory]);

  return (
    <>
      <div className="sm:flex sm:justify-between">
            <div>
            <FiltersControl filters={filters} setFilterProducts={setFilterProducts} />
            </div>
            <div className="grid gap-5 mt-8 md:grid-cols-3 md:gap-10 flex-grow mx-10">
                {productsFiltered.map((product) => (
                    <ProductsPorCategoria key={product.id} product={product} />
                ))}
            </div>
        </div>
    </>
  );
}