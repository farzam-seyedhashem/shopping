import MainLayout from "@/layouts/MainLayout";
import ProductCard from "@/components/ProductCard";
import {categories, products, topCategory, types} from "@/data/Datas";
import {useEffect, useState} from "react";
import {CheckIcon} from "@heroicons/react/20/solid";
export async function getServerSideProps(context) {

    return {
        props: {
            // siteSettingRes,
            typeId:context.params.tpId
        }, // will be passed to the page component as props
    }
}
export default function productsAllPage({typeId}){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedTabProduct, setSelectedTabProduct] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        const tab = parseInt(typeId)
        const topCategoryF = topCategory.filter(item => item.typeId === tab)
        console.log(topCategoryF)
        const categoryF = categories.filter(item => topCategoryF.findIndex(t => t.id === item.topCategoryId) > -1)
        console.log(categoryF)
        const productF = products.filter(item => categoryF.findIndex(t => t.id === item.category) > -1)
        setSelectedTabProduct(productF)
    }, [])
    return(
        <MainLayout>
            <div className={" pt-[90px] container mx-auto"}>
                <h1 className={"font-bold text-[48px] mb-6"}>
                    لیست محصولات
                </h1>
                <div className={"container grid grid-cols-12 gap-4 mx-auto border-b  border-zinc-400 "}>
                    <div className={"col-span-3"}>
                        <div
                            className={"border mt-[84px] rounded-2xl border-black border-opacity-10 shadow bg-white px-4 py-4"}>
                            <h2 className={"mb-4 font-bold text-lg"}>
                                فیلتر بر اساس جنسیت
                            </h2>
                            <a href={"/all-products"}
                               className={`${false ? "bg-black text-white" : ""} mb-2 ml-2 items-center inline-flex border border-black rounded-lg px-4 py-1`}>
                                {false ? <CheckIcon className={"w-4 h-4 text-white ml-2"}/> :
                                    <div className={"h-4"}/>}
                                نمایش همه
                            </a>
                            {types.map((item, i) =>
                                <a href={`/all-products/${item.id}`}
                                   className={`${parseInt(typeId) === item.id ? "bg-black text-white" : ""} mb-2 ml-2 inline-flex items-center border border-black rounded-lg px-4 py-1`}
                                   key={i}>
                                    {parseInt(typeId) === item.id ? <CheckIcon className={"w-4 h-4 text-white ml-2"}/> :
                                        <div className={"h-4"}/>}
                                    {item.name}
                                </a>
                            )}
                        </div>
                    </div>
                    <div className={"col-span-9"}>
                        <h1 className={"font-bold text-[48px] mb-6"}>
                            لیست محصولات
                            {" "+types.find(item=>item.id === parseInt(typeId)).name}
                        </h1>
                        <div className={"grid grid-cols-3 gap-2"}>
                            {selectedTabProduct.map((item,i)=><ProductCard withoutItems item={item} key={i}/>)}
                        </div>
                    </div>
                </div>

            </div>
        </MainLayout>
    )
}