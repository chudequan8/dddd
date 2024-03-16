import React, { forwardRef, HTMLAttributes, memo, ReactNode } from 'react';
import classNames from 'classnames';
import pascalcase from 'pascalcase';
import * as CommonIcon from './common';
import { TIcons } from '@/types/icons.type';
import { TColors } from '@/types/colors.type';
import { TColorIntensity } from '@/types/colorIntensities.type';
import { textColor } from '@/utils/textColor.util';
import { TFontSizes } from '@/types/fontSizes.type';
import { useTheme } from '@/context/themeContext';

interface IRefWrapperProps extends Record<string, any> {
	children: ReactNode;
}
const RefWrapper = forwardRef<HTMLSpanElement, IRefWrapperProps>(({ children }, ref) => {
	if (ref) {
		return (
			<span ref={ref} data-only-ref='true'>
				{children}
			</span>
		);
	}
	return children;
});
RefWrapper.displayName = 'RefWrapper';

export interface IIconProps extends HTMLAttributes<HTMLSpanElement> {
	icon: TIcons;
	className?: string;
	color?: TColors;
	colorIntensity?: TColorIntensity;
	size?: TFontSizes;
}
const Icon = forwardRef<HTMLSpanElement, IIconProps>((props, ref) => {
	const { icon, className, color, colorIntensity, size, ...rest } = props;
	const { isDarkTheme } = useTheme()
	const IconName = pascalcase(icon);
	
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	let CommonIconWrapper = CommonIcon[IconName]
	if (CommonIconWrapper == undefined) {
		CommonIconWrapper = CommonIcon['Nav1'];
	}
	const CLASS_NAMES = classNames(
		'svg-icon',
		{ [`${size as TFontSizes}`]: typeof size !== 'undefined' },
		textColor(color, colorIntensity),
		className,
	);

	return (
		<RefWrapper ref={ref}>
			<CommonIconWrapper
				data-component-name='Icon-B'
				className={CLASS_NAMES}
				{...rest}
			/>
		</RefWrapper>
	)
		
});

export default memo(Icon);
