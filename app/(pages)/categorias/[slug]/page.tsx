import { getProductsByCategory } from "@/api/getCategories";
import { Separator } from "@/components/ui/separator";
import ProductsPage from "./components/products";
import { getProductsFilters } from "@/api/getProductFilters";

//ESTE COMPONENTE ES UN SERVER SIDE RENDERING, AQUI OBTENGO LOS DATOS DE LA API Y LOS PASO A LOS COMPONENTES HIJOS COMO PROPS Y ASI RENDERIZAR LOS DATOS 

export default async function categorySlug({params}:{params:{slug:string}}) {

    const {slug} = await params;

    const productsByCategory = await getProductsByCategory(slug); 
    const filters = await getProductsFilters();

    return (
        <div className="max-w-6xl py-6 px-12 mx-auto sm:px-0">
        <h1 className="text-3xl font-medium">{productsByCategory[0].category.categoryName}</h1>
        <Separator className="my-4 bg-gray-400"/>
        <ProductsPage productsByCategory={productsByCategory} filters={filters} ></ProductsPage>
        </div>
    )
}
