import classNames from "classnames"
import { FC, useState } from "react"
import { useTranslation } from "react-i18next";

export const tabs = ['Username', 'Phone Number', 'Email']

export const useLoginTabsProps = () => {
  const [ tabIndex, setTabIndex ] = useState(1)

  return {
    tabIndex,
    setTabIndex
  }
}

const LoginTabs: FC<ReturnType<typeof useLoginTabsProps>> = ({
  tabIndex,
  setTabIndex
}) => {
  const { t } = useTranslation();

  return (
    <div
      role="tablist"
      className="tabs flex"
    >
      {tabs.map((v, i) => (
        <a
          key={i}
          role="tab"
          className={classNames('h-[50px] tab flex-1 text-[var(--text-color-2)] border-b-2 border-solid border-transparent', {
            'text-[var(--text-color)] font-bold !border-[var(--primary-color)]': tabIndex == i
          })}
          style={{
            '--tab-padding': 0
          } as any}
          onClick={() => {
            setTabIndex(i)
          }}
        >
          {t(v)}
        </a>
      ))}
    </div>
  )
}

export default LoginTabs