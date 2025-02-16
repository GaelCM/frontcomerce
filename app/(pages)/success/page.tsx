import { CircleCheckBig } from "lucide-react"



export default function SuccessPage(){
    return(
        <>
            <div className="bg-green-700 text-white p-8 rounded-lg shadow-lg text-center lg:h-[70dvh] flex flex-col justify-center ">
            <div className="flex justify-center"><CircleCheckBig size={100}></CircleCheckBig></div>
      <h2 className="text-3xl font-bold mb-4">¡Gracias por tu compra!</h2>
      <p className="text-lg mb-6">Tu pedido ha sido procesado con éxito. Recibirás un correo electrónico con los detalles de tu compra y el número de seguimiento.</p>
      <p className="text-xl font-semibold">¡Gracias por confiar en nosotros!</p>
    </div>
        </>
    )
}