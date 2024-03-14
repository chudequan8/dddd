import React, { useEffect, useState } from "react"
import Icon from "../icon/Icon"

export const ProfileNav = (props:any) => {

    const {
        active
    } = props

    useEffect(() => {
        setNav((prevNav:any) => {
            const updatedNav = [...prevNav]; // 创建一个副本以避免直接修改状态
            updatedNav[active].active = true; // 设置指定索引位置的 active 属性为 true
            return updatedNav;
        });
    },[])

    const [nav,setNav] = useState<any>([
        {
            icon:'',
            name:"Balance",
            active:false,
        },
        {
            icon:'',
            name:"Deposit",
            active:false,
        },
        {
            icon:'',
            name:"Withdraw",
            active:false,
        },
        {
            icon:'',
            name:"Buy Crypto",
            active:false,
        },
        {
            icon:'',
            name:"BC Swap",
            active:false,
        },
        {
            icon:'',
            name:"Vault Pro",
            active:false,
        },
        {
            icon:'',
            name:"NFTs",
            active:false,
        },
    ])

    

    return <div className="bg-[#fff] rounded-sm py-4 px-3 mr-6 flex-1" style={{ maxWidth:'220px', }}>
        {
            nav.map((item:any, index:number) => {
                return <div key={index} className={ item.active ? 'h-11 pl-4 flex items-center bg-[#f5f6fa] font-bold cursor-pointer mb-2' : 'h-11 pl-4 flex items-center cursor-pointer mb-2' } style={{ boxSizing:'border-box' }}>
                    <Icon className="profile-svg mr-3" icon="HeroSportMenuIcon">
                    
                    </Icon>
                    <span className="text-sm">
                        { item.name }
                    </span>
                </div>
            })
        }
    </div>
}