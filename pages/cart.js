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
    Bars3Icon, FaceFrownIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon, TrashIcon,
    XMarkIcon as XMarkIconOutline,
} from '@heroicons/react/24/outline'
import {CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini} from '@heroicons/react/20/solid'
import MainLayout from "@/layouts/MainLayout";
import {products, sizes} from "@/data/Datas";
import Image from "next/legacy/image";
import {useRouter} from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function CartProductCard({product, size, quantity}) {
    const router = useRouter()
    const formatter = new Intl.NumberFormat('fa-IR', {
        style: 'currency',
        currency: 'IRR',

        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    const removeFromCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        const index = cart.findIndex(item => item.pId = product.id)
        if (index > -1) { // only splice array when item is found
            cart.splice(index, 1); // 2nd parameter means remove one item only
        }
        localStorage.setItem("cart", JSON.stringify(cart))
        router.reload()
    }
    return (
        <li className="flex py-6 sm:py-10">
            <div className=" rounded-2xl flex-shrink-0 w-2/12">
                <Image objectFit={"contain"} height={1920} width={1520} layout={"responsive"}
                       src={`/products/${product.thumbnail}`}/>
            </div>
            <div className={"px-6 flex-1"}>
                <div>
                    <h3 className="text-xl font-bold">

                        {product.name}

                    </h3>
                    <p className={"text-zinc-800 pt-4 text-start"}>
                        {product.description}
                    </p>
                    <div className={"flex items-center space-x-reverse space-x-1"}>
                        <p className={"text-zinc-800 pt-2 text-start"}>
                            تعداد :
                            <span className={"px-2 font-medium"}>
                        {quantity}
                        </span>
                        </p>
                        <p>
                            ،
                        </p>
                        <p className={"text-zinc-800 pt-1 text-start"}>
                            سایز :
                            <span className={"px-2 font-medium"}>
                        {size.name}
                            </span>
                        </p>
                    </div>

                    <div className={" mt-6 flex text-lg font-bold justify-start items-center"}>
                        {!product.priceNew ?
                            <span className={`${product.priceNew ? "text-red-400 " : "text-green-600"}`}>
                                        {formatter.format((product.price * 10000).toString())}
                        </span> : <del className={`${product.priceNew ? "text-red-400 ml-2" : "text-green-600"}`}>
                                {formatter.format((product.price * 10000).toString())}
                            </del>}
                        {product.priceNew && <span className={`text-green-600`}>
                    {formatter.format((product.priceNew * 10000).toString())}
                        </span>}
                    </div>
                    {/*<p className="mt-6 text-lg font-medium text-green-600">{product.price * 1000}</p>*/}
                    <div onClick={() => removeFromCart(product)} className={"flex items-center justify-end"}>
                        <button
                            className={"h-10 mt-2 w-10 text-black text-opacity-[70%] rounded-full flex items-center justify-center hover:bg-black hover:bg-opacity-[8%]"}
                        >
                            <TrashIcon className={"h-6 w-6"}/>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default function Example() {
    const [open, setOpen] = useState(false)
    const [cart, setCart] = useState([])
    const [lastPrice, setLastPrice] = useState(null)
    const [priceWithoutDs, setPriceWithoutDs] = useState(null)
    useEffect(() => {
        if (localStorage.getItem("cart")) {
            setCart(JSON.parse(localStorage.getItem("cart")))
        }


    }, [])
    useEffect(() => {
        if (localStorage.getItem("cart")) {

            let lp = 0
            let ds = 0
            products.filter(p => cart.findIndex(c => c.pId === p.id) >= 0).map((item) => {
                console.log(item)
                lp += item.priceNew ? item.priceNew : item.price
                ds += item.price

            })
            setPriceWithoutDs(ds * 10000)
            console.log(lp)
            setLastPrice(lp * 10000)
        }
    }, [cart])

    const formatter = new Intl.NumberFormat('fa-IR', {
        style: 'currency',
        currency: 'IRR',

        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    return (
        <MainLayout className="bg-white">


            <main className="container mx-auto pt-24">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">سبد خرید</h1>

                <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>

                        {cart.length>0?<ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                            {cart.map((product, productIdx) => (
                                <CartProductCard size={sizes.find(item => item.id === product.sId)} quantity={product.q}
                                                 product={products.find(item => item.id === product.pId)}
                                                 key={productIdx}/>
                            ))}
                        </ul>:<div className={"bg-zinc-100 h-[400px] items-center rounded-2xl flex justify-center"}>
                            <div className={"text-zinc-500 font-medium text-xl"}>
                            <FaceFrownIcon className={"w-20 mx-auto h-20 mb-4 opacity-60"}/>
                                متاسفانه محصولی در سبد خرید شما موجود نیست.
                            </div>
                        </div>}
                    </section>

                    {/* Order summary */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 rounded-xl bg-white border-black border-opacity-10 shadow px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                    >
                        <div
                            className={"flex py-2 border-b border-black border-opacity-10 items-center justify-between"}>
                            <h2 id="summary-heading" className="text-sm  text-gray-700">
                                قیمت بدون تخفیف
                            </h2>
                            <p className={"font-medium text-base text-left text-black"}>
                                {/*{new Intl.NumberFormat(lastPrice,{style: 'currency',*/}
                                {/*    currency: 'USD',*/}
                                {/*    minimumFractionDigits: 3,})}*/}
                                {priceWithoutDs && formatter.format(priceWithoutDs.toString())}
                            </p>
                        </div>
                        <div
                            className={"flex py-2 border-b border-black border-opacity-10 items-center justify-between"}>

                            <h2 id="summary-heading" className="text-sm  text-gray-700">
                                میزان تخفیف
                            </h2>
                            <p className={"font-medium text-red-600 text-base text-left text-black"}>
                                {/*{new Intl.NumberFormat(lastPrice,{style: 'currency',*/}
                                {/*    currency: 'USD',*/}
                                {/*    minimumFractionDigits: 3,})}*/}
                                %
                                {lastPrice && priceWithoutDs && ((priceWithoutDs - lastPrice) / priceWithoutDs * 100).toFixed(0)}
                            </p>
                        </div>
                        <div
                            className={"flex py-4 items-center justify-between"}>

                            <h2 id="summary-heading" className=" font-medium text-gray-900">
                                قیمت نهایی
                            </h2>
                            <p className={"font-bold text-lg text-left text-green-600"}>
                                {/*{new Intl.NumberFormat(lastPrice,{style: 'currency',*/}
                                {/*    currency: 'USD',*/}
                                {/*    minimumFractionDigits: 3,})}*/}
                                {lastPrice && formatter.format(lastPrice.toString())}
                            </p>
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full rounded-md border border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                ثبت و خرید
                            </button>
                        </div>
                    </section>
                </form>


            </main>

        </MainLayout>
    )
}
