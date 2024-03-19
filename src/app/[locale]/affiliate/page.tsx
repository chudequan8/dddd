'use client';
import { ProfileTitle } from '@/components/ui/ProfileTitle';
import { ProfileNav } from '@/components/ui/ProfileNav';
import React, { useState } from "react";
import USDT from "@/assets/coin/us.png";
import Image from 'next/image';
import Icon from "@/components/icon/Icon";
import { Tooltip } from "antd";
import CODE from "@/assets/coin/code.png"
import { Empty } from "@/components/ui/Empty";
import Input from "@/components/form/Input";
import Button from "@/components/ui/Button";
import NCoin from "@/assets/profile/ncoin.webp"

import Lock from "@/assets/profile/lock.svg"
import tip from "@/assets/profile/tips.svg"

import Champion from "@/assets/profile/champion.webp";
import Bg from "@/assets/profile/bg.png";
import Phone from "@/assets/profile/phone.webp";
import Peaches from "@/assets/profile/peaches.png";
import User from "@/assets/profile/user.webp";
import Banner from "@/assets/profile/banner.png";

export default function WalletAffiliate(){

    const [affiliate,setAffiliate] = useState([
        {
            name:"Dashboard",
            active:true,
        },
        {
            name:"My Rewards",
            active:false,
        },
        {
            name:"Referral Codes & Friends",
            active:false,
        },
        {
            name:"Rate & Rules",
            active:false,
        },
        {
            name:"Download Banners",
            active:false,
        }
    ])

    const [drawerN,setDrawN] = useState();
    const toDrawer = (index:any) => {
        setDrawN(index)
    }

    const changeActive = (index:number) => {
        const updatedAffiliate = affiliate.map((item, i) => ({
            ...item,
            active: i === index // 设置活动项目
        }));
        setAffiliate(updatedAffiliate);
    }

    const [rulesShow,setRulesShow] = useState(false);

    const changeRuleShow = () => {
        setRulesShow(!rulesShow)
    }

    return <div style={{ maxWidth:'1430px',margin:'0 auto',marginTop:'1.5rem',width:'100%' }}>
        <div className='text-[#000000] font-bold' style={{ fontSize:"1.5rem" }}>
            Affiliate
        </div>
        <div className='mt-6 flex'>
            {
                affiliate.map((item,index) => {
                    return <div onClick={ () => changeActive(index) }className={ item.active ? 'cursor-pointer py-3 px-4 bg-[#EAECF3] flex mr-4 rounded-md' : 'cursor-pointer py-3 px-4 bg-[#fff] flex mr-4 rounded-md' }>
                        <Icon icon='HeroLanguage'></Icon>
                        <span className='ml-2'>{ item.name }</span>
                    </div>
                })
            }
        </div>
        {
            affiliate[0].active ? 
            <>
                <div className='flex justify-between mt-6'>
                    <div className='p-6 bg-[#EAECF3] mr-4' style={{ width:'70%' }}>
                        <div className='flex justify-between items-center'>
                            <span className='text-lg font-bold'>INVITE A FRIEND TO GET</span>
                            <span className='text-[#3BC117] underline'>Referral Terms & Conditions</span>
                        </div>
                        <div className='flex mt-6'>
                            <div className='flex items-center pr-6 border-r border-solid border-gray-300'>
                                <div className='font-bold'>
                                    <div style={{ background:'linear-gradient(180deg, #ffd339 49.82%, #f59e00 93.37%)',backgroundClip:'text',color:"transparent" }}>
                                        BDT 109,923.81
                                    </div>
                                </div>
                                <span className='ml-2'>
                                    Referral Bonus
                                </span>
                            </div>
                            <div className='flex items-center pl-6'>
                                <div className='font-bold'>
                                    <div style={{ background:'linear-gradient(180deg, #ffd339 49.82%, #f59e00 93.37%)',backgroundClip:'text',color:"transparent" }}>
                                        25%
                                    </div>
                                </div>
                                <span className='ml-2'>
                                    Commission Rewards
                                </span>
                            </div>
                        </div>
                        <div className='mt-6 text-[#98A7B5] leading-6'>
                            Get $1,000.00 for each friend you invite, plus a up to 25% commission on their wagers. Enjoy consistent commissions, whether they win or lose, in our Casino and Sportsbook. Start earning now!
                        </div>
                        <div className='flex gap-5 mt-10 mb-10'>
                            <div className='flex flex-col w-1/2'>
                                <span>Referral Link</span>
                                <div className='bg-[#fff] mt-2 p-1 flex items-center justify-between' style={{ height:"3.375rem" }}>
                                    <div className='flex items-center'>
                                        <Icon className='ml-2 w-4' icon='HeroLanguage'></Icon>
                                        <span className='px-4'>https://bc.game/i-14amssvps-n/</span>
                                    </div>
                                    <div className='h-11 w-11 bg-[#E3E6EE] flex items-center justify-center rounded-sm'>
                                        <Icon style={{ width:'1.4rem',height:"1.4rem" }} icon='HeroLanguage'></Icon>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-1/2'>
                                <span>Referral Code</span>
                                <div className='bg-[#fff] mt-2 p-1 flex items-center justify-between' style={{ height:"3.375rem" }}>
                                    <div className='flex items-center'>
                                        <Icon className='ml-2 w-4' icon='HeroLanguage'></Icon>
                                        <span className='px-4'>14amssvps</span>
                                    </div>
                                    <div className='h-11 w-11 bg-[#E3E6EE] flex items-center justify-center rounded-sm'>
                                        <Icon style={{ width:'1.4rem',height:"1.4rem" }} icon='HeroLanguage'></Icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <span>
                                Share via social media
                            </span>
                            <div className='flex'>
                                <Image src={USDT} alt="" className='ml-4 w-7 h-7'>
                                </Image>
                                <Image src={USDT} alt="" className='ml-4 w-7 h-7'>
                                </Image>
                                <Image src={USDT} alt="" className='ml-4 w-7 h-7'>
                                </Image>
                                <Image src={USDT} alt="" className='ml-4 w-7 h-7'>
                                </Image>
                                <Image src={USDT} alt="" className='ml-4 w-7 h-7'>
                                </Image>
                                <Image src={USDT} alt="" className='ml-4 w-7 h-7'>
                                </Image>
                                <Image src={USDT} alt="" className='ml-4 w-7 h-7'>
                                </Image>
                                <Image src={USDT} alt="" className='ml-4 w-7 h-7'>
                                </Image>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <div className='flex bg-[#fff] p-5 h-full'>
                            <div className='w-1/2 flex flex-col items-center border-r border-solid border-gray-300'>
                                <Image src={Champion} alt="" style={{ width:'3.75rem',height:'3.75rem' }}>
                                </Image>
                                <span className='mt-4'>Total Rewards</span>
                                <span className='text-lg font-bold mt-4'>$0.00</span>
                            </div>
                            <div className='w-1/2 flex flex-col items-center'>
                                <Image src={Champion} alt="" style={{ width:'3.75rem',height:'3.75rem' }}>
                                </Image>
                                <span className='mt-4'>Total Rewards</span>
                                <span className='text-lg font-bold mt-4'>$0.00</span>
                            </div>
                        </div>
                        <div className='flex mt-4 gap-5'>
                            <div className='flex flex-col bg-[#fff] p-5 w-1/2'>
                                <Icon icon='HeroLanguage' className='w-5 h-5'></Icon>
                                <span className='text-sm mt-4'>Referral Rewards</span>
                                <span className='text-lg text-[#000000] mt-8 font-bold'>$0.00</span>
                            </div>
                            <div className='flex flex-col bg-[#fff] p-5 w-1/2'>
                                <Icon icon='HeroLanguage' className='w-5 h-5'></Icon>
                                <span className='text-sm mt-4'>Referral Rewards</span>
                                <span className='text-lg text-[#000000] mt-8 font-bold'>$0.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-4 mt-6 bg-[#fff]'>
                    <div className='font-bold text-base border-b border-solid border-gray-300 p-4'>
                        Rewards Activities
                    </div>
                    <div className='flex justify-center pb-8'>
                        <Empty></Empty>
                    </div>
                </div>
                <div className='mt-6 bg-[#fff] py-3 px-5 gap-5 flex justify-between items-end'>
                    <div className='w-full h-full flex mb-2 overflow-hidden'>
                        <div className='flex mr-4'>
                            <Image className="w-4 h-4" src={USDT} alt=""></Image>
                            <span className='ml-3'>Rasdasduh</span>
                            <span className='ml-2 font-bold text-[#3BC117]'>BDT3.93</span>
                        </div>
                        <div className='flex mr-4'>
                            <Image className="w-4 h-4" src={USDT} alt=""></Image>
                            <span className='ml-3'>Rasdasduh</span>
                            <span className='ml-2 font-bold text-[#3BC117]'>BDT3.93</span>
                        </div>
                        <div className='flex mr-4'>
                            <Image className="w-4 h-4" src={USDT} alt=""></Image>
                            <span className='ml-3'>Rasdasduh</span>
                            <span className='ml-2 font-bold text-[#3BC117]'>BDT3.93</span>
                        </div>
                        <div className='flex mr-4'>
                            <Image className="w-4 h-4" src={USDT} alt=""></Image>
                            <span className='ml-3'>Rasdasduh</span>
                            <span className='ml-2 font-bold text-[#3BC117]'>BDT3.93</span>
                        </div>
                        <div className='flex mr-4'>
                            <Image className="w-4 h-4" src={USDT} alt=""></Image>
                            <span className='ml-3'>Rasdasduh</span>
                            <span className='ml-2 font-bold text-[#3BC117]'>BDT3.93</span>
                        </div>
                        <div className='flex mr-4'>
                            <Image className="w-4 h-4" src={USDT} alt=""></Image>
                            <span className='ml-3'>Rasdasduh</span>
                            <span className='ml-2 font-bold text-[#3BC117]'>BDT3.93</span>
                        </div>
                        <div className='flex mr-4'>
                            <Image className="w-4 h-4" src={USDT} alt=""></Image>
                            <span className='ml-3'>Rasdasduh</span>
                            <span className='ml-2 font-bold text-[#3BC117]'>BDT3.93</span>
                        </div>
                    </div>
                    <div className='py-1 bg-[#F0F2F7] flex flex-col text-[#000000] items-center justify-center' style={{ height:"60px",width:'26%' }}>
                        <span>Total Rewards Sent To-Date</span>
                        <span className='text-[#FFAD00] mt-3 font-bold' style={{ fontSize:'1.25rem' }}>$24240248.54</span>
                    </div>
                </div>
                <div className='relative bg-[#fff] my-6 overflow-hidden flex' style={{ height:'18.75rem' }}>
                    <Image src={Bg} alt="" style={{ height:'120%',width:'auto' }}></Image>
                    <Image className='absolute' src={Phone} alt="" style={{ top:'2rem',left:"8%",height:'15rem',width:'auto',zIndex:99 }}></Image>
                    <div className='flex flex-col py-8' style={{ width:'50%' }}>
                        <span className='text-[#000000] font-bold text-base' style={{ fontSize:'1.5rem' }}>
                            Learn more about
                            <span className='text-[#3BC117]'>Affiliate program</span>
                        </span>
                        <span className='text-[#999] mt-3 text-base'>
                            If you have a large audience and followers. We have special conditions for you to customize your referral program!
                        </span>
                        <span className='text-[#999] mt-3 text-base'>
                            If you can invite players and their wager amount reaches a billion dollars and above, you will get your own customized casino! You can set up a casino website with your domain and design style.
                        </span>
                        <span className='text-[#999] mt-3 text-base'>for more details, pleasecontact us:</span>
                        <div className='bg-[#F6F7FA] mt-3 items-center flex justify-between px-3' style={{ maxWidth:"27.5rem",height:'3rem' }}>
                            <span>business@bc.game</span>
                            <Button>
                                <span className='text-[#3BC117]'>Send Now</span>
                                <Icon icon='HeroLanguage' className='text-[#3BC117]'></Icon>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='py-6 bg-[#fff] text-lg font-bold text-center' style={{ paddingLeft:'40px',paddingRight:'40px' }}>
                    <div className='text-[#000000]'>
                        Frequently Asked Questions
                    </div>
                    <div className='tips-list flex flex-col w-full'>
                        <div style={ drawerN == 0 ? {height:'100px'} : {}} className='transition-all duration-1000 my-4 h-12 w-full border-b border-gray-400 border-solid overflow-hidden'>
                            <div className="flex justify-between items-center">
                                <span>How is the deposit and withdrawal of funds in Vault Pro protected?</span>
                                <div className='h-8 w-8 rounded-full bg-[#eee] flex items-center justify-center cursor-pointer' onClick={() => { toDrawer(0) }}>
                                    <Icon icon="HeroAntModalClose">
                                    </Icon>
                                </div>
                            </div>
                            <div className='my-4' style={{ textAlign:'left',color:"#999",fontWeight:'normal' }}>Funds deposited and withdrawn in Vault Pro are protected by 2FA (Two-Factor Authentication) and can be accessed by the depositor at any time.</div>
                        </div>
                        <div style={ drawerN == 1 ? {height:'100px'} : {}} className='transition-all duration-1000 my-4 h-12 w-full border-b border-gray-400 border-solid overflow-hidden'>
                            <div className="flex justify-between items-center">
                                <span>When is the daily interest calculated, and how is it determined?</span>
                                <div className='h-8 w-8 rounded-full bg-[#eee] flex items-center justify-center cursor-pointer' onClick={() => { toDrawer(1) }}>
                                    <Icon icon="HeroAntModalClose">
                                    </Icon>
                                </div>
                            </div>
                            <div className='my-4' style={{ textAlign:'left',color:"#999",fontWeight:'normal' }}>The daily interest is calculated every day on the amount that remains not withdrawn from 00:00 to 23:59 (UTC+0). The interest is calculated at 02:00 (UTC+0), precisely 24 hours after the fund is deposited.</div>
                        </div>
                        <div style={ drawerN == 2 ? {height:'100px'} : {}} className='transition-all duration-1000 my-4 h-12 w-full border-b border-gray-400 border-solid overflow-hidden'>
                            <div className="flex justify-between items-center">
                                <span>Can I trust that my funds in Vault Pro are safe?</span>
                                <div className='h-8 w-8 rounded-full bg-[#eee] flex items-center justify-center cursor-pointer' onClick={() => { toDrawer(2) }}>
                                    <Icon icon="HeroAntModalClose">
                                    </Icon>
                                </div>
                            </div>
                            <div className='my-4' style={{ textAlign:'left',color:"#999",fontWeight:'normal' }}>Absolutely! BC.GAME ensures that the funds (cryptos) in Vault Pro are safeguarded and will not be accessed by anyone other than the depositor. Your funds are entirely yours, and they will always remain secure for your use.</div>
                        </div>
                    </div>
                </div>
            </>
            :affiliate[1].active ?
            <>
                <div className='py-6 px-7 bg-[#fff] mt-6 flex justify-between'>
                    <div className='flex w-1/2 justify-between'>
                        <div className='flex flex-col'>
                            <span className='text-lg'>Available Commission Rewards</span>
                            <span style={{ fontSize:"2rem" }} className='text-[#FFAD00] mt-2'>$0.00</span>
                            <span className='text-base mt-2'>Total Received$0.00</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-lg'>Available Referral Rewards</span>
                            <span style={{ fontSize:"2rem" }} className='text-[#FFAD00] mt-2'>$0.00</span>
                            <span className='text-base mt-2'>Total Received$0.00 Locked Rewards$0.00</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <Button hover className='mr-4'>
                            Swap
                        </Button>
                        <Button
                            style={{
                                height:'3rem',
                                backgroundColor: '#1d803ab3',
                                color: '#fff',
                                padding: '10px 30px',
                                fontSize: '14px',
                                backgroundImage:'conic-gradient(from 1turn, rgba(88, 175, 16, 1), rgba(29, 128, 58, 1))',
                                border:'none',
                            }}
                            className="profile-button">
                            Withdraw to Wallet
                        </Button>
                    </div>
                </div>
                <div className='mt-6 flex items-center justify-between'>
                    <div className='p-2 bg-[#fff] flex' style={{ width:'fit-content' }}>
                        <div className='bg-[#EAECF3] py-3 px-4 font-bold' style={{ whiteSpace:'nowrap',borderRadius:'.25rem' }}>
                            Commission Rewards
                        </div>
                        <div className='py-3 px-4' style={{ whiteSpace:'nowrap',borderRadius:'.25rem' }}>
                            Referral Rewards
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex ml-4'>
                            <Icon icon="HeroLanguage"></Icon>
                            <span>Rule</span>
                        </div>
                        <div className='flex ml-4'>
                            <Icon icon="HeroLanguage"></Icon>
                            <span>History</span>
                        </div>
                    </div>
                </div>
                <div className='mt-6 bg-[#fff] p-4 py-10 flex justify-center'>
                    <Empty></Empty>
                </div>
            </>
            :affiliate[2].active ? 
            <>
                <div className='py-6 px-7 bg-[#fff] mt-6 flex justify-between'>
                    <div className='flex w-1/2 justify-between'>
                        <div className='flex flex-col'>
                            <span className='text-lg'>Referral Code Created</span>
                            <span style={{ fontSize:"2rem" }} className='mt-2'>0/0</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-lg'>Friends</span>
                            <span style={{ fontSize:"2rem" }} className='mt-2'>0/0</span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <Button
                            style={{
                                height:'3rem',
                                backgroundColor: '#1d803ab3',
                                color: '#fff',
                                padding: '10px 30px',
                                fontSize: '14px',
                                backgroundImage:'conic-gradient(from 1turn, rgba(88, 175, 16, 1), rgba(29, 128, 58, 1))',
                                border:'none',
                            }}
                            className="profile-button">
                            Create Code
                        </Button>
                    </div>
                </div>
                <div className='mt-6 flex items-center justify-between'>
                    <div className='p-2 bg-[#fff] flex' style={{ width:'fit-content' }}>
                        <div className='bg-[#EAECF3] py-3 px-4 font-bold' style={{ whiteSpace:'nowrap',borderRadius:'.25rem' }}>
                            Referral Code
                        </div>
                        <div className='py-3 px-4' style={{ whiteSpace:'nowrap',borderRadius:'.25rem' }}>
                            Friends
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex ml-4 text-sm'>
                            <span>Data Calculation Rules:<br/>
                                Wager Amount and Commission Rewards within the Last 3 Months.</span>
                        </div>
                    </div>
                </div>
                <div className='mt-6 bg-[#fff] p-4 py-10 flex justify-center items-center' style={{ minHeight:'31.25rem' }}>
                    <Empty></Empty>
                </div>
            </>
            :affiliate[3].active ?
            <>
                <div className='bg-[#fff] p-6 mt-6 transition-all duration-1000 relative'>
                    <span className='font-bold text-base text-[#000]'>Commission Reward Rate</span>
                    <div className='flex mt-4 gap-5'>
                        <div className='flex flex-col gap-5' style={{ width:'65%' }}>
                            <div style={{ height:"10rem" }} className='flex flex-col p-4 bg-[#F8F9FB] relative overflow-hidden'>
                                <span className='text-[#000000] font-bold' style={{ fontSize:'1.5rem' }}>Casino</span>
                                <div className='flex'>
                                    <div className='flex flex-col mt-4 pr-10 border-r border-solid border-gray-300'>
                                        <span>The Original Games</span>
                                        <span className='bg-[#fff] py-2 px-3 mt-4'>Wager× 1% ×Commission Rate×28%</span>
                                    </div>
                                    <div className='flex flex-col mt-4 pl-10'>
                                        <span>The Original Games</span>
                                        <span className='bg-[#fff] py-2 px-3 mt-4'>Wager× 1% ×Commission Rate×28%</span>
                                    </div>
                                </div>
                                <Image className='absolute' style={{ right:0,top:0 ,height:"120%",width:'auto'}} src={Peaches} alt=""></Image>
                            </div>
                            <div style={{ height:"10rem" }} className='flex flex-col p-4 bg-[#F8F9FB] relative overflow-hidden'>
                                <span className='text-[#000000] font-bold' style={{ fontSize:'1.5rem' }}>Casino</span>
                                <div className='flex'>
                                    <div className='flex flex-col mt-4 pr-10 border-r border-solid border-gray-300'>
                                        <span>The Original Games</span>
                                        <span className='bg-[#fff] py-2 px-3 mt-4'>Wager× 1% ×Commission Rate×28%</span>
                                    </div>
                                    <div className='flex flex-col mt-4 pl-10'>
                                        <span>The Original Games</span>
                                        <span className='bg-[#fff] py-2 px-3 mt-4'>Wager× 1% ×Commission Rate×28%</span>
                                    </div>
                                </div>
                                <Image className='absolute' style={{ right:0,top:0 ,height:"120%",width:'auto'}} src={Peaches} alt=""></Image>
                            </div>
                        </div>
                        <div className='p-4 bg-[#F8F9FB] w-full flex-1'>
                            <div className='pb-4 border-b border-solid border-gray-300 w-full flex justify-between'>
                                <div className='flex'>
                                    <Icon icon='HeroLanguage'></Icon>
                                    <span className='ml-2'>Commission Calculator</span>
                                </div>
                                <div className='flex'>
                                    <Image className='w-4 h-4' src={USDT} alt=""></Image>
                                    <span className='ml-2 font-bold'>USDT</span>
                                </div>
                            </div>
                            <div className='py-5 flex items-end'>
                                <div className='flex flex-col'>
                                    <span>Wager (USDT)</span>
                                    <Input className='mt-4 bg-[#F1F3F7] text-[#000]' type="number"></Input>
                                </div>
                                <div className='mb-4 ml-4 mr-4' style={{ whiteSpace:'nowrap' }}>
                                    × 1% ×
                                </div>
                                <div className='flex flex-col'>
                                    <span>Commission Rate</span>
                                    <Input className='mt-4 bg-[#F1F3F7] text-[#000]' type="number"></Input>
                                </div>
                                <div className='mb-4 ml-4'>
                                    %
                                </div>
                            </div>
                            <div className='flex items-end'>
                                <div className='w-full flex flex-col'>
                                    <span>Game</span>
                                    <div className='px-5 mt-4 h-10 flex justify-between bg-[#F1F3F7] items-center w-full'>
                                        <span>Original Games (28%)</span>
                                        <Icon icon='HeroLanguage'></Icon>
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold mt-6' style={{ fontSize:'2rem' }}>
                                =0.70 USDT
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-6' style={ rulesShow ? { display:'flex' } : { display:'none' }}>
                        <span className='font-bold text-base mb-3'>Rules</span>
                        <div className='flex-col flex'>
                            <span className='text-[#999] my-3'>
                                In any public environment (eg, universities, schools, libraries, and office spaces), only one commission can be paid to each user, 
                                IP address, electronic device, home, phone number, billing method, email address, and computer and IP address shared with others.
                            </span>
                            <span className='text-[#999] my-3'>
                                Our decision to draw a bet will be based entirely on our discretion after a deposit is made and a bet is successfully placed.
                            </span>
                            <span className='text-[#999] my-3'>
                                We support the majority of currencies on the market. Commissions can be withdrawn into our internal BCgame wallet at anytime.
                                (View your commission extraction in the dashboard and view the balance in the wallet).
                            </span>
                            <span className='text-[#999] my-3'>
                                The system calculates the commission every 24 hours.
                            </span>
                        </div>
                    </div>
                    <div className='flex mt-4 text-center text-[#3BC117] justify-center cursor-pointer'>
                        <span className='flex' onClick={() => changeRuleShow()} style={{ whiteSpace:'nowrap' }}>
                            View Rules<Icon className='ml-2' icon='HeroLanguage'></Icon>
                        </span>
                    </div>
                </div>
                <div className='bg-[#fff] p-6 mt-6 transition-all duration-1000 relative'>
                    <span className='font-bold text-base text-[#000]'>How to Get your Referral Reward</span>
                    <div className='flex items-center gap-5'>
                        <div className='bg-[#F8F9FB] flex p-4 mt-4 w-1/3 relative'>
                            <span className='text-[#3BC117] font-bold' style={{ fontSize:'2.25rem' }}>1</span>
                            <div className='flex flex-col ml-4'>
                                <span>
                                    <span className='text-[#3BC117]'>Share</span>
                                    <span className='ml-2'>Share to friends</span>
                                </span>
                                <span className='text-sm mt-2 mb-8'>
                                    Share your referral link or code to your friends
                                </span>
                            </div>
                            <Image src={User} alt="" className='absolute' style={{ right:'0',top:'0',height:'100%',width:'auto' }}>

                            </Image>
                        </div>
                        <div className='bg-[#F8F9FB] flex p-4 mt-4 w-1/3 relative'>
                            <span className='text-[#3BC117] font-bold' style={{ fontSize:'2.25rem' }}>2</span>
                            <div className='flex flex-col ml-4'>
                                <span>
                                    <span className=''>Get</span>
                                    <span className='ml-2 text-[#3BC117]'>$1000</span>
                                </span>
                                <span className='text-sm mt-2 mb-8'>
                                    Your awards will be locked for now
                                </span>
                            </div>
                            <Image src={User} alt="" className='absolute' style={{ right:'0',top:'0',height:'100%',width:'auto' }}>

                            </Image>
                        </div>
                        <div className='bg-[#F8F9FB] flex p-4 mt-4 w-1/3 relative'>
                            <span className='text-[#3BC117] font-bold' style={{ fontSize:'2.25rem' }}>3</span>
                            <div className='flex flex-col ml-4'>
                                <span>
                                    <span className=''>Level Up &</span>
                                    <span className='ml-2 text-[#3BC117]'>Receive</span>
                                </span>
                                <span className='text-sm mt-2 mb-8' style={{ position:'relative',zIndex:1 }}>
                                    Your friend’s VIP level will unlock your awards (see rules below)
                                </span>
                            </div>
                            <Image src={User} alt="" className='absolute' style={{ zIndex:0,right:'0',top:'0',height:'100%',width:'auto' }}>

                            </Image>
                        </div>
                    </div>
                    <div className='text-base text-[#000] mt-4'>Requirements</div>
                    <div className='p-3 bg-[#F5F6FA] mt-4'>
                        <div className='flex flex-col'>
                            <div className='flex bg-[#F5F6FA] h-9 items-center px-2'>
                                <div className='' style={{ width:'33%' }}>
                                    Friend’s Level	
                                </div>  
                                <div className='' style={{ width:'33%' }}>
                                    Total Wager
                                </div>
                                <div className='' style={{ width:'33%' }}>
                                    Unlock Amount
                                </div>
                            </div>
                            <div className='bg-[#fff] flex h-16 items-center px-2'>
                                <div className='flex items-center' style={{ width:'33%' }}>
                                    <Image className='w-4 h-4' src={USDT} alt=''></Image>
                                    <span className='ml-2'>VIP 04</span>
                                </div>  
                                <div className='' style={{ width:'33%' }}>
                                    1000
                                </div>
                                <div className='flex items-center' style={{ width:'33%' }}>
                                    <Image className='w-4 h-4' src={USDT} alt=''></Image>
                                    <span className='ml-2 text-[#FFAD00]'>+0.50</span>
                                </div>
                            </div>
                            <div className='flex h-16 items-center px-2'>
                                <div className='flex items-center' style={{ width:'33%' }}>
                                    <Image className='w-4 h-4' src={USDT} alt=''></Image>
                                    <span className='ml-2'>VIP 04</span>
                                </div>  
                                <div className='' style={{ width:'33%' }}>
                                    1000
                                </div>
                                <div className='flex items-center' style={{ width:'33%' }}>
                                    <Image className='w-4 h-4' src={USDT} alt=''></Image>
                                    <span className='ml-2 text-[#FFAD00]'>+0.50</span>
                                </div>
                            </div>
                            <div className='bg-[#fff] flex h-16 items-center px-2'>
                                <div className='flex items-center' style={{ width:'33%' }}>
                                    <Image className='w-4 h-4' src={USDT} alt=''></Image>
                                    <span className='ml-2'>VIP 04</span>
                                </div>  
                                <div className='' style={{ width:'33%' }}>
                                    1000
                                </div>
                                <div className='flex items-center' style={{ width:'33%' }}>
                                    <Image className='w-4 h-4' src={USDT} alt=''></Image>
                                    <span className='ml-2 text-[#FFAD00]'>+0.50</span>
                                </div>
                            </div>
                            <div className='flex h-16 items-center px-2'>
                                <div className='flex items-center' style={{ width:'33%' }}>
                                    <Image className='w-4 h-4' src={USDT} alt=''></Image>
                                    <span className='ml-2'>VIP 04</span>
                                </div>  
                                <div className='' style={{ width:'33%' }}>
                                    1000
                                </div>
                                <div className='flex items-center' style={{ width:'33%' }}>
                                    <Image className='w-4 h-4' src={USDT} alt=''></Image>
                                    <span className='ml-2 text-[#FFAD00]'>+0.50</span>
                                </div>
                            </div>
                            <div className='bg-[#fff] flex h-16 items-center px-2'>
                                <div className='flex items-center' style={{ width:'33%' }}>
                                    <Image className='w-4 h-4' src={USDT} alt=''></Image>
                                    <span className='ml-2'>VIP 04</span>
                                </div>  
                                <div className='' style={{ width:'33%' }}>
                                    1000
                                </div>
                                <div className='flex items-center' style={{ width:'33%' }}>
                                    <Image className='w-4 h-4' src={USDT} alt=''></Image>
                                    <span className='ml-2 text-[#FFAD00]'>+0.50</span>
                                </div>
                            </div>
                            <div className='flex h-16 items-center px-2'>
                                <div className='flex items-center' style={{ width:'33%' }}>
                                    <Image className='w-4 h-4' src={USDT} alt=''></Image>
                                    <span className='ml-2'>VIP 04</span>
                                </div>  
                                <div className='' style={{ width:'33%' }}>
                                    1000
                                </div>
                                <div className='flex items-center' style={{ width:'33%' }}>
                                    <Image className='w-4 h-4' src={USDT} alt=''></Image>
                                    <span className='ml-2 text-[#FFAD00]'>+0.50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            :
            <>
                <div className='gap-5 mt-6 flex'>
                    <div className='w-1/2 bg-[#fff] flex flex-col rounded-md overflow-hidden'>
                        <Image src={Banner} alt="" style={{ height:'300px' }}></Image>
                        <div className='flex flex-col p-5'>
                            <span className='text-[#32343b] mb-2'>Banner Pack</span>
                            <span className='text-[#999]'>Multilingual Package including events, animated banners, and more...</span>
                            <div className='mt-6 text-[#fff] flex' style={{ 
                                padding:"1rem 1.5rem",
                                backgroundColor:'#6e34e2b3',
                                backgroundImage:'conic-gradient(from 1turn, rgba(136, 83, 252, .7), rgba(110, 52, 226, .7))',
                                whiteSpace:'nowrap',
                                width:'fit-content',
                                borderRadius:'.25rem'
                            }}>
                                Download(200MB)<Icon icon="HeroLanguage"></Icon>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 bg-[#fff]'>
                        <Image src={Banner} alt="" style={{ height:'300px' }}></Image>
                        <div className='flex flex-col p-5'>
                            <span className='text-[#32343b] mb-2'>Graphics Pack</span>
                            <span className='text-[#999]'>Web design components including Coco, logo, gaming elements, and UI Assets</span>
                            <div className='mt-6 text-[#fff] flex' style={{ 
                                padding:"1rem 1.5rem",
                                backgroundColor:'#6e34e2b3',
                                backgroundImage:'conic-gradient(from 1turn, rgba(136, 83, 252, .7), rgba(110, 52, 226, .7))',
                                whiteSpace:'nowrap',
                                width:'fit-content',
                                borderRadius:'.25rem'
                            }}>
                                Download(200MB)<Icon icon="HeroLanguage"></Icon>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
    </div>
}