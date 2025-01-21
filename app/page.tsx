
import { SkeletonCard } from "@/components/skeletonCard";
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
    </div>
  );
}
