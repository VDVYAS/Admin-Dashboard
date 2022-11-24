//sidebar import

import {HiHome} from 'react-icons/hi' ;
import {MdOutlineBorderColor} from 'react-icons/md';
import {BsPeople} from 'react-icons/bs';
import { GoPackage} from 'react-icons/go';
import {TbDeviceAnalytics} from 'react-icons/tb';
import {BiDollar} from 'react-icons/bi';
import {GiTakeMyMoney} from 'react-icons/gi'
import {TbClipboardList} from 'react-icons/tb'

// Recent Card Imports
import img1 from "../../image/img1.png";
import img2 from "../../image/img2.png";
import img3 from "../../image/img3.png";

//sidebar data

export const SidebarData= [
    {
        icon: HiHome,
        headinng:  "Dashboard",
    },
    {
        icon: MdOutlineBorderColor,
        headinng:  "Order",
    },
    {
        icon: BsPeople,
        headinng:  "Coustomers",
    },
    {
        icon: GoPackage,
        headinng:  "Product",
    },
    {
        icon: TbDeviceAnalytics,
        headinng:  "Analytics",
    },
]

//Cards data

export const CradsData= [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%,#c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        Value: "25,970",
        png: BiDollar,
        series:[
            {
                name:"Sales",
                data: [31,40,28,51,42,109,100],
            },
        ],
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%,#FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        Value: "14,270",
        png: GiTakeMyMoney,
        series:[
            {
                name:"Expenses",
                data: [10,100,50,70,80,30,40],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(rgb(248,212,154) -146.42%, rgb(255,202,113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        Value: "4,270",
        png: TbClipboardList,
        series:[
            {
                name:"Expenses",
                data: [10,25,15,30,12,15,20],
            },
        ],
    },
]

// Recent Update Card Data
export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];