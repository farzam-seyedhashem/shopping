import MainLayout from "@/layouts/MainLayout";
import ProductCard from "@/components/ProductCard";
import {products, types,topCategory,categories} from "@/data/Datas";
import {useEffect} from "react";

export async function getServerSideProps(context) {

    return {
        props: {
            // siteSettingRes,
            typeId:context.params.type
        }, // will be passed to the page component as props
    }
}

export default function productsAllPage({typeId}) {
    // console.log(data)
    const type = types.find(item=> item.id === parseInt(typeId))
    console.log(type)
    const topCategoryFilter = topCategory.filter(item=> item.typeId === type.id)
    console.log(topCategoryFilter)

    const categoryFilteredByCategory = categories.filter(item=> topCategoryFilter.findIndex(tc=>item.topCategoryId === tc.id)>-1)
   console.log(categoryFilteredByCategory)
    const productFilteredByCategory = products.filter(item=> categoryFilteredByCategory.findIndex(c=>item.category===c.id)>-1)

    // eslint-disable-next-line react-hooks/rules-of-hooks

    return (
        <MainLayout>
            <div className={"pt-[90px] container mx-auto"}>
                <h1 className={"font-bold text-[48px] mb-6"}>
                    {type.name}
                </h1>
                <div className={"grid grid-cols-4 gap-2"}>
                    {productFilteredByCategory.map((item, i) => <ProductCard item={item} key={i}/>)}
                </div>
            </div>
        </MainLayout>
    )
}