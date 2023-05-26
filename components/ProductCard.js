import Image from 'next/legacy/image'
import {HeartIcon, ShoppingCartIcon} from "@heroicons/react/24/outline";
import {HeartIcon as HeartIconSolid} from "@heroicons/react/24/solid";
import {sizes} from "@/data/Datas";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {StarIcon} from "@heroicons/react/20/solid";

export default function ProductCard({item, withoutItems}) {
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
        if (favorites.indexOf(id)>=0) {
            const index = favorites.indexOf(id);
            if (index > -1) { // only splice array when item is found
                favorites.splice(index, 1); // 2nd parameter means remove one item only
            }
            setFavorite(favorites)
            localStorage.setItem("favorites", JSON.stringify(favorites))
            router.reload()
        }else {

            favorites.push(id)
            setFavorite([...favorite, id])
            localStorage.setItem("favorites", JSON.stringify(favorites))
            router.reload()
        }
    }


    return (<>
        {isAddToCartOpen && <div className={"fixed z-[1001] inset-0"}>
            <div onClick={() => setIsAddToCartOpen(false)}
                 className={"fixed z-[1001] w-full h-full top-0 left-0 bg-black bg-opacity-80 backdrop-filter backdrop-blur "}/>
            <div
                className={"fixed z-[1001] rounded-2xl top-1/2 left-1/2 bg-white w-6/12 h-4/6 transform -translate-y-1/2 -translate-x-1/2 "}>
                <div className={"py-4 px-4 flex justify-end"}>
                    <button onClick={() => setIsAddToCartOpen(false)}
                            className={"h-10 w-10 flex rounded-full items-center justify-center hover:bg-black hover:bg-opacity-4"}>
                        <CloseIcon className={"w-6 h-6"}/>
                    </button>
                </div>
                <div className={"flex space-x-8 px-[24px] py-4 space-x-reverse items-center"}>
                    <div className={"w-5/12  bg-black rounded-[24px] h-4/6"}>
                        <Image objectFit={"contain"} height={1920} width={1080} layout={"responsive"}
                               src={`/products/${item.thumbnail}`}/>

                    </div>
                    <div className={"w-7/12"}>
                        <h2 className={"text-3xl font-bold"}>
                            {item.name}
                        </h2>
                        <p className={"text-zinc-800 mt-1 mb-4"}>
                            {item.description}
                        </p>
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
                    </div>
                </div>
            </div>
        </div>}

        <div className={"border relative border-black rounded-[24px]"}>

            <Image className={"rounded-[24px]"} height={382} width={312} objectFit={"cover"} layout={"responsive"}
                   src={`/products/${item.thumbnail}`}/>
            {!withoutItems && <div
                className={"absolute items-center py-1 pl-6 pr-4 rounded-full flex top-4 right-4 bg-zinc-200 "}>
                <StarIcon className={"w-5 h-5 ml-2 text-yellow-400"}/>
                {item.rate}
            </div>}
            <div className={"py-4 px-4"}>
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
                <div className={"flex items-center pt-6 pb-2 justify-end"}>
                    <button onClick={() => addToFavorite(item.id)}
                            className={"bg-red-50 hover:bg-red-100  text-black text-sm ml-2 px-6 h-10 rounded-full"}>
                        {favorite.find(f => item.id === f) ?
                            <HeartIconSolid onClick={addToFavorite} className={"text-red-600"} height={24}
                                            width={24}/> : <HeartIcon height={24} width={24}/>}

                    </button>
                    <button onClick={() => setIsAddToCartOpen(true)}
                            className={"bg-black flex items-center text-sm text-white px-6 h-10 rounded-full"}>
                        <ShoppingCartIcon className={"ml-2"} height={24} width={24}/>
                        افزودن به سبد خرید
                    </button>
                </div>
            </div>

        </div>
    </>)
}