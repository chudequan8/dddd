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
            <div className='flex items-center justify-center rounded-md bg-1h443ei px-6 py-2 my-4 text-lg text-[#98A7B5] transition-[300]'>
                {
                    option.map((t, i) => (<>
                        <Link className={i != optionLen ? 'mr-2' : 'text-title hover:text-title cursor-pointer'} href={t.to || ''} key={i}>{t.name}</Link>
                        { i != optionLen && (<div className='mr-2'>{split}</div>)}
                    </>))
                }
            </div>
        </div>
	);
};

export default BreadCrumb;
