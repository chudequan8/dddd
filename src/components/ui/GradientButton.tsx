import { FC } from "react"
import Button from "./Button"
import classNames from "classnames"

export type IGradientButton = {
    onClick?: () => void
    type?: 'green' | 'purple'
    className?: string
}


const GradientButton: FC<IGradientButton> = (props) => {
    const { onClick, type = 'green', className } = props
    return (
        <Button
            style={{
                padding: '10px 30px',
                border:'none',
            }}
            icon='HeroSportMenuIcon'
            className={classNames(
                type == 'green' ? 's-conic' : 's-conic2',
                'py-4 border-0',
                className
            )}
            onClick={() => onClick && onClick()}>
            Deposit
        </Button>
    )
}

export default GradientButton