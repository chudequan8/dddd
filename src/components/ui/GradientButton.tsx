import { FC, ReactNode } from "react"
import Button from "./Button"
import classNames from "classnames"

export type IGradientButton = {
    onClick?: () => void
    type?: 'green' | 'purple'
    className?: string
	children?: ReactNode;
    icon?: string
}


const GradientButton: FC<IGradientButton> = (props) => {
    const { onClick, type = 'green', className, children, icon } = props
    return (
        <Button
            style={{
                padding: '10px 30px',
                border:'none',
            }}
            icon={icon}
            className={classNames(
                type == 'green' ? 's-conic' : 's-conic2',
                '!py-4 border-0 !text-base !text-white',
                className
            )}
            onClick={() => onClick && onClick()}>
            {children}
        </Button>
    )
}

export default GradientButton