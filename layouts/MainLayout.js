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
    Bars3Icon, ChevronLeftIcon, HeartIcon,
    MagnifyingGlassIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon, TrashIcon, UserCircleIcon, UserIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import Link from "next/link";
import {useRouter} from "next/router";
import {categories, products, topCategory, types} from "@/data/Datas";
import Image from 'next/legacy/image'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
    categories: [
        {
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
                    imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
                },
                {
                    name: 'Carry',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
                    imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
                },
            ],
        },
        {
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
                    imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
                    imageAlt: 'Model wearing light heather gray t-shirt.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
                    imageAlt:
                        'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
                },
                {
                    name: 'Carry',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
                    imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
                },
            ],
        },
    ],
    pages: [
        {name: 'Company', href: '#'},
        {name: 'Stores', href: '#'},
    ],
}


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ProductCard({item}) {
    const router = useRouter()
    const removeItem = () => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || []
        const index = favorites.indexOf(item.id);
        if (index > -1) { // only splice array when item is found
            favorites.splice(index, 1); // 2nd parameter means remove one item only
        }
        localStorage.setItem("favorites", JSON.stringify(favorites))
        router.reload()
    }
    return (
        <li className={"border-b py-2 pr-4 pl-6 flex items-start border-black border-opacity-10"}>
            <div className={" h-[100px] relative w-[80px]"}>
                <Image className={"rounded-[12px]"} layout={"fill"} objectFit={"cover"} height={"1920"} width={"1080"}
                       src={`/products/${item.thumbnail}`}/>
            </div>
            <div className={"flex-1 mr-4"}>
                <h2 className={"w-full text-start truncate font-bold text-2xl"}>
                    {item.name}
                </h2>
                <h2 className={"w-full mb-4 text-start truncate text-zinc-800 text-base"}>
                    {item.description}
                </h2>

                <div className={"flex text-xl font-bold justify-end items-center"}>
                    <div onClick={removeItem} className={"flex-1"}>
                        <button
                            className={"h-10 w-10 text-black text-opacity-[70%] rounded-full flex items-center justify-center hover:bg-black hover:bg-opacity-[8%]"}
                        >
                            <TrashIcon className={"h-6 w-6"}/>
                        </button>
                    </div>
                    {!item.priceNew ? <span className={`${item.priceNew ? "text-red-400 " : "text-green-600"}`}>
                    {item.price * 1000}
                        </span> : <del className={`${item.priceNew ? "text-red-400 ml-2" : "text-green-600"}`}>
                        {item.price * 1000}
                    </del>}
                    {item.priceNew && <span className={`text-green-600`}>
                    {item.priceNew * 1000}
                        </span>}
                </div>
            </div>

        </li>
    )
}
function ProductCardSuggest({item}) {
    const router = useRouter()
    const removeItem = () => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || []
        const index = favorites.indexOf(item.id);
        if (index > -1) { // only splice array when item is found
            favorites.splice(index, 1); // 2nd parameter means remove one item only
        }
        localStorage.setItem("favorites", JSON.stringify(favorites))
        router.reload()
    }
    return (
        <li className={"bg-white rounded-xl py-2 pr-4 pl-6 flex items-start border-black border-opacity-10"}>
            <div className={" h-[100px] relative w-[80px]"}>
                <Image className={"rounded-[12px]"} layout={"fill"} objectFit={"cover"} height={"1920"} width={"1080"}
                       src={`/products/${item.thumbnail}`}/>
            </div>
            <div className={"flex-1 mr-4"}>
                <h2 className={"w-full text-start truncate font-bold text-2xl"}>
                    {item.name}
                </h2>
                <h2 className={"w-full mb-4 text-start truncate text-zinc-800 text-base"}>
                    {item.description}
                </h2>

                <div className={"flex text-xl font-bold justify-end items-center"}>
                    {!item.priceNew ? <span className={`${item.priceNew ? "text-red-400 " : "text-green-600"}`}>
                    {item.price * 1000}
                        </span> : <del className={`${item.priceNew ? "text-red-400 ml-2" : "text-green-600"}`}>
                        {item.price * 1000}
                    </del>}
                    {item.priceNew && <span className={`text-green-600`}>
                    {item.priceNew * 1000}
                        </span>}
                </div>
            </div>

        </li>
    )
}
export default function MainLayout({children}) {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const [favorite, setFavorite] = useState([])
    const [isFavoriteDialogOpen, setIsFavoriteDialogOpen] = useState(false)
    const [isOpenProductMenu, setIsOpenProductMenu] = useState(false)
    const [suggest, setSuggest] = useState([])
    useEffect(() => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || []
        setFavorite(favorites)
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
    const menu = [
        {
            name: "صفحه اصلی",
            link: "/"
        },
        {
            name: "محصولات",
            link: "p"
        },
        {
            name: "لیست محصولات",
            link: "/all-products"
        },
        {
            name: "درباره ما",
            link: "#"
        },
        {
            name: "تماس با ما",
            link: "#"
        }
    ]

    return (
        <div>
            {suggest.length > 0 && <div className={"fixed bottom-4 z-[222] left-1/2 transform -translate-x-1/2 rounded-2xl container bg-blue-50 shadow-2xl mx-auto py-4 px-6"}>
                <h2 className={"text-2xl font-black"}>
                    پیشنهاد ما
                </h2>
                <div className={"grid pb-[28px] grid-cols-4 gap-2 mt-6"}>
                    {
                        suggest.map((item, i) => <ProductCardSuggest key={i} item={item}/>)
                    }
                </div>
            </div>}
            {isOpenProductMenu&&<div onClick={()=>setIsOpenProductMenu(false)} className={"fixed z-[889] inset-0 bg-black bg-opacity-80"}/>}
            {isOpenProductMenu&&<div className={"fixed top-[56px]   w-full h-fit bg-white z-[889]"}>
                <div className={"grid grid-cols-3 gap-4 container mx-auto py-6"}>
                    {types.map((type, i) => <div key={i}>
                        <h2>
                            <a className={"font-bold py-3 flex text-xl hover:underline"}
                                  href={`/products/${type.id}`}>
                                {type.name}
                            </a>
                        </h2>

                        {topCategory.filter(tpc => tpc.typeId === type.id).map((tpc, i) =>
                            <>
                                <h3 key={i}>
                                    <a
                                        className={"font-medium py-2 group flex items-center hover:underline text-base text-black"}
                                        href={`/products/${type.id}/${tpc.id}`}>
                                        {tpc.name}
                                        <ChevronLeftIcon className={"group-hover:block hidden w-3 h-3 mr-1"}/>
                                    </a>
                                </h3>
                                <ul>
                                    {categories.filter(c => c.topCategoryId === tpc.id).map((c, i) =>
                                        <li key={i}>
                                            <a className={"text-zinc-700 mb-1 hover:underline"}
                                                  href={`/products/${type.id}/${tpc.id}/${c.id}`}>
                                                {c.name}
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </>
                        )}

                    </div>)}
                </div>
            </div>}
            <div
                className="border-b border-black border-opacity-[12%] fixed top-0 w-full h-[64px] flex items-center bg-white bg-opacity-90 backdrop-filter backdrop-blur-xl z-999">
                <div className={"items-center flex container mx-auto"}>
                    <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=black"
                        alt=""
                    />
                    <ul className={"flex items-center mr-6 flex-1"}>

                        {menu.map((item, i) =>
                            item.link === "p" ? <li key={i} onClick={() => setIsOpenProductMenu(!isOpenProductMenu)}
                                                    className={`px-4 text-sm ${isOpenProductMenu ? "text-blue-700 font-medium" : "text-zinc-600"}`}>

                                    لیست محصولات

                                </li> :
                                <li key={i}>
                                    <Link href={item.link}
                                          className={`px-4 text-sm ${router.pathname === item.link ? "text-black font-medium" : "text-zinc-600"}`}>
                                        {item.name}
                                    </Link>
                                </li>
                        )}
                    </ul>
                    <div className={"relative"}>
                        {isFavoriteDialogOpen && <div
                            className={"absolute overflow-hidden left-[8px] rounded-xl top-[52px] w-[400px] h-[400px] bg-white shadow-2xl"}>
                            <ul className={"py-2 h-[400px] overflow-scroll"}>
                                {favorite.map((fl, i) =>
                                    <ProductCard key={i} item={products.find(p => p.id === fl)}/>
                                )}
                            </ul>
                        </div>}
                        <div className={"flex items-center relative"}>

                            <button onClick={() => setIsFavoriteDialogOpen(!isFavoriteDialogOpen)}
                                    className={"h-10 relative ml-2 w-10 text-black text-opacity-[70%] rounded-full flex items-center justify-center hover:bg-black hover:bg-opacity-[8%]"}
                                    href={"/cart"}>

                                <HeartIcon className={"h-6 w-6"}/>

                            </button>
                            <Link
                                className={"h-10 w-10 text-black text-opacity-[70%] rounded-full flex items-center justify-center hover:bg-black hover:bg-opacity-[8%]"}
                                href={"/cart"}>
                                <ShoppingBagIcon className={"h-6 w-6"}/>
                            </Link>
                            <Link
                                className={"h-10 mr-2 w-10 text-black text-opacity-[70%] rounded-full flex items-center justify-center hover:bg-black hover:bg-opacity-[8%]"}
                                href={"/cart"}>
                                <UserCircleIcon className={"h-6 w-6"}/>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            {children}
        </div>
    )
}
