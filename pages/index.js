/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import {Fragment, useEffect, useState} from 'react'
import {Dialog, Popover, Tab, Transition} from '@headlessui/react'
import {
    Bars3Icon,
    ChevronLeftIcon, HeartIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    ShoppingCartIcon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import MainLayout from "@/layouts/MainLayout";
import Image from "next/legacy/image";
import {categories, products, sizes, topCategory, types} from "@/data/Datas";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import Link from "next/link";
import {useRouter} from "next/router";
import {StarIcon} from "@heroicons/react/20/solid";
import {HeartIcon as HeartIconSolid} from "@heroicons/react/24/solid";

function ProductCard({item, withoutItems}) {
    const [favorite, setFavorite] = useState([])
    const [cart, setCart] = useState([])
    const router = useRouter()
    const [isAddToCartOpen, setIsAddToCartOpen] = useState(false)
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const formatter = new Intl.NumberFormat('fa-IR', {
        style: 'currency', currency: 'IRR',

        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    useEffect(() => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || []
        setFavorite(favorites)
        let cart = JSON.parse(localStorage.getItem("cart")) || []
        setCart(cart)
        setSelectedSize(item.sizesId[0])
    }, [])
    var filtered = sizes.filter(function (e) {
        return this.indexOf(e.id) < 0;
    }, item.sizesId);
    const addToCart = (id) => {
        let cartProducts = cart
        cartProducts.push({pId: id, sId: selectedSize, q: selectedQuantity})
        setCart([...cart, id])
        localStorage.setItem("cart", JSON.stringify(cartProducts))
        router.reload()
    }
    const addToFavorite = (id) => {
        let favorites = favorite
        if (favorites.indexOf(id) >= 0) {
            const index = favorites.indexOf(id);
            if (index > -1) { // only splice array when item is found
                favorites.splice(index, 1); // 2nd parameter means remove one item only
            }
            setFavorite(favorites)
            localStorage.setItem("favorites", JSON.stringify(favorites))
            router.reload()
        } else {

            favorites.push(id)
            setFavorite([...favorite, id])
            localStorage.setItem("favorites", JSON.stringify(favorites))
            router.reload()
        }
    }


    return (<>
        {/*{isAddToCartOpen && <div className={"fixed z-[1001] inset-0"}>*/}
        {/*    <div onClick={() => setIsAddToCartOpen(false)}*/}
        {/*         className={"fixed z-[1001] w-full h-full top-0 left-0 bg-black bg-opacity-80 backdrop-filter backdrop-blur "}/>*/}
        {/*    <div*/}
        {/*        className={"fixed z-[1001] rounded-2xl top-1/2 left-1/2 bg-white w-6/12 h-4/6 transform -translate-y-1/2 -translate-x-1/2 "}>*/}
        {/*        */}
        {/*        <div className={"flex space-x-8 px-[24px] py-4 space-x-reverse items-center"}>*/}
        {/*            <div className={"w-5/12  bg-black rounded-[24px] h-4/6"}>*/}
        {/*                <Image objectFit={"contain"} height={1920} width={1080} layout={"responsive"}*/}
        {/*                       src={`/products/${item.thumbnail}`}/>*/}

        {/*            </div>*/}

        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>}*/}

        <div className={"border relative flex items-center border-black rounded-[24px]"}>
            <div className={"w-3/12"}>
                <Image className={"rounded-[24px]"} height={100} width={80} objectFit={"cover"} layout={"responsive"}
                       src={`/products/${item.thumbnail}`}/>
            </div>
            {!withoutItems && <div
                className={"absolute items-center py-1 pl-6 pr-4 rounded-full flex top-4 right-4 bg-zinc-200 "}>
                <StarIcon className={"w-5 h-5 ml-2 text-yellow-400"}/>
                {item.rate}
            </div>}
            {isAddToCartOpen&&<div className={"py-4 px-4 absolute top-2 left-2"}>
                <button onClick={() => setIsAddToCartOpen(false)}
                        className={"h-10 w-10 flex rounded-full items-center justify-center hover:bg-black hover:bg-opacity-4"}>
                    <CloseIcon className={"w-6 h-6"}/>
                </button>
            </div>}
            {isAddToCartOpen?  <div className={"py-4 px-4"}>
                {/*<h2 className={"text-3xl font-bold"}>*/}
                {/*    {item.name}*/}
                {/*</h2>*/}
                {/*<p className={"text-zinc-800 mt-1 mb-4"}>*/}
                {/*    {item.description}*/}
                {/*</p>*/}
                <div className={"mb-4"}>
                    <div className={"block font-medium mb-4 px-2"}>
                        انتخاب سایز :
                    </div>
                    {item.sizesId.map((is, i) => <div onClick={() => setSelectedSize(is)}
                                                      className={`${selectedSize === is ? "bg-black text-white" : ""} rounded-lg mb-2 text-sm px-6 ml-2 py-1 inline-flex border border-black`}
                                                      key={i}>
                        {sizes.find(s => s.id === is).name}
                    </div>)}
                </div>
                {!withoutItems && <div className={"mb-4"}>
                    <div className={"block font-medium mb-4 px-2"}>
                        انتخاب تعداد :
                    </div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((q, i) => q < item.quantity &&
                        <div onClick={() => setSelectedQuantity(q)}
                             className={`${selectedQuantity === q ? "bg-black text-white" : ""} mb-2 rounded-lg text-sm px-6 ml-2 py-1 inline-flex border border-black`}
                             key={i}>
                            {q}
                        </div>)}
                </div>}
                <div className={"mb-6 flex text-xl font-bold justify-start items-center"}>
                    {withoutItems ? <span className={`"text-green-600`}>
                                        {formatter.format((item.price * 10000).toString())}
                        </span> : !item.priceNew ?
                        <span className={`${item.priceNew ? "text-red-400 " : "text-green-600"}`}>
                                        {formatter.format((item.price * 10000).toString())}
                        </span> : <del className={`${item.priceNew ? "text-red-400 ml-2" : "text-green-600"}`}>
                            {formatter.format((item.price * 10000).toString())}
                        </del>}
                    {item.priceNew && <span className={`text-green-600`}>
                    {formatter.format((item.priceNew * 10000).toString())}
                        </span>}
                </div>
                <button onClick={() => addToCart(item.id)}
                        className={"bg-black flex items-center text-sm text-white px-6 h-10 rounded-full"}>
                    <ShoppingCartIcon className={"ml-2"} height={24} width={24}/>
                    افزودن به سبد خرید
                </button>
            </div>:<div className={"py-4 px-4"}>
                <h2 className={"text-[24px] "}>
                    {item.name}
                </h2>
                <p className={"text-base pt-2 pb-1"}>
                    {item.description}
                </p>
                {!withoutItems && <p className={"text-base pb-2"}>
                    تعداد باقی مانده :
                    {item.quantity}
                </p>}
                <div className={"mt-3 pb-6"}>
                    <div className={"inline-flex ml-2"}>
                        سایز های موجود :
                    </div>
                    {item.sizesId.map((is, i) => <div
                        className={"rounded-lg text-sm px-6 ml-2 py-1 inline-flex border border-black"}
                        key={i}>
                        {sizes.find(s => s.id === is).name}
                    </div>)}
                </div>
                {withoutItems ? <div className={"flex text-xl font-bold justify-end items-center"}><span
                    className={`text-green-600`}>
                            {formatter.format((item.price * 10000).toString())}
                        </span></div> : <div className={"flex text-xl font-bold justify-end items-center"}>
                    {!item.priceNew ? <span className={`${item.priceNew ? "text-red-400 " : "text-green-600"}`}>
                            {formatter.format((item.price * 10000).toString())}
                        </span> : <del className={`${item.priceNew ? "text-red-400 ml-2" : "text-green-600"}`}>
                        {formatter.format((item.price * 10000).toString())}
                    </del>}
                    {item.priceNew && <span className={`text-green-600`}>
                   {formatter.format((item.priceNew * 10000).toString())}
                        </span>}
                </div>}
                <div className={"flex items-center pt-6 pb-2 "}>
                    <button onClick={() => setIsAddToCartOpen(true)}
                            className={"bg-black flex items-center text-sm text-white px-6 h-10 rounded-full"}>
                        <ShoppingCartIcon height={24} width={24}/>
                    </button>
                </div>
            </div>}

        </div>
    </>)
}

export default function Example() {
    const [open, setOpen] = useState(false)
    const [suggest, setSuggest] = useState([])
    const [tab, setTab] = useState(1)
    const [selectedTabProduct, setSelectedTabProduct] = useState([])
    const [openQuantityDialog, setOpenQuantityDialog] = useState(false)
    const [quantityProducts, setQuantityProducts] = useState([])
    useEffect(() => {
        if (localStorage.getItem("favorites")) {
            const cart = JSON.parse(localStorage.getItem("favorites"))
            const productsInCart = products.filter(item => cart.findIndex(c => c === item.id) >= 0)
            const productsHaveTwoQuantity = productsInCart.filter(item => item.quantity <= 2)
            if (productsHaveTwoQuantity.length > 0) {
                setOpenQuantityDialog(true)
                setQuantityProducts(productsHaveTwoQuantity)
                console.log("elkngwkle", productsHaveTwoQuantity)
            }
        }
        if (localStorage.getItem("favorites")) {
            const favorites = JSON.parse(localStorage.getItem("favorites"))
            let favoritesProduct = []
            let suggestProduct = []
            products.filter(item => favorites.indexOf(item.id) >= 0).map(item => {
                favoritesProduct.push(item)
            })
            favoritesProduct.map(item =>
                products.filter(p => p.category === item.category).map(ps =>
                    suggestProduct.push(ps)
                )
            )
            let suggestProductUnique = suggestProduct.filter((element, index) => {
                return suggestProduct.indexOf(element) === index;
            });

            setSuggest(suggestProductUnique)
        }
    }, [])
    useEffect(() => {
        const topCategoryF = topCategory.filter(item => item.typeId === tab)
        console.log(topCategoryF)
        const categoryF = categories.filter(item => topCategoryF.findIndex(t => t.id === item.topCategoryId) > -1)
        console.log(categoryF)
        const productF = products.filter(item => categoryF.findIndex(t => t.id === item.category) > -1)
        setSelectedTabProduct(productF)
    }, [tab])
    return (
        <>
            {openQuantityDialog && <>
                {openQuantityDialog && <div className={"fixed inset-0 z-[1001] bg-black bg-opacity-80"}/>}
                {openQuantityDialog && <div
                    className={"fixed top-1/2 overflow-hidden z-[1001] transform -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white w-5/12 h-[480px] rounded-xl"}>
                    <div className={"flex py-4 px-4 justify-between"}>
                        <div className={""}>
                            <h2 className={"text-2xl font-bold"}>
                                در حال اتمام
                            </h2>
                            <p className={"text-base pt-1 text-zinc-800"}>
                                از محصولات زیر که به علاقه مندی خود اضافه کردید تعداد کمی موجود است جهت سفارش فورا اقدام
                                کنید
                            </p>
                        </div>
                        <div>
                            <button onClick={() => setOpenQuantityDialog(false)}
                                    className={"h-10 w-10 flex rounded-full items-center justify-center hover:bg-black hover:bg-opacity-4"}>
                                <CloseIcon className={"w-6 h-6"}/>
                            </button>
                        </div>
                    </div>

                    <div className={"h-[calc(100%_-_92px)] overflow-scroll"}>
                        <div className={"grid grid-cols-1 gap-4 px-6"}>
                            {quantityProducts.map((item, i) =>
                                    <ProductCard key={i} item={item}/>
                                // <div className={"flex px-4 items-center"} key={i}>
                                //
                                //     {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                //     <Image objectFit={"cover"} height={"100"} width={"70"} leyout={"responsive"}
                                //            src={`/products/${item.thumbnail}`}/>
                                //     <div className={"mr-4"}>
                                //         <h3 className={"font-bold "}>
                                //             {item.name}
                                //         </h3>
                                //         <p className={"text-zinc-700 "}>
                                //             {item.description}
                                //         </p>
                                //     </div>
                                // </div>
                            )}
                        </div>
                    </div>
                    {/*<div className={"bg-white  px-2 py-2"}>*/}
                    {/*    <Link href={"/cart"} className={"bg-black flex justify-center items-center w-full py-2 h-10 text-sm rounded-xl text-white"}>*/}
                    {/*        ماشاهده همه مح*/}
                    {/*        <ChevronLeftIcon className={"w-4 h-4 mr-2"}/>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}

                </div>}
            </>}
            <MainLayout>

                <div className="bg-white pt-[64px]">
                    {/* Mobile menu */}
                    <div className={""}>
                        <div className={"container mx-auto flex pt-8 space-x-4 space-x-reverse items-center"}>
                            <div className={" w-8/12 h-[564px] relative rounded-[28px]"}>
                                <Image layout={"fill"} className={"rounded-[28px]"} objectFit={"cover"}
                                       src={"/bg-1.jpg"}/>
                            </div>
                            <div className={" w-4/12 h-[564px]  relative rounded-[28px]"}>
                                <Image layout={"fill"} className={"rounded-[28px]"} objectFit={"cover"}
                                       src={"/bg-2.jpg"}/>
                            </div>
                        </div>
                        <div className={"mt-[64px] py-24 bg-zinc-50"}>
                            <div className={"grid grid-cols-3 gap-4 container mx-auto"}>
                                {types.map((item, i) =>
                                    <a href={`/products/${item.id}`} className={"col-span-1"} key={i}>
                                        <div>
                                            {i === 0 && <Image height={1080} width={1080} layout={"responsive"}
                                                               src={"/bg-3.jpg"}/>}
                                            {i === 1 && <Image height={1080} width={1080} layout={"responsive"}
                                                               src={"/bg-4.jpg"}/>}
                                            {i === 2 && <Image height={1080} width={1080} layout={"responsive"}
                                                               src={"/bg-5.jpg"}/>}
                                        </div>
                                    </a>
                                )}
                            </div>
                            {/*<div*/}
                            {/*    className={" sticky  z-[888] top-[56px] bg-zinc-50"}>*/}
                            {/*    <div className={"container mx-auto border-b  border-zinc-400 flex items-center"}>*/}
                            {/*        {types.map((item, i) =>*/}
                            {/*            <div onClick={() => setTab(item.id)} key={i}*/}
                            {/*                 className={"flex justify-center hover:bg-black hover:bg-opacity-4 w-1/12 text-center "}>*/}
                            {/*                <div className={"w-fit flex items-center relative h-[48px]"}>*/}
                            {/*                    {item.name}*/}
                            {/*                    {item.id === tab && <div*/}
                            {/*                        className={"absolute bottom-0 w-full bg-black h-[3px] rounded-t-[3px]"}/>}*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        )}*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className={"container mx-auto"}>*/}

                            {/*    <div className={"grid pb-[28px] grid-cols-4 gap-2 mt-6"}>*/}
                            {/*        {*/}
                            {/*            selectedTabProduct.map((item, i) => i < 8 && <ProductCard key={i} item={item}/>)*/}
                            {/*        }*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>

                    </div>
                </div>
            </MainLayout>
        </>
    )
}
