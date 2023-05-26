export {
    types,
    topCategory,
    products,
    categories,
    sizes,
}

const products = [
    {
        id:1,
        name: "RNS",
        sizesId:[1,2,3],
        description:"تیشرت مردانه آر ان اس",
        price:450,
        priceNew:360,
        category:1,
        thumbnail:"1.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:2,
        name: "Joosti Jeans",
        sizesId:[1,2],
        description:"تیشرت مردانه جوتی جینز",
        price:490,
        priceNew:360,
        category:1,
        thumbnail:"2.jpg",
        quantity:2,
        rate:5,
    },
    {
        id:3,
        name: "Body Spinner",
        sizesId:[1],
        description:"تیشرت مردانه بادی اسپینر",
        price:590,
        category:1,
        thumbnail:"3.jpg",
        quantity:4,
        rate:3.5,
    },
    {
        id:4,
        name: "RNS",
        sizesId:[2,3],
        description:"تیشرت مردانه آر ان اس",
        price:360,
        category:1,
        thumbnail:"4.jpg",
        quantity:6,
        rate:4.5,
    },
    {
        id:5,
        name: "Adora",
        sizesId:[1,2],
        description:"شلوارک کتان مردانه ادورا",
        price:899,
        priceNew:360,
        category:2,
        thumbnail:"5.jpg",
        quantity:3,
        rate:4,
    },
    {
        id:6,
        name: "Ram One",
        sizesId:[1,2],
        description:"شلوارک کتان مردانه راموان",
        price:759,
        category:2,
        thumbnail:"6.jpg",
        quantity:2,
        rate:3,
    },
    {
        id:7,
        name: "Jeanswest",
        sizesId:[1,2],
        description:"شلوارک جین مردانه جین",
        price:1699,
        priceNew:1499,
        category:2,
        thumbnail:"7.jpg",
        quantity:5,
        rate:4,
    },
    {
        id:8,
        name: "RNS",
        sizesId:[1],
        description:"شلوارک جین مردانه آر ان",
        price:850,
        priceNew:680,
        category:2,
        thumbnail:"8.jpg",
        quantity:8,
        rate:2.5,
    },
    {
        id:9,
        name: "JootiJeans",
        sizesId:[5,6],
        description:"کفش مردانه جوتی جینز",
        price:1999,
        category:3,
        thumbnail:"9.jpg",
        quantity:10,
        rate:4.5,
    },
    {
        id:10,
        name: "JootiJeans",
        sizesId:[7,8],
        description:"کفش مردانه جوتی جینز",
        price:2500,
        category:3,
        thumbnail:"10.jpg",
        quantity:8,
        rate:4,
    },
    {
        id:11,
        name: "JootiJeans",
        sizesId:[8,6],
        description:"کفش مردانه جوتی جینز",
        price:2999,
        priceNew:2500,
        category:3,
        thumbnail:"11.jpg",
        quantity:3,
        rate:3.5,
    },
    {
        id:12,
        name: "Maral Leather",
        sizesId:[5,7],
        description:"کفش مردانه چرم طبیعی",
        price:3570,
        priceNew:2500,
        category:3,
        thumbnail:"12.jpg",
        quantity:2,
        rate:4.5,
    },
    {
        id:13,
        name: "Lord",
        sizesId:[5,7],
        description:"کفش کالج مردانه چرم طبیعی",
        price:2499,
        priceNew:1250,
        category:4,
        thumbnail:"13.jpg",
        quantity:4,
        rate:3,
    },
    {
        id:14,
        name: "Shifer",
        sizesId:[5,7],
        description:"کفش مردانه چرمی مردانه شیفر",
        price:1999,
        category:4,
        thumbnail:"14.jpg",
        quantity:2,
        rate:5,
    },
    {
        id:15,
        name: "Shifer",
        sizesId:[5,7],
        description:"کفش مردانه چرمی مردانه شیفر",
        price:1197,
        category:4,
        thumbnail:"15.jpg",
        quantity:10,
        rate:4,
    },
    {
        id:16,
        name: "Shifer",
        sizesId:[5,7],
        description:"کفش مردانه چرمی مردانه شیفر",
        price:1995,
        category:4,
        thumbnail:"16.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:17,
        name: "Shifer",
        sizesId:[5,7],
        description:"کیف پاسپورتی چرم طبیعی",
        price:885,
        category:5,
        thumbnail:"17.jpg",
        quantity:3,
        rate:4,
    },
    {
        id:18,
        name: "Shifer",
        sizesId:[5,7],
        description:"کیف گردنی چرم طبیع",
        price:2145,
        category:5,
        thumbnail:"18.jpg",
        quantity:12,
        rate:3,
    },
    {
        id:19,
        name: "Mante",
        sizesId:[5,7],
        description:"کیف مدارک چرم طبیعی",
        price:899,
        category:5,
        thumbnail:"19.jpg",
        quantity:10,
        rate:5,
    },
    {
        id:20,
        name: "Maral Leather",
        sizesId:[5,7],
        description:"کیف پاسپورتی مردانه چرم",
        priceNew:1752,
        price:2190,
        category:5,
        thumbnail:"20.jpg",
        quantity:3,
        rate:3,
    },
    {
        id:21,
        name: "Seiko",
        sizesId:[10,11],
        description:"ساعت مچی مردانه سیکو",
        price:24000,
        category:6,
        thumbnail:"21.jpg",
        quantity:16,
        rate:2,
    },
    {
        id:22,
        name: "Seiko",
        sizesId:[11],
        description:"ساعت مچی مردانه سیکو",
        price:23000,
        category:6,
        thumbnail:"22.jpg",
        quantity:20,
        rate:1,
    },
    {
        id:23,
        name: "Seiko",
        sizesId:[10],
        description:"ساعت مچی مردانه سیکو",
        priceNew:17450,
        price:17990,
        category:6,
        thumbnail:"23.jpg",
        quantity:2,
        rate:5,
    },
    {
        id:24,
        name: "Just Cavalli",
        sizesId:[10],
        description:"ساعت مچی مردانه",
        priceNew:72000,
        price:94000,
        category:6,
        thumbnail:"24.jpg",
        quantity:2,
        rate:5,
    },
    {
        id:25,
        name: "Body Spinner",
        sizesId:[1,2],
        description:"تیشرت زنانه بادی اسپینر",
        priceNew:480,
        price:560,
        category:7,
        thumbnail:"25.jpg",
        quantity:10,
        rate:4,
    },
    {
        id:26,
        name: "JootiJeans",
        sizesId:[1],
        description:"تیشرت زنانه جوتی جینز",
        priceNew:420,
        price:499,
        category:7,
        thumbnail:"26.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:27,
        name: "RNS",
        sizesId:[1,2],
        description:"تاپ زنانه آر ان اس RNS",
        price:360,
        category:7,
        thumbnail:"27.jpg",
        quantity:10,
        rate:4,
    },
    {
        id:28,
        name: "RNS",
        sizesId:[1],
        description:"تاپ کوتاه زنانه آر ان اس",
        price:250,
        category:7,
        thumbnail:"28.jpg",
        quantity:7,
        rate:2,
    },
    {
        id:29,
        name: "Koton",
        sizesId:[1,2],
        description:"دامن طرح دار کوتون",
        price:899,
        category:8,
        thumbnail:"29.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:30,
        name: "Body Spinner",
        sizesId:[1],
        description:"دامن زنانه بادی اسپینر",
        price:384,
        category:8,
        thumbnail:"30.jpg",
        quantity:10,
        rate:5,
    },
    {
        id:31,
        name: "Koton",
        sizesId:[1,2],
        description:"دامن جین زنانه کوتون",
        price:2999,
        category:8,
        thumbnail:"31.jpg",
        quantity:10,
        rate:4,
    },
    {
        id:32,
        name: "Keroza",
        sizesId:[1,2],
        description:"دامن زنانه کروزا Keroza",
        price:689,
        category:8,
        thumbnail:"32.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:33,
        name: "Shifer",
        sizesId:[12,14],
        description:"کفش پیاده روی زنانه شیفر",
        price:895,
        category:9,
        thumbnail:"33.jpg",
        quantity:10,
        rate:5,
    },
    {
        id:34,
        name: "Jeanswest",
        sizesId:[12,13],
        description:"کفش زنانه جین وست",
        price:2999,
        priceNew:3450,
        category:9,
        thumbnail:"34.jpg",
        quantity:7,
        rate:2,
    },
    {
        id:35,
        name: "Erke",
        sizesId:[13],
        description:"کفش پیاده روی زنانه ارک",
        price:3400,
        category:9,
        thumbnail:"35.jpg",
        quantity:6,
        rate:1,
    },
    {
        id:36,
        name: "Dandy",
        sizesId:[14],
        description:"کفش زنانه دندی Dandy",
        price:3200,
        category:9,
        thumbnail:"36.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:37,
        name: "Leather City",
        sizesId:[14],
        description:"کفش زنانه چرم طبیعی",
        price:2600,
        category:10,
        thumbnail:"37.jpg",
        quantity:10,
        rate:5,

    },
    {
        id:38,
        name: "Mante",
        sizesId:[14,13],
        description:"کفش پاشنه بلند چرم طبیعی",
        price:3200,
        priceNew: 2400,
        category:10,
        thumbnail:"38.jpg",
        quantity:6,
        rate:3,
    },
    {
        id:39,
        name: "Mante",
        sizesId:[13],
        description:"کفش پاشنه بلند چرم طبیعی",
        price:3900,
        category:10,
        thumbnail:"39.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:40,
        name: "Saad",
        sizesId:[12],
        description:"کفش پاشنه دار چرم طبیعی",
        price:2000,
        category:10,
        thumbnail:"40.jpg",
        quantity:10,
        rate:5,
    },
    {
        id:41,
        name: "CharmAra",
        sizesId:[10],
        description:"کیف دوشی چرم طبیعی",
        price:750,
        priceNew:599,
        category:11,
        thumbnail:"41.jpg",
        quantity:10,
        rate:4,
    },
    {
        id:42,
        name: "CharmAra",
        sizesId:[10],
        description:"کیف دوشی چرم طبیعی",
        price:360,
        category:11,
        thumbnail:"42.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:43,
        name: "Mante",
        sizesId:[10],
        description:"کیف دوشی چرم طبیعی",
        price:650,
        category:11,
        thumbnail:"43.jpg",
        quantity:6,
        rate:3,
    },
    {
        id:44,
        name: "Butterfly",
        sizesId:[10],
        description:"کیف دوشی زنانه باترفلای",
        price:750,
        category:11,
        thumbnail:"44.jpg",
        quantity:10,
        rate:5,
    },
    {
        id:45,
        name: "SPY",
        sizesId:[10],
        description:"عینک آفتابی اسپای Spy",
        price:8500,
        category:12,
        thumbnail:"45.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:46,
        name: "SPY",
        sizesId:[10],
        description:"عینک آفتابی اسپای Spy",
        price:3999,
        category:12,
        thumbnail:"46.jpg",
        quantity:10,
        rate:5,
    },
    {
        id:47,
        name: "SPY",
        sizesId:[10],
        description:"عینک آفتابی زنانه اسپای",
        price:3250,
        category:12,
        thumbnail:"47.jpg",
        quantity:10,
        rate:4,
    },
    {
        id:48,
        name: "SPY",
        sizesId:[10],
        description:"عینک آفتابی اسپای Spy",
        price:4300,
        priceNew:3799,
        category:12,
        thumbnail:"48.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:49,
        name: "JootiJeans",
        sizesId:[15,16],
        description:"تیشرت یقه گرد پسرانه",
        price:580,
        priceNew:490,
        category:13,
        thumbnail:"49.jpg",
        quantity:6,
        rate:3,

    },
    {
        id:50,
        name: "JootiJeans",
        sizesId:[15,16],
        description:"تیشرت یقه گرد پسرانه",
        price:480,
        priceNew:390,
        category:13,
        thumbnail:"50.jpg",
        quantity:10,
        rate:5,
    },
    {
        id:51,
        name: "JootiJeans",
        sizesId:[16,17],
        description:"تیشرت پسرانه نخی",
        price:450,
        category:13,
        thumbnail:"51.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:52,
        name: "JootiJeans",
        sizesId:[17],
        description:"تیشرت یقه گرد پسرانه",
        price:390,
        category:13,
        thumbnail:"52.jpg",
        quantity:10,
        rate:4,
    },
    {
        id:53,
        name: "Jeanswest",
        sizesId:[1,2],
        description:"پیراهن پسرانه جین وست",
        price:1199,
        category:14,
        thumbnail:"53.jpg",
        quantity:10,
        rate:5,
    },
    {
        id:54,
        name: "Jeanswest",
        sizesId:[2,3],
        description:"پیراهن پسرانه جین وست",
        price:1499,
        priceNew:950,
        category:14,
        thumbnail:"54.jpg",
        quantity:6,
        rate:3,
    },
    {
        id:55,
        name: "Jeanswest",
        sizesId:[15,16,1],
        description:"پیراهن پسرانه جین وست",
        price:1899,
        category:14,
        thumbnail:"55.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:56,
        name: "Jeanswest",
        sizesId:[17,1],
        description:"پیراهن پسرانه جین وست",
        price:1999,
        priceNew:1399,
        category:14,
        thumbnail:"56.jpg",
        quantity:10,
        rate:5,
    },
    {
        id:57,
        name: "Justify",
        sizesId:[16],
        description:"تیشرت آستین بلند دخترانه",
        price:740,
        category:15,
        thumbnail:"57.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:58,
        name: "Potter",
        sizesId:[15,17],
        description:"تیشرت آستین بلند دخترانه",
        price:699,
        priceNew:455,
        category:15,
        thumbnail:"58.jpg",
        quantity:6,
        rate:3,
    },
    {
        id:59,
        name: "LC Waikiki",
        sizesId:[17,16],
        description:"پولوشرت آستین بلند دخترانه",
        price:777,
        category:15,
        thumbnail:"59.jpg",
        quantity:10,
        rate:4,
    },
    {
        id:60,
        name: "Jeanswest",
        sizesId:[17,16],
        description:"تیشرت دخترانه جین وست",
        price:780,
        priceNew:490,
        category:15,
        thumbnail:"60.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:61,
        name: "LC Waikiki",
        sizesId:[15],
        description:"بلوز دخترانه پاییزه ال سی",
        price:420,
        priceNew:360,
        category:16,
        thumbnail:"61.jpg",
        quantity:10,
        rate:5,
    },
    {
        id:62,
        name: "LC Waikiki",
        sizesId:[15,16,17],
        description:"بلوز دخترانه پاییزه ال سی",
        price:420,
        category:16,
        thumbnail:"62.jpg",
        quantity:7,
        rate:2,

    },
    {
        id:63,
        name: "LC Waikiki",
        sizesId:[15,17],
        description:"بلوز دخترانه پاییزه ال سی",
        price:490,
        category:16,
        thumbnail:"63.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:64,
        name: "LC Waikiki",
        sizesId:[16],
        description:"بلوز دخترانه پاییزه ال سی",
        price:360,
        priceNew:299,
        category:16,
        thumbnail:"64.jpg",
        quantity:10,
        rate:4,
    },
    {
        id:65,
        name: "Kanzhouk",
        sizesId:[19],
        description:"کفش بچگانه کانژوک",
        price:750,
        category:17,
        thumbnail:"65.jpg",
        quantity:10,
        rate:5,
    },
    {
        id:66,
        name: "Pama",
        sizesId:[18,19],
        description:"کفش پیاده روی پسرانه پاما Pama",
        price:888,
        category:17,
        thumbnail:"66.jpg",
        quantity:6,
        rate:3,
    },
    {
        id:67,
        name: "Pama",
        sizesId:[18,20],
        description:"کفش پیاده روی پسرانه پاما Pama",
        price:999,
        priceNew:690,
        category:17,
        thumbnail:"67.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:68,
        name: "Kanzhouk",
        sizesId:[19],
        description:"کفش بچگانه کانژوک",
        price:940,
        priceNew:815,
        category:17,
        thumbnail:"68.jpg",
        quantity:10,
        rate:4,
    },

    {
        id:69,
        name: "Kanzhouk",
        sizesId:[18],
        description:"کفش بچگانه کانژوک",
        price:899,
        category:18,
        thumbnail:"69.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:70,
        name: "Kanzhouk",
        sizesId:[20],
        description:"کفش بچگانه کانژوک",
        price:590,
        priceNew:450,
        category:18,
        thumbnail:"70.jpg",
        quantity:10,
        rate:5,
    },
    {
        id:71,
        name: "Kanzhouk",
        sizesId:[18,19],
        description:"کفش بچگانه کانژوک",
        price:760,
        priceNew:650,
        category:18,
        thumbnail:"71.jpg",
        quantity:6,
        rate:3,
    },
    {
        id:72,
        name: "Pama",
        sizesId:[18],
        description:"کتانی ساق دار دخترانه پاما Pama",
        price:999,
        category:18,
        thumbnail:"72.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:73,
        name: "Brand Payless",
        sizesId:[22],
        description:"صندل دخترانه برند پی لس",
        price:90,
        category:19,
        thumbnail:"73.jpg",
        quantity:10,
        rate:5,
    },
    {
        id:74,
        name: "Brand Payless",
        sizesId:[21],
        description:"صندل دخترانه برند پی لس",
        price:180,
        priceNew:85,
        category:19,
        thumbnail:"74.jpg",
        quantity:6,
        rate:3,
    },
    {
        id:75,
        name: "Brand Payless",
        sizesId:[21,22],
        description:"صندل دخترانه برند پی لس",
        price:110,
        category:19,
        thumbnail:"75.jpg",
        quantity:3,
        rate:4.5,
    },
    {
        id:76,
        name: "Pama",
        sizesId:[21],
        description:"دمپایی بچگانه پاما",
        price:140,
        category:19,
        thumbnail:"76.jpg",
        quantity:10,
        rate:5,
    },
]

const types = [
    {id: 1, name: "مردانه"},
    {id: 2, name: "زنانه"},
    {id: 3, name: "بچه گانه"},
]
const topCategory = [
    {
        id: 1, name: "پسرانه",
        type: 3,

    },
    {id: 2, name: "دختران", typeId: 3,},
    {id: 3, name: "کفش پسرانه",  typeId:3,},
    {id: 4, name: "کفش دخترانه",  typeId:3,},
    // مردانه
    {
        id: 5, name: "لباس مردانه",
        typeId: 1,

    },
    {id: 6, name: "اکسسوری", typeId: 1,},
    {id: 7, name: "کفش",  typeId:1,},
    {id: 8, name: "کیف",  typeId:1,},

    {
        id: 9, name: "لباس زنانه",
        typeId: 2,

    },
    {id: 10, name: "کفش", typeId: 2,},
    {id: 11, name: "کیف",  typeId:2,},
    {id: 12, name: "اکسسوری",  typeId:2,},
]
const categories = [
    {
        id: 1,
        name: "تیشرت",
        topCategoryId: 5
    },
    {
        id: 2,
        name: "شلوارک",
        topCategoryId: 5
    },
    {
        id: 3,
        name: "کتانی",
        topCategoryId: 7
    },
    {
        id: 4,
        name: "کالج",
        topCategoryId: 7
    },
    {
        id: 5,
        name: "کیف پاسپورتی و دستی",
        topCategoryId: 8
    },
    {
        id: 6,
        name: "ساعت",
        topCategoryId: 6
    },
    {
        id: 7,
        name: "تاپ، تیشرت و پولوشرت",
        topCategoryId: 9
    },
    {
        id: 8,
        name: "دامن",
        topCategoryId: 9
    },
    {
        id: 9,
        name: "کتانی",
        topCategoryId: 10
    },
    {
        id: 10,
        name: "کفش پاشنه بلند",
        topCategoryId: 10
    },
    {
        id: 11,
        name: "کیف دوشی",
        topCategoryId: 11
    },
    {
        id: 12,
        name: "عینک",
        topCategoryId: 12
    },
    {
        id: 13,
        name: "تیشرت",
        topCategoryId: 1
    },
    {
        id: 14,
        name: "پیراهن",
        topCategoryId: 1
    },
    {
        id: 15,
        name: "تاپ، تیشرت و پولوشرت",
        topCategoryId: 2
    },
    {
        id: 16,
        name: "شومیز و بلوز دخترانه",
        topCategoryId: 2
    },
    {
        id: 17,
        name: "کتانی",
        topCategoryId: 3
    },
    {
        id: 18,
        name: "کتانی",
        topCategoryId: 4
    },
    {
        id: 19,
        name: "صندل و دمپایی",
        topCategoryId: 4
    },

]
const sizes = [
    {id:1,name:"S"},
    {id:2,name:"L"},
    {id:3,name:"XL"},
    {id:4,name:"XXL"},
    {id:5,name:"40"},
    {id:6,name:"41"},
    {id:7,name:"42"},
    {id:8,name:"43"},
    {id:9,name:"44"},
    {id:10,name:"تک سایز"},
    {id:11,name:"18 mm"},
    {id:12,name:"28"},
    {id:13,name:"30"},
    {id:14,name:"36"},
    {id:15,name:"3-4 سال"},
    {id:16,name:"4-5 سال"},
    {id:17,name:"6-7 سال"},
    {id:18,name:"21"},
    {id:19,name:"22"},
    {id:20,name:"23"},
    {id:21,name:"6"},
    {id:22,name:"17"},
]