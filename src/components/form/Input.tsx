import classNames from "classnames"
import { InputHTMLAttributes, ReactNode, forwardRef, useImperativeHandle, useRef, useState } from "react"

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> & {
  suffix?: ReactNode
  prefix?: ReactNode
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  onChange,
  defaultValue,
  value,
  suffix,
  prefix,
  ...props
}, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [ isEmpty, setIsEmpty ] = useState(!!(defaultValue || value || true))

  useImperativeHandle(ref, () => inputRef.current!)

  return (
    <div className={classNames("w-full h-11 border border-solid border-transparent p-3 bg-[var(--bg5)] text-[var(--text-color-2)] text-sm rounded-lg has-[:focus]:border-[var(--primary-color)] hover:border-[var(--primary-color)] group flex items-center", className)}>
      {prefix}
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        value={value}
        className="peer placeholder:text-[var(--note)] w-full flex-1"
        onChange={(evt) => {
          const value = evt.target.value
          setIsEmpty(!!value)
          onChange?.(evt)
        }}
        {...props}
      />
      <i
        className={classNames("iconfont icon-clear-fill text-[var(--note)] cursor-pointer hidden", {
          'group-hover:block peer-[:focus]:block': isEmpty
        })}
        onClick={() => {
          if(inputRef.current) {
            inputRef.current.value = ''
          }
        }}
      />
      {suffix}
    </div>
  )
})

export default Input