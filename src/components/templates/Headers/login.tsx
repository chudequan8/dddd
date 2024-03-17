'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import ButtonGroup from '@/components/ui/ButtonGroup';
import useFontSize from '@/hooks/useFontSize';
import { Modal, ConfigProvider } from 'antd';
import type { TabsProps } from 'antd';
import loginLeft from '@/assets/login/signup.webp';
import Image from 'next/image';
import themeConfig from '@/config/theme.config';
import classNames from 'classnames';
import useColorIntensity from '@/hooks/useColorIntensity';
import Input from '@/components/form/Input';


const loginModal = () => {
	const { fontSize, setFontSize } = useFontSize();
	const [show, setShow] = useState(false);
	const items: TabsProps['items'] = [
		{
			key: 'Email',
			label: 'Email',
		},
		{
			key: 'Phone Number',
			label: 'Phone Number',
		},
	];
	const onChange = () => {};

	console.log("themeConfig",themeConfig)

	const { textColor, shadeColorIntensity } = useColorIntensity(themeConfig.themeColorShade);

	const fontClasses = classNames(
		'font-bold text-base',
		`text-[#000] dark:text-[#fff]`
	)

	const classesInput = classNames(
		'mt-5 h-11 px-3',
		`bg-[#fff] dark:bg-[#000]`
	)

	const loginMethodArray = [
		{
			name:"Google",
			icon:"HeroGoogleLogin"
		},
		{
			name:"Telegram",
			icon:"HeroGoogleLogin"
		},
		{
			name:"MetaMask",
			icon:"HeroGoogleLogin"
		},
		{
			name:"WalletConnect",
			icon:"HeroGoogleLogin"
		},
		{
			name:"HeroWhatsApp",
			icon:"HeroGoogleLogin"
		},
		{
			name:"Line",
			icon:"HeroGoogleLogin"
		},
		{
			name:"Steam",
			icon:"HeroGoogleLogin"
		}
	]

	return (
		<>
			<ButtonGroup>
				<Button style={{ fontSize: '14px' }} onClick={() => setShow(true)} className="mr-2">
					Sign in
				</Button>
				<Button
					style={{
						backgroundColor: '#1d803ab3',
						color: '#fff',
						padding: '10px 30px',
						fontSize: '14px',
						backgroundImage:'conic-gradient(from 1turn, rgba(88, 175, 16, 1), rgba(29, 128, 58, 1))',
						border:'none',
					}}
					onClick={() => setShow(true)}>
					Sign up
				</Button>
			</ButtonGroup>
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
					width={'800px'}>
					<div
						className='flex justify-between'
						style={{ width: '100%', height: '630px' }}>
						<Image
							src={loginLeft}
							alt=''
							style={{ width: '50%', height: 'auto' }}
						/>
						<div 
							className='flex flex-col justify-between p-12'
							style={{ width:'50%' }}
						>
							<div
								className='flex flex-col'
							>
								<span
									className={fontClasses}
								>
									Sign In
								</span>
								<Input className={classesInput} name="account" placeholder='Email / Phone Number' />
								<Input className={classesInput} name="password" placeholder='Login Password' />
								<span className={`${fontClasses} mt-4 text-right`}>
									Forgot your password?
								</span>
								<Button
									style={{
										backgroundColor: '#1d803ab3',
										color: '#fff',
										padding: '10px 30px',
										fontSize: '14px',
										backgroundImage:'conic-gradient(from 1turn, rgba(88, 175, 16, 1), rgba(29, 128, 58, 1))',
										border:'none',
									}}
									className='mt-4 font-bold'
									onClick={() => {}}>
									Sign up
								</Button>
								<span className="mt-4">
									<span className={`${fontClasses} text-sm`}>
										New to bc.game?
									</span>
									<span className="ml-2 text-base text-[#3BC117] font-bold">
										Create account
									</span>
								</span>
							</div>
							<div className='flex flex-col'>
								<div className='flex justify-between items-center'>
									<div style={{ height:1 }} className=' bg-[#98A7B5] flex-1'>

									</div>
									<span className='text-[#98A7B5] mr-4 ml-4'>
										Log in directly with
									</span>
									<div style={{ height:1 }} className=' bg-[#98A7B5] flex-1'>

									</div>
								</div>
								<div className="flex justify-between items-center mt-4">
									{
										loginMethodArray.map(item => {
											return <div className='w-10 h-10 border-[#565F70] border rounded'>
												<Button
													icon={item.icon}
													children=''
													className="m-0-svg-button hw-100-button-svg"
													style={{ padding:'0' }}
												/>
												{/* <Icon
													icon='HeroGoogleLogin'
													style={{ padding:'0',width:'100%',height:'100%'}}
												/> */}
											</div>
										})
									}
								</div>
							</div>
						</div>
					</div>
				</Modal>
			</ConfigProvider>
		</>
	);
};
<style></style>;
export default loginModal;
