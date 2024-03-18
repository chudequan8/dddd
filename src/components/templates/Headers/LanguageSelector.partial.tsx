'use client';

import React, { useContext, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import {LangType} from '@/types/lang.type';
import ThemeContext from '@/context/themeContext';
import dayjs from 'dayjs';
import Button from '@/components/ui/Button';
import LANG from '@/constants/lang.constant';
import i18nConfig from '../../../../i18nConfig';
import { ConfigProvider, Modal, Tabs, TabsProps } from 'antd';
import Image from 'next/image';

import US from "@/assets/coin/us.png"

const LanguageSelectorPartial = () => {
	const { setLanguage, setDir } = useContext(ThemeContext);

	const { i18n } = useTranslation();
	const currentLocale = i18n.language;
	const router = useRouter();
	const currentPathname = usePathname();

	const handleChange = (newLocale: LangType.Lang) => {
		// set cookie for next-i18n-router
		const days = 30;
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = `; expires=${date.toUTCString()}`;
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

		// redirect to the new locale path
		if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
			i18n.changeLanguage(newLocale)
				.then(() => {
					localStorage.setItem('fyr_language', newLocale);
					localStorage.setItem('fyr_dir', i18n.dir());
				})
				.then(() => {
					setLanguage(newLocale);
					setDir(i18n.dir());
				})
				.then(() => {
					// Changing the global locale doesn't affect existing instances.
					// more information: https://day.js.org/docs/en/i18n/changing-locale
					// If you want the current instances to change instantly: dayjs().locale(i18n.language)
					dayjs.locale(newLocale);
				})
				.then(() => {
					router.push(`/${newLocale}${currentPathname}`);
				})
				.catch(() => {});
		} else {
			i18n.changeLanguage(newLocale)
				.then(() => {
					localStorage.setItem('fyr_language', newLocale);
					localStorage.setItem('fyr_dir', i18n.dir());
				})
				.then(() => {
					setLanguage(newLocale);
					setDir(i18n.dir());
				})
				.then(() => {
					// Changing the global locale doesn't affect existing instances.
					// more information: https://day.js.org/docs/en/i18n/changing-locale
					// If you want the current instances to change instantly: dayjs().locale(i18n.language)
					dayjs.locale(newLocale);
				})
				.then(() => {
					router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
				})
				.catch(() => {});
		}

		router.refresh();
	};

	const langArray = Object.values(LANG);

	const items: TabsProps['items'] = [
		{
		  key: '1',
		  label: 'Language',
		  children: <>
		  	{
				langArray.map((item, index) => {
					return <Button
						key={index}
						icon=""
						children={item.text}
						className='text-lg font-bold w-[25%] mb-4 dark:bg-[#2D3035] dark:hover:text-white'
					>
					</Button>
				})
			}
		  </>,
		},
		{
		  key: '2',
		  label: 'View in fiat',
		  children: 'Content of Tab Pane 2',
		},
	];

	const [navArray,setNavArray] = useState([
		{
			name:"Language",
			active:true
		},
		{
			name:"View in fiat",
			active:false
		}
	])

	const [coinArray,setCoinArray] = useState([
		{
			name:"USD",
			description:"US Dollar",
			icon:"",
		},
		{
			name:"USD",
			description:"US Dollar",
			icon:"",
		},
		{
			name:"USD",
			description:"US Dollar",
			icon:"",
		},
		{
			name:"USD",
			description:"US Dollar",
			icon:"",
		}
	])

	const changeActive = (index:number) => {
		const newNavArray = navArray.map((item, index2) => {
			if (index2 !== index) {
				return { ...item, active: false };
			} else {
				return { ...item, active: true };
			}
		});
		setNavArray(newNavArray);
	}
	

	const Content = () => {
		return <div className="flex flex-col" style={{ height:'630px' }}>
			<div className="flex">
				{
					navArray.map((item,index) => {
						return <div onClick={() => { changeActive(index) }} style={item.active ? {boxSizing:"border-box",borderBottom:'0.125rem solid #3BC117'} : { boxSizing:"border-box" }} className='cursor-pointer w-60 h-16 flex justify-center items-center text-[#000] dark:text-[#fff] font-base font-bold'>
							{ item.name }
						</div>
					})
				}
			</div>
			<div className="grid grid-cols-4 p-12">
				{
					navArray[0].active ? 
					langArray.map((item,index) => {
						return <div key={index} className='h-13 flex items-center text-[#000] dark:text-[#fff] cursor-pointer'>
							{
								item.text
							}
						</div>
					})
					:
					coinArray.map((item,index) => {
						return <div key={index} className='h-13 flex items-center cursor-pointer'>
							<Image
								src={US}
								alt={"Avatar"}
								className='h-8 w-8'
							>
							</Image>
							<span className='text-[#000] dark:text-[#fff] ml-3'>
								{item.name}
							</span>
							<span className='text-[#000] dark:text-[#98A7B5] ml-3'>
								{item.description}
							</span>
						</div>
					})
				}
			</div>
		</div>
	}

	const [show,setShow] = useState<boolean>(false);

	return (
		<>
			<Button onClick={ () => { setShow(true) } } icon='HeroLanguage' aria-label='Select Language' />
			<ConfigProvider
				theme={{ hashed: false }}
			>
				<Modal
					style={{ zIndex: 9999999,padding:"0" }}
					className="dark:bg-[#202327] bg-[#F4F4F7] p-0"
					title={null}
					closeIcon={<Button
						icon='HeroAntModalClose'
						children=''
						className="m-0-svg-button"
						style={{ padding:'0' }}
					/>}
					open={show}
					onOk={() => setShow(false)}
					onCancel={() => setShow(false)}
					footer={null}
					width={'800px'}
					>
					<Content/>
				</Modal>
			</ConfigProvider>
		</>
	);
};

export default LanguageSelectorPartial;
