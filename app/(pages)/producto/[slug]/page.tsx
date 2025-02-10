import { getProductDetail } from "@/api/getProductDetail";
import ProductDetailPage from "./components/productDetailPage";

export default async function ProductDetails({params}:{params:{slug:string}}){

    const product= await getProductDetail(params.slug);

    return(
        <>
            <ProductDetailPage product={product}></ProductDetailPage>
        </>
    )
}