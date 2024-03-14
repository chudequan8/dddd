import { FC, ReactNode } from "react"

const LoginTitle: FC<{
  children: ReactNode
}> = ({
  children
}) => {
  return (
    <div className="text-base text-[var(--text-color)] font-semibold mb-4">
      {children}
    </div>
  )
}

export default LoginTitle