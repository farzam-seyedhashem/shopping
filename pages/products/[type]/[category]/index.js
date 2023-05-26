import MainLayout from "@/layouts/MainLayout";
import ProductCard from "@/components/ProductCard";
import {products,topCategory,categories} from "@/data/Datas";

export async function getServerSideProps(context) {
    return {
        props: {
            // siteSettingRes,
            topCategoryId:context.params.category,
        }, // will be passed to the page component as props
    }
}
export default function productsAllPage({topCategoryId}){
    const categoryFilteredByCategory = categories.filter(item=> item.topCategoryId === topCategoryId)
    const productFilteredByCategory = products.filter(item=> categoryFilteredByCategory.findIndex(c=>item.category===c))
    return(
        <MainLayout>
            <div className={"pt-[90px] container mx-auto"}>
                <h1 className={"font-bold text-[48px] mb-6"}>
                    لیست محصولات
                </h1>
                <div className={"grid grid-cols-4 gap-2"}>
                    {productFilteredByCategory.map((item,i)=><ProductCard item={item} key={i}/>)}
                </div>
            </div>
        </MainLayout>
    )
}