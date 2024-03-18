import React,{ FC,HTMLAttributes } from "react"
import { Switch as ASwitch } from "antd"
import classNames from "classnames";

export type TSwitchSize = 'default' | 'small'

interface ISwitchProps extends HTMLAttributes<HTMLDivElement> {
    checked?:boolean;
    text?:string;
    size?:TSwitchSize;
    onChange?:any;
}

const Switch:FC<ISwitchProps> = (props) => {
    const {
        checked,
        text,
        size,
        onChange
    } = props
    
    const sclasses = classNames(
        'dark:bg-[#3A4047]'
    )

    return <div>
        <ASwitch className={sclasses} size={size} checked={checked} onChange={onChange}></ASwitch>
        {
            text 
            ?
            <span className="text-sm ml-1"> 
                { text } 
            </span>
            :
            <>
            </>
        }
    </div>
}

Switch.displayName = 'Switch';

export default Switch;