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
import {Bars3Icon, ChevronLeftIcon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon} from '@heroicons/react/24/outline'
import MainLayout from "@/layouts/MainLayout";
import Image from "next/legacy/image";
import {categories, products, topCategory, types} from "@/data/Datas";
import ProductCard from "@/components/ProductCard";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import Link from "next/link";


export default function Example() {
    const [open, setOpen] = useState(false)
    const [suggest, setSuggest] = useState([])
    const [tab, setTab] = useState(1)
    const [selectedTabProduct, setSelectedTabProduct] = useState([])
    const [openQuantityDialog, setOpenQuantityDialog] = useState(false)
    const [quantityProducts, setQuantityProducts] = useState([])
    useEffect(() => {
        if (localStorage.getItem("cart")) {
            const cart = JSON.parse(localStorage.getItem("cart"))
            const productsInCart = products.filter(item => cart.findIndex(c => c.pId === item.id) >= 0)
            const productsHaveTwoQuantity = productsInCart.filter(item => item.quantity <= 20)
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
                                از محصولات زیر تعداد کمی باقی مانده جهت تکمیل سفارش به صفحه محصولات مراجعه کنید.
                            </p>
                        </div>
                        <div>
                            <button onClick={() => setOpenQuantityDialog(false)}
                                    className={"h-10 w-10 flex rounded-full items-center justify-center hover:bg-black hover:bg-opacity-4"}>
                                <CloseIcon className={"w-6 h-6"}/>
                            </button>
                        </div>
                    </div>

                    <div className={"h-[calc(100%_-_92px_-_56px)] overflow-scroll"}>
                        {quantityProducts.map((item, i) =>
                            <div className={"flex px-4 items-center"} key={i}>
                                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                <Image objectFit={"cover"} height={"100"} width={"70"} leyout={"responsive"}
                                       src={`/products/${item.thumbnail}`}/>
                                <div className={"mr-4"}>
                                    <h3 className={"font-bold "}>
                                        {item.name}
                                    </h3>
                                    <p className={"text-zinc-700 "}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={"bg-white  px-2 py-2"}>
                        <Link href={"/cart"} className={"bg-black flex justify-center items-center w-full py-2 h-10 text-sm rounded-xl text-white"}>
                            مشاهده سبد خرید
                            <ChevronLeftIcon className={"w-4 h-4 mr-2"}/>
                        </Link>
                    </div>

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
                            <div
                                className={" sticky  z-999 top-[56px] bg-zinc-50"}>
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
                            <div className={"container mx-auto"}>

                                <div className={"grid pb-[28px] grid-cols-4 gap-2 mt-6"}>
                                    {
                                        selectedTabProduct.map((item, i) => i < 8 && <ProductCard key={i} item={item}/>)
                                    }
                                </div>
                            </div>
                        </div>
                        {suggest.length > 0 && <div className={"container mx-auto mt-[64px]"}>
                            <h2 className={"text-2xl font-black"}>
                                پیشنهاد ما
                            </h2>
                            <div className={"grid pb-[28px] grid-cols-4 gap-2 mt-6"}>
                                {
                                    suggest.map((item, i) => <ProductCard key={i} item={item}/>)
                                }
                            </div>
                        </div>}
                    </div>
                </div>
            </MainLayout>
        </>
    )
}
