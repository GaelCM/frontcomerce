"use client";

import { Product, Schema } from "@/types";
import FiltersControl from "./filtersControlCategory";
import ProductsPorCategoria from "./productsPorCategoria";
import { useState } from "react";

interface ProductsPageClientProps {
    productsByCategory: Product[];
    filters: Schema;
  }

export default function ProductsPage({productsByCategory,filters}:ProductsPageClientProps) {

    const [filterProducts, setFilterProducts] = useState("");

    console.log(filterProducts);

  return (
    <>
      <div className="sm:flex sm:justify-between">
            <div>
            <FiltersControl filters={filters} setFilterProducts={setFilterProducts} />
            </div>
            <div className="grid gap-5 mt-8 md:grid-cols-3 md:gap-10 flex-grow mx-10">
                {productsByCategory.map((product) => (
                    <ProductsPorCategoria key={product.id} product={product} />
                ))}
            </div>
        </div>
    </>
  );
}