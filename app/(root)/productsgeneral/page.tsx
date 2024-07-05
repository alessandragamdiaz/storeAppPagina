import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";


import Image from "next/image";


export default function Productsgeneral() {
  return (
    <main className="max-w-6x1 mx-auto mt-10 px-4">

  
 <div className="py-8 border-b border-slate-200 space-y-4">
      <ProductList/>
      </div>
   
    </main>
  );
}

export const dynamic = "force-dynamic";