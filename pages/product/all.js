import MainLayout from "@/layouts/MainLayout";
import ProductCard from "@/components/ProductCard";
import {products} from "@/data/Datas";

export default function productsAllPage(){
    return(
        <MainLayout>
            <div className={"pt-[90px] container mx-auto"}>
                <h1 className={"font-bold text-[48px] mb-6"}>
                    لیست محصولات
                </h1>
                <div className={"grid grid-cols-4 gap-2"}>
                    {products.map((item,i)=><ProductCard item={item} key={i}/>)}
                </div>
            </div>
        </MainLayout>
    )
}