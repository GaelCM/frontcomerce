/* eslint-disable @next/next/no-img-element */
import { getCategories } from "@/api/getCategories";
import Link from "next/link";



export default async function Categories() {
    const categories = await getCategories();
    return (
        <>  
            {categories?.map((category)=>(
                <Link href={`/categories/${category?.slug}`} key={category.slug}>
                <div className="da relative flex  flex-col  overflow-hidden h-[70dvh]">
                <div className="absolute inset-0 bg-center"></div>
                <div className="group relative m-0 flex h-[70dvh] w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                  <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                    <img src={`${process.env.NEXT_PUBLIC_API_URL}${category.categoryImage.url}`} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                  </div>
                  <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                    <h1 className="font-serif text-2xl font-bold text-white shadow-xl">{category.categoryName}</h1>
                  </div>
                </div>
              </div>
              </Link>
            ))} 
        </> 
    );
}