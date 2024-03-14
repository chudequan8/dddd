import { FC, forwardRef, useState } from "react"
import Input, { InputProps } from "./Input"
import classNames from "classnames"

type PasswordInputProps = Omit<InputProps, 'suffix' | 'type'> & {

}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({
  ...props
}, ref) => {
  const [ hidden, setHidden ] = useState(true)

  return (
    <Input
      ref={ref}
      type={hidden ? 'password' : 'text'}
      suffix={
        <i
          className={classNames('ml-1 cursor-pointer', hidden ? 'icon-pwd-hidden' : 'icon-pwd-show')}
          onClick={() => {
            setHidden(!hidden)
          }}
        />
      }
      {...props}
    />
  )
})

export default PasswordInput