'use client';

import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { useTheme } from '@/context/themeContext';

interface IAsideWrapperProps {
	children: ReactNode;
	className?: string;
}
const AsideWrapper: FC<IAsideWrapperProps> = (props) => {
	const { children, className, ...rest } = props;

	const { asideStatus, messageStatus } = useTheme();
	
	return (
		<section
			data-component-name='AsideWrapper'
			className={classNames('flex flex-auto flex-col', className, {
				'ltr:peer-[]:md:pl-[20rem] rtl:peer-[]:md:pr-[20rem]': asideStatus,
				'ltr:peer-[]:md:pr-[22.5rem] rtl:peer-[]:md:pl-[22.5rem]': messageStatus,
				// Mobile Design
				'ltr:peer-[]:md:pl-[6.225em] rtl:peer-[]:md:pr-[6.225em]': !asideStatus,
			})}
			{...rest}>
			{children}
		</section>
	);
};

export default AsideWrapper;
