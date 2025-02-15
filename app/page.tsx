
import Categories from "@/components/categories";
import { SkeletonCard} from "@/components/skeletonCard";
import SlidePromo from "@/components/slidePromo"
import TrendProducts from "@/components/trendProducts";
import { Suspense } from "react";

export default async function Home() {

 
  return (
    <div>
      <SlidePromo></SlidePromo>
      <div>
        <div className="flex justify-center">
        <h1 className="font-bold text-3xl p-10">Productos en tendencia</h1>
        </div>
        <Suspense fallback={<SkeletonCard />}>
          <TrendProducts  />
        </Suspense>
      </div>
      <section className="p-10">
        <div className="flex justify-center">
          <h1 className="font-bold text-3xl p-10">Encuentra tu mejor estilo</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <Categories />
        </div>
      </section>
    </div>
  );
}
