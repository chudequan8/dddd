import React, {HTMLAttributes, ReactNode} from "react";
import classNames from 'classnames';
import Icon from "@/components/icon/Icon";
import { TIcons } from '@/types/icons.type';
export type TButtonSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl';
import { TBorderWidth } from '@/types/borderWidth.type';
import { TColorIntensity } from '@/types/colorIntensities.type';
import { TRounded } from '@/types/rounded.type';
import { TColors } from '@/types/colors.type';
export type TButtonVariants = 'solid' | 'outline' | 'default';
import useColorIntensity from '@/hooks/useColorIntensity';
import themeConfig from '@/config/theme.config';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
	borderWidth?: TBorderWidth;
	children?: ReactNode;
	className?: string;
	color?: TColors;
	colorIntensity?: TColorIntensity;
	icon?: TIcons;
	isActive?: boolean;
	isDisable?: boolean;
	isLoading?: boolean;
	rightIcon?: TIcons;
	rounded?: TRounded;
	size?: TButtonSize;
	variant?: TButtonVariants;
	hover?: boolean
	log?: boolean
}

const Button = React.forwardRef(function (props: IButtonProps, ref) {
    const {
        onClick,
		borderWidth = themeConfig.borderWidth,
		children,
		className,
		color = themeConfig.themeColor,
		colorIntensity = themeConfig.themeColorShade,
		icon,
		isActive = false,
		isDisable = false,
		isLoading = false,
		rightIcon,
		rounded = themeConfig.rounded,
		size = 'sm',
		variant = 'default',
		hover = false,
		log,
		...rest
    } = props

    const HAS_CHILDREN = typeof children !== 'undefined';

	const { textColor, shadeColorIntensity } = useColorIntensity(colorIntensity);

	/**
	 * Variant & Color & Status
	 */
	const btnVariants: { [key in TButtonVariants]: string } = {
		solid: classNames(
			// Default
			{
				[`bg-${color}-${colorIntensity}`]: !isActive,
			},
			[`${borderWidth} border-${color}-${colorIntensity}`],
			[`${textColor}`],
			// Hover
			[`hover:bg-${color}-${shadeColorIntensity as TColorIntensity}`],
			[`hover:border-${color}-${shadeColorIntensity as TColorIntensity}`],
			// Active
			[`active:bg-${color}-${shadeColorIntensity as TColorIntensity}`],
			[`active:border-${color}-${shadeColorIntensity as TColorIntensity}`],
			{
				[`bg-${color}-${shadeColorIntensity as TColorIntensity}`]: isActive,
				[`border-${color}-${shadeColorIntensity as TColorIntensity}`]: isActive,
			},
		),
		outline: classNames(
			// Default
			'bg-transparent',
			[`${borderWidth}`],
			{
				[`border-${color}-${colorIntensity}/50`]: !isActive,
			},
			'text-black dark:text-white',
			// Hover
			[`hover:border-${color}-${colorIntensity}`],
			// Active
			[`active:border-${color}-${colorIntensity}`],
			{
				[`border-${color}-${colorIntensity}`]: isActive,
			},
		),
		default: classNames(
			// Default
			{ 'text-zinc-600 dark:text-zinc-400': !isActive },
			[`${borderWidth}`],
			'border-transparent',
			// Hover
			[`hover:text-${color}-${colorIntensity} dark:hover:text-${color}-${colorIntensity}`],
			// Active
			[`active:text-${color}-${colorIntensity}`],
			{
				[`text-${color}-${colorIntensity}`]: isActive,
			},
		),
	};
	const btnVariantClasses = btnVariants[variant];

    const btnSizes: {
		[key in TButtonSize]: { general: string; icon: string; rightIcon: string };
	} = {
		xs: {
			general: classNames(
				{
					'px-3': HAS_CHILDREN,
					'px-0.5': !HAS_CHILDREN,
				},
				'py-0.5',
				'text-xs',
			),
			icon: classNames({ 'ltr:mr-1 rtl:ml-1': HAS_CHILDREN }, 'text-[1.125rem]'),
			rightIcon: classNames('ltr:ml-1', 'rtl:mr-1', 'text-[1.125rem]'),
		},
		sm: {
			general: classNames(
				{
					'px-4': HAS_CHILDREN,
					'px-1': !HAS_CHILDREN,
				},
				'py-1',
				'text-sm',
			),
			icon: classNames({ 'ltr:mr-1 rtl:ml-1': HAS_CHILDREN }, 'text-[1.25rem]'),
			rightIcon: classNames('ltr:ml-1', 'rtl:mr-1', 'text-[1.25rem]'),
		},
		default: {
			general: classNames(
				{
					'px-5': HAS_CHILDREN,
					'px-1.5': !HAS_CHILDREN,
				},
				'py-1.5',
				'text-md',
			),
			icon: classNames({ 'ltr:mr-1.5 rtl:ml-1.5': HAS_CHILDREN }, 'text-[1.25rem]'),
			rightIcon: classNames('ltr:ml-1.5', 'rtl:mr-1.5', 'text-[1.25rem]'),
		},
		lg: {
			general: classNames(
				{
					'px-6': HAS_CHILDREN,
					'px-2': !HAS_CHILDREN,
				},
				'py-2',
				'text-lg',
			),
			icon: classNames({ 'ltr:mr-2 rtl:ml-2': HAS_CHILDREN }, 'text-[1.75rem]'),
			rightIcon: classNames('ltr:ml-2', 'rtl:mr-2', 'text-[1.75rem]'),
		},
		xl: {
			general: classNames(
				{
					'px-7': HAS_CHILDREN,
					'px-2.5': !HAS_CHILDREN,
				},
				'py-2.5',
				'text-xl',
			),
			icon: classNames({ 'ltr:mr-2.5 rtl:ml-2.5': HAS_CHILDREN }, 'text-[1.75rem]'),
			rightIcon: classNames('ltr:ml-2.5', 'rtl:mr-2.5'),
		},
	};
	const btnSizeClasses = btnSizes[size].general;
	const btnIconClasses = btnSizes[size].icon;
	const btnRightIconClasses = HAS_CHILDREN ? btnSizes[size].rightIcon : undefined;
    
	/**
	 * Disable
	 */
	const btnDisabledClasses = 'opacity-50 pointer-events-none';
	const classes = classNames(
		hover ?
			'flex cursor-pointer items-center justify-center rounded-[4px] bg-15xysm6 px-[18px] py-3 text-[14px] text-[#98A7B5] transition-[300] hover:bg-[#2D3035]  hover:text-[#FFF]' :
			'inline-flex items-center justify-center',
		btnVariantClasses,
		btnSizeClasses,
		rounded,
		themeConfig.transition,
		{ [`${btnDisabledClasses}`]: isDisable || isLoading },
		className,
	)
	if (log) {
		console.log(props, 'log props');
		console.log(classes, 'log classes');
		
	}
    return (
        <button ref={ref} data-component-name='Button' type='button' className={classes} onClick={onClick} {...rest}>
			{
				icon ? <Icon
					icon={icon as TIcons}
					className={classNames({ 'animate-spin': isLoading }, btnIconClasses)}
				/> : undefined
			}
            
            {children}
			{!!rightIcon && <Icon icon={rightIcon} className={classNames(btnRightIconClasses)} />}
        </button>
    )
})

Button.displayName = 'Button'

export default Button
