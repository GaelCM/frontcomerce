import { useEffect, useState } from "react";


export const useGetBestProducts=()=>{
    
      const [result, setResult] = useState([]); // Puedes ajustar el tipo según tu modelo
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

      const url=`${process.env.NEXT_PUBLIC_API_URL}/api/products?filters[isTrend][$eq]=true&populate=*`;

     useEffect(()=>{
        (async()=>{
            try {
                const response=await fetch(url)
                const data=await response.json()
                setResult(data.data)
                setLoading(false)
            } catch (error) {
                if(error instanceof Error){
                    setError(error.message)
                }
            }
        })()
     },[url]);
 
      return {result,loading,error};
}

