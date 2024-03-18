'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Dropdown, { DropdownMenu, DropdownToggle } from './Dropdown';
import Button from "@/components/ui/Button";
import btc from "@/assets/profile/BTC.webp";
import Icon from "@/components/icon/Icon";
import { ConfigProvider, Modal, Tooltip } from "antd";
import USDT from "@/assets/coin/us.png"
import CODE from "@/assets/coin/code.png"
import Input from "@/components/form/Input";
import CHF from "@/assets/coin/CHF.webp"
import Switch from "@/components/ui/Switch";
import Radio from "@/components/ui/Radio";

export const Wallet = () => {

    const [show,setShow] = useState<boolean>(false)

    const [btnActive, setBtnActive] = useState(0)

    const [classList,setClassList] = useState<any>([
        {
            text:'Fiat',
            array:[
                {
                    img:CHF,
                    name:"CHF",
                    value:"BDT 0.00",
                    balance:0.00
                }
            ]
        },
        {
            text:'Crypto',
            array:[
                {
                    img:CHF,
                    name:"CHF",
                    value:"BDT 0.00",
                    balance:0.00
                },
                {
                    img:CHF,
                    name:"CHF",
                    value:"BDT 0.00",
                    balance:0.00
                },
                {
                    img:CHF,
                    name:"CHF",
                    value:"BDT 0.00",
                    balance:0.00
                },
                {
                    img:CHF,
                    name:"CHF",
                    value:"BDT 0.00",
                    balance:0.00
                },
                {
                    img:CHF,
                    name:"CHF",
                    value:"BDT 0.00",
                    balance:0.00
                },
                {
                    img:CHF,
                    name:"CHF",
                    value:"BDT 0.00",
                    balance:0.00
                },
                {
                    img:CHF,
                    name:"CHF",
                    value:"BDT 0.00",
                    balance:0.00
                },
                {
                    img:CHF,
                    name:"CHF",
                    value:"BDT 0.00",
                    balance:0.00
                },
                {
                    img:CHF,
                    name:"CHF",
                    value:"BDT 0.00",
                    balance:0.00
                },
                {
                    img:CHF,
                    name:"CHF",
                    value:"BDT 0.00",
                    balance:0.00
                },
                {
                    img:CHF,
                    name:"CHF",
                    value:"BDT 0.00",
                    balance:0.00
                },
                {
                    img:CHF,
                    name:"CHF",
                    value:"BDT 0.00",
                    balance:0.00
                }
            ]
        }
    ])

    const [coinOpenList,setCoinOpenList] = useState<any>([
        {
            img:CHF,
            name:"BTC",
            value:"Bitcoin",
            open:true
        },
        {
            img:CHF,
            name:"BTC",
            value:"Bitcoin",
            open:true
        },
        {
            img:CHF,
            name:"BTC",
            value:"Bitcoin",
            open:true
        },
        {
            img:CHF,
            name:"BTC",
            value:"Bitcoin",
            open:true
        },
    ])

    const [coinArray,setCoinArray] = useState<any>([
        {
            text:"USDT",
            icon:USDT
        },
        {
            text:"USDT",
            icon:USDT
        },
        {
            text:"USDT",
            icon:USDT
        },
        {
            text:"USDT",
            icon:USDT
        },
        {
            text:"USDT",
            icon:USDT
        },
        {
            text:"USDT",
            icon:USDT
        }
    ])

    const [methodArray,setMethodArray] = useState<any>([
        {
            text:"Currency",
            active:true,
        },
        {
            text:"mNFT",
            active:false,
        }
    ])
    
    const [method2Array,setMethod2Array] = useState<any>([
        {
            text:"Crypto",
            active:true,
        },
        {
            text:"Fiat",
            active:false,
        },
        {
            text:"mNFT",
            active:false,
        },
        {
            text:"My Favorite",
            active:false,
        }
    ])

    const [coinInforArray,setCoinInfoArray] = useState<any>([
        {
            img:CHF,
            name:"BTC",
            open:true
        },
        {
            img:CHF,
            name:"BTC",
            open:true
        },
        {
            img:CHF,
            name:"BTC",
            open:true
        },
        {
            img:CHF,
            name:"BTC",
            open:true
        },
        {
            img:CHF,
            name:"BTC",
            open:true
        },
        {
            img:CHF,
            name:"BTC",
            open:true
        },
        {
            img:CHF,
            name:"BTC",
            open:true
        },
        {
            img:CHF,
            name:"BTC",
            open:true
        }
    ])

    const changeActive = (index:number) => {
		const newNavArray = methodArray.map((item:any, index2:any) => {
			if (index2 !== index) {
				return { ...item, active: false };
			} else {
				return { ...item, active: true };
			}
		});
		setMethodArray(newNavArray);
	}

    const changeActive2 = (index:number) => {
		const newNavArray = method2Array.map((item:any, index2:any) => {
			if (index2 !== index) {
				return { ...item, active: false };
			} else {
				return { ...item, active: true };
			}
		});
		setMethod2Array(newNavArray);
	}

    const setCoinOpen = (index:number) => {
        const newList = [...coinOpenList]; // 创建 coinOpenList 的副本
        newList[index].open = !newList[index].open; // 修改副本中的对应元素
        setCoinOpenList(newList); // 更新状态
    }

    const [view,setView] = useState<any>(false);
    const [hidden,setHidden] = useState<any>(false);
    const [information,setInformation] = useState<any>(false);

    const [coinArrayShow,setCoinArrayShow] = useState<boolean>(false)
    
    return (
        <>
            <Dropdown>
                <DropdownToggle hasIcon={false}>
                    <Button style={{ fontSize: '14px' }} className="bg-[#f2f2f7] dark:bg-[#1e2024]">
                        <Image className="w-4 h-4 mr-2" src={btc} alt=""></Image>
                        <span>
                            0.00
                        </span>
                        <Icon icon="HeroChevronRight" style={{ transform:'rotate(90deg)' }} className="ml-2">
                        </Icon>
                    </Button>
                </DropdownToggle>
                <DropdownMenu>
                    <div className="" style={{ width:'26.25rem' }}>
                        <div className="p-5 flex" style={{ boxSizing:'border-box' }}>
                            <Input className="h-11" name="key" placeholder="Search"></Input>
                            <Icon icon="HeroAddAndDel" onClick={() => setCoinArrayShow(true)} className="w-10 h-12 ml-4 cursor-pointer">
                            </Icon>
                        </div>
                        <div className="h-9 mb-7 mx-5 bg-[#f0f1f5] p-1 flex">
                            {
                                methodArray.map((item:any,index:any) => {
                                    return <div key={index} onClick={() => changeActive(index)} className={ item.active ? ' bg-[#fff] flex justify-center items-center w-1/2 font-bold text-sm cursor-pointer' : 'flex justify-center items-center w-1/2 font-bold text-sm cursor-pointer' }>
                                        {item.text}
                                    </div>
                                })
                            }
                        </div>
                        <div className="overflow-y-auto" style={{ maxHeight:'20rem',scrollbarWidth:'none',msOverflowStyle:'none' }}>
                            {
                                classList.map((item:any, index:number) => {
                                    return <div className="" key={index}>
                                        <div className="text-sm ml-7 leading-tight">
                                            {
                                                item.text
                                            }
                                        </div>
                                        {
                                            item.array.map((item2:any, index: number) => {
                                                return <div key={index} className="my-1 mx-5 p-2 flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <Image src={item2.img} alt="" className="w-7 h-7 mr-4"></Image>
                                                        <span className="text-[#31373d]">{ item2.name }</span>
                                                    </div>
                                                    <div className="flex flex-col items-end">
                                                        <span className="text-sm text-[#31373d] font-bold">{ item2.value }</span>
                                                        <span className="text-[#adb6c0] text-xs">{ item2.balance }</span>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                })
                            }
                        </div>
                        <div className="py-6 px-7 flex justify-between border-t border-solid">
                            <Switch size="small" checked={view} onChange={() => { setView(!view);setInformation(true) }} text="View in fiat"></Switch>
                            <Switch size="small" checked={hidden} onChange={() => setHidden(!hidden)} text="Hidden Small"></Switch>
                        </div>
                    </div>
                </DropdownMenu>
            </Dropdown>
            <Button
                style={{
                    backgroundColor: '#6e34e2b3',
                    color: '#fff',
                    padding: '10px 30px',
                    fontSize: '14px',
                    backgroundImage:'conic-gradient(from 1turn, rgba(136, 83, 252, 1), rgba(110, 52, 226, 1))',
                    border:'none',
                }}
                icon='HeroSportMenuIcon'
                className="profile-button"
                onClick={() => setShow(true)}>
                Deposit
            </Button>
            <ConfigProvider
				theme={{ hashed: false }}
			>
                <Modal
                    className="dark:bg-[#202327] bg-[#F4F4F7] p-0"
					style={{ zIndex: 9999999 }}
					title=''
					open={show}
					onOk={() => setShow(false)}
					onCancel={() => setShow(false)}
					footer={null}
					closeIcon={<Button
						icon='HeroAntModalClose'
						children=''
						className="m-0-svg-button"
						style={{ padding:'0' }}
					/>}
                    width="600px"
                >
                    <div className="">
                        <div className="p-7 bg-[#f5f6fa]" style={{ boxSizing:"border-box" }}>
                            <div className="text-base font-bold h-12">
                                Deposit
                            </div>
                            <div className="flex justify-between">
                                <Button onClick={() => setBtnActive(0)} className={`text-white ${btnActive == 0 ? '' : ''} w-1/3 rounded-none`}>Crash</Button>
                                <Button onClick={() => setBtnActive(1)} className={`text-white ${btnActive == 1 ? '' : ''} w-1/3 rounded-none`}>Description</Button>
                                <Button onClick={() => setBtnActive(2)} className={`text-white ${btnActive == 2 ? '' : ''} w-1/3 rounded-none`}>Reviews</Button>
                            </div>
                        </div>
                        <div className="p-7 bg-[#fff]">
                            <div className="flex h-7 mb-3 justify-between" style={{ flexWrap:'wrap' }}>
                                {
                                    coinArray.map((item:any,index:any) => {
                                        return <div key={index} style={{ width:'fit-content', boxSizing:'border-box' }} className="text-base mr-2 px-3 h-7 flex items-center bg-[#eaecf3] rounded-xl">
                                            <Image src={item.icon} alt="" className="w-4 h-4 mr-1">
                                            </Image>
                                            { item.text }
                                        </div>
                                    })
                                }
                                <div className="mr-2 px-3 h-7 flex items-center bg-[#eaecf3] rounded-xl" style={{ boxSizing:'border-box' }}>
                                    <span className="mr-2 text-base">
                                        More
                                    </span>
                                    <Image src={USDT} alt="" className="w-4 h-4 mr-1">
                                    </Image>
                                    <Icon icon="HeroDropDown" className="w-4 h-4">

                                    </Icon>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col w-1/2 mr-4">
                                    <span className="mb-3">Deposit Currency</span>
                                    <div className="h-12 bg-[#F5F6FA] px-5 flex items-center justify-between">
                                        <div className="flex">
                                            <Image src={USDT} alt="" className="w-7 h-7 mr-4">
                                            
                                            </Image>
                                            <span className="text-base">USDT</span>
                                        </div>
                                        <Icon icon="HeroDropDown" className="w-4 h-4">

                                        </Icon>
                                    </div>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <span className="mb-3">Choose Network</span>
                                    <div className="h-12 bg-[#F5F6FA] px-5 flex items-center justify-between">
                                        <div className="flex">
                                            <Image src={USDT} alt="" className="w-7 h-7 mr-4">
                                            
                                            </Image>
                                            <span className="text-base">USDT</span>
                                        </div>
                                        <Icon icon="HeroDropDown" className="w-4 h-4">

                                        </Icon>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center">
                                    Get extra <b>180%</b> bonus on minimum of <b>10.00 USDT</b> deposit
                                    <Tooltip title={<div>
                                        1st Deposit Bonus<br/>
                                        180% Up to 20000.00 USDT<br/>
                                        Minimum Deposit 10.00
                                    </div>}>
                                    <Icon className="ml-2 cursor-pointer" icon="HeroWarning" />
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="mt-2 py-5 px-3 bg-[#f5f6fa] flex flex-col">
                                <div className="flex items-center">
                                    <Image className="mr-4" style={{ height:'9.25rem',width:'9.25rem' }} src={CODE} alt="">

                                    </Image>
                                    <div className="flex flex-col">
                                        <span>Deposit Address</span>
                                        <div className="p-2 bg-[#e7eaf0] flex items-center justify-between">
                                            <div style={{ width:'18rem' }}>
                                                0x8d2Ac715C72DEBaa9019152DbD707675116B45Bd
                                            </div>
                                            <div className="px-5 h-7 bg-[#DADDE6] rounded-sm cursor-pointer">Copy</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 bg-[#e7eaf0] flex items-center py-1 px-2">
                                    <Icon className="ml-2 mr-2 cursor-pointer" icon="HeroWarning" />
                                    Minimum Deposit: 0.000000001 USDT
                                </div>
                            </div>
                            <div className="mt-5 bg-[#3ac9481a] py-2 px-3">
                                <span className="text-[#3BC117] font-bold">NOTICE: </span>
                                Send only USDT to this deposit address. Coins will be deposited automatically after 6 network confirmations. Smart contract addresses are not supported(Contact us).
                            </div>
                        </div>
                    </div>
                </Modal>
                <Modal
                    className="dark:bg-[#202327] bg-[#F4F4F7] p-0"
					style={{ zIndex: 9999999 }}
					title=''
					open={coinArrayShow}
					onOk={() => setCoinArrayShow(false)}
					onCancel={() => setCoinArrayShow(false)}
					footer={null}
					closeIcon={<Button
						icon='HeroAntModalClose'
						children=''
						className="m-0-svg-button"
						style={{ padding:'0' }}
					/>}
                    width="400px"
                >
                    <div className="bg-[#fff]">
                        <div className="py-3 bg-[#EAECF3] dark:bg-[#111415] flex items-center">
                            <Input style={{ height:'2.75rem',marginRight:'4rem' }} className="ml-7" name="key" placeholder="Search"></Input>
                        </div>
                        <div className="my-5 mx-7 flex h-9 bg-[#fff]">
                            {
                                method2Array.map((item:any,index:any) => {
                                    return <div key={index} onClick={() => changeActive2(index)} className={ item.active ? ' bg-[#fff] flex justify-center items-center w-1/2 font-bold text-sm cursor-pointer' : 'flex justify-center items-center w-1/2 font-bold text-sm cursor-pointer' }>
                                        {item.text}
                                    </div>
                                })
                            }
                        </div>
                        <div className="px-7">
                            <div className="">
                                <span>My Favorite Coins</span>
                            </div>
                            {
                                coinOpenList.map((item:any,index:any) => {
                                    return <div key={index} className="flex justify-between py-2">
                                        <div className="flex">
                                            <Image src={item.img} alt="" className="w-7 h-7 shadow-md rounded-full"></Image>
                                            <span className="ml-4">{ item.name }</span>
                                        </div>
                                        <div className="flex">
                                            <span className="mr-4">{ item.value }</span>
                                            <Switch size="small" checked={item.open} onChange={() => setCoinOpen(index)}></Switch>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </Modal>
                <Modal
                    className="dark:bg-[#202327] bg-[#F4F4F7] p-0"
					style={{ zIndex: 9999999 }}
					title=''
					open={information}
					onOk={() => setInformation(false)}
					onCancel={() => setInformation(false)}
					footer={null}
					closeIcon={<Button
						icon='HeroAntModalClose'
						children=''
						className="m-0-svg-button"
						style={{ padding:'0' }}
					/>}
                    width="400px"
                >
                    <div className="p-5 bg-[#fff] flex flex-col items-center">
                        <div className="text-[#31373d] text-base font-bold">Information</div>
                        <div className="my-4 px-3 text-center text-sm w-full">
                            Please note that these are currency approximations. <br/>
                            All bets & transactions will be calculated in equivalent currencies. <br/>
                            For more details feel free to contact our live support.<br/>
                        </div>
                        <div className="mt-4 flex justify-between flex-wrap px-6">
                            {
                                coinInforArray.map((item:any, index:number) => {
                                    return <div key={index} className="mb-2 w-1/3 flex items-center justify-around flex pr-8" style={{ boxSizing:'border-box' }}>
                                        <div className="flex items-center">
                                            <Radio dimension="sm" className="flex-1" name="a" value="" selectedValue={10}></Radio>
                                            <div className="w-12">{item.name}</div>
                                        </div>
                                        <Image className="w-4 h-4" src={item.img} alt="" />
                                    </div>
                                })
                            }
                        </div>
                        <Button
                            style={{
                                backgroundColor: '#1d803ab3',
                                color: '#fff',
                                padding: '10px 100px',
                                fontSize: '14px',
                                backgroundImage:'conic-gradient(from 1turn,rgba(88,175,16,1),rgba(29,128,58,1))',
                                border:'none',
                            }}
                            className="profile-button mt-4"
                            onClick={() => setShow(true)}>
                            Confirm
                        </Button>
                    </div>
                </Modal>
            </ConfigProvider>
        </>
    );
};