import MainLayout from "@/layouts/MainLayout";
import ProductCard from "@/components/ProductCard";
import {products, types, topCategory, categories, sizes} from "@/data/Datas";
import {useEffect, useState} from "react";
import {CheckIcon} from "@heroicons/react/20/solid";

export async function getServerSideProps(context) {

    return {
        props: {
            // siteSettingRes,
            subCategoryId: context.params.cat
        }, // will be passed to the page component as props
    }
}

export default function productsAllPage({subCategoryId}) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedSize, setSelectedSize] = useState(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [productFilteredByCategory, setProductFilteredByCategory] = useState([])
    const categoryFilteredByCategory = categories.find(item => item.id === parseInt(subCategoryId))

    let productFilteredByCategoryMain =products.filter(item => item.category === categoryFilteredByCategory.id )
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{

        if(selectedSize){
            setProductFilteredByCategory(products.filter(item => item.category === categoryFilteredByCategory.id && (selectedSize && item.sizesId.indexOf(selectedSize)>=0)))

        }else{
            setProductFilteredByCategory(products.filter(item => item.category === categoryFilteredByCategory.id ))
        }

    },[selectedSize])
    return (
        <MainLayout>
            <div className={"pt-[90px] grid grid-cols-12 gap-8 container mx-auto"}>
                <div className={"col-span-3 pt-24"}>
                    <div className={"border rounded-2xl border-black border-opacity-10 shadow bg-white px-4 py-4"}>
                        <h2 className={"mb-4 font-bold text-lg"}>
                            فیلتر بر اساس سایز
                        </h2>
                        <div onClick={()=>setSelectedSize(null)} className={`${selectedSize===null?"bg-black text-white" : ""} mb-2 ml-2 items-center inline-flex border border-black rounded-lg px-4 py-1`}>
                            {selectedSize===null?<CheckIcon className={"w-4 h-4 text-white ml-2"}/>:<div className={"h-4"}/>}
                            نمایش همه
                        </div>
                        {sizes.filter(s=>productFilteredByCategoryMain.findIndex(item=>item.sizesId.indexOf(s.id)>=0)>-1).map((item,i) =>
                            <div onClick={()=>setSelectedSize(item.id)} className={`${selectedSize===item.id?"bg-black text-white" : ""} mb-2 ml-2 inline-flex items-center border border-black rounded-lg px-4 py-1`} key={i}>
                                {selectedSize===item.id?<CheckIcon className={"w-4 h-4 text-white ml-2"}/>:<div className={"h-4"}/>}
                                {item.name}
                            </div>
                        )}
                    </div>
                </div>
                <div className={"col-span-9"}>
                    <h1 className={"font-bold text-[48px] mb-6"}>
                        {categoryFilteredByCategory.name}
                    </h1>

                    <div className={"grid grid-cols-3 gap-2"}>
                        {productFilteredByCategory.map((item, i) => <ProductCard item={item} key={i}/>)}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}