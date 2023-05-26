import MainLayout from "@/layouts/MainLayout";
import ProductCard from "@/components/ProductCard";
import {categories, products, topCategory, types} from "@/data/Datas";
import {useEffect, useState} from "react";

export default function productsAllPage(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tab, setTab] = useState(1)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedTabProduct, setSelectedTabProduct] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const topCategoryF = topCategory.filter(item => item.typeId === tab)
        console.log(topCategoryF)
        const categoryF = categories.filter(item => topCategoryF.findIndex(t => t.id === item.topCategoryId) > -1)
        console.log(categoryF)
        const productF = products.filter(item => categoryF.findIndex(t => t.id === item.category) > -1)
        setSelectedTabProduct(productF)
    }, [tab])
    return(
        <MainLayout>
            <div className={"pb-[800px] pt-[90px] container mx-auto"}>
                <h1 className={"font-bold text-[48px] mb-6"}>
                    لیست محصولات
                </h1>
                <div
                    className={" sticky  z-[888] top-[56px] bg-zinc-50"}>
                    <div className={"container mx-auto border-b  border-zinc-400 flex items-center"}>
                        {types.map((item, i) =>
                            <div onClick={() => setTab(item.id)} key={i}
                                 className={"flex justify-center hover:bg-black hover:bg-opacity-4 w-1/12 text-center "}>
                                <div className={"w-fit flex items-center relative h-[48px]"}>
                                    {item.name}
                                    {item.id === tab && <div
                                        className={"absolute bottom-0 w-full bg-black h-[3px] rounded-t-[3px]"}/>}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={"grid grid-cols-4 gap-2"}>
                    {selectedTabProduct.map((item,i)=><ProductCard withoutItems item={item} key={i}/>)}
                </div>
            </div>
        </MainLayout>
    )
}