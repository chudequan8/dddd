import React, { FC } from 'react';
import classNames from 'classnames';
import { TRounded } from '@/types/rounded.type';
import themeConfig from '@/config/theme.config';
import Link from 'next/link';

type BreadCrumbItemProps = {
    name: string;
    to?: string;
}
interface BreadCrumbProps {
	option: BreadCrumbItemProps[];
    split?: string
}
const BreadCrumb: FC<BreadCrumbProps> = (props) => {
	const { option, split = '>' } = props;
    let optionLen = option.length-1
	return (
        <div className='flex'>
            <div className='flex cursor-pointer items-center justify-center rounded-[4px] bg-[#1D1E22] px-[18px] py-2 my-4 text-[14px] text-[#98A7B5] transition-[300] hover:bg-[#2D3035]  hover:text-[#FFF]'>
                {
                    option.map((t, i) => (<>
                        <Link className='mr-2' href={t.to || ''}>{t.name}</Link>
                        { i != optionLen && (<div className='mr-2'>{split}</div>)}
                    </>))
                }
                
                
            </div>
        </div>
	);
};

export default BreadCrumb;
