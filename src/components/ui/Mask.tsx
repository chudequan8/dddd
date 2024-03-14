'use client'

import classNames from "classnames"
import { Children, FC, ReactNode, cloneElement, isValidElement, useRef, useState } from "react"

export const useMaskProps = () => {
  const [open, setOpen] = useState(false)

  return {
    open,
    setOpen
  }
}

export type MaskProps = ReturnType<typeof useMaskProps> & {
  maskClosable?: boolean
  children: ReactNode
}

const Mask: FC<MaskProps> = ({
  children,
  maskClosable = true,
  open, setOpen
}) => {
  const mask = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={mask}
      className={
        classNames(
          "fixed left-0 top-0 bottom-0 right-0 z-[1001] bg-black/30 flex justify-center items-center transition-opacity",
          open ? 'opacity-100' : 'pointer-events-none opacity-0 ease-in-out'
        )
      }
      onClick={(evt) => {
        if (evt.target === mask.current && maskClosable) {
          setOpen(false)
        }
      }}
    >
      {Children.map(children, (child) => isValidElement(child) ? cloneElement(child, {
        ...child.props,
        className: classNames(child.props?.className, 'relative'),
        children: (
          <>
            {child.props?.children}
            <i
              className="iconfont icon-error absolute top-6 right-6 text-[var(--text-color-2)] text-base cursor-pointer hover:rotate-180 transition-transform duration-75"
              onClick={() => {
                setOpen(false)
              }}
            />
          </>
        )
      }) : child)}
    </div>
  )
}

export default Mask