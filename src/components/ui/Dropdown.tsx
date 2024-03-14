import { useClickAway } from "ahooks"
import classNames from "classnames"
import { FC, ReactElement, ReactNode, cloneElement, useEffect, useMemo, useRef, useState } from "react"

export type DropdownProps = {
  rootClassName?: string
  children: ReactElement
  menu: {
    selectedKey?: string
    onClick?(key: string): void
    items: {
      key: string
      filterLabel?: string
      label: ReactNode
      onClick?(key: string): void
    }[]
  }
}

const Dropdown: FC<DropdownProps> = ({
  children,
  rootClassName,
  menu
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ open, setOpen ] = useState(false)
  const [ filterValue, setFilterValue ] = useState('')
  const filterItems = useMemo(() => menu.items.filter((v) => {
    if(!filterValue) return true
    else if(v.filterLabel) return v.filterLabel.toLowerCase().includes(filterValue.toLowerCase())
    else if(typeof v.label === 'string') return v.label.toLowerCase().includes(filterValue.toLowerCase())
    else false
  }), [menu.items, filterValue])

  useClickAway(() => {
    setOpen(() => false)
  }, containerRef.current)

  return (
    <div className={classNames('relative overflow-hidden', rootClassName)} ref={containerRef}>
      {cloneElement(children, {
        ...children.props,
        className: classNames(children.props.className, 'cursor-pointer'),
        onClick() {
          setOpen(true)
        }
      })}
      <div className={classNames("max-h-[369px] overflow-auto hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 w-full", {
        '!block': open
      })}>
        <input
          className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300"
          type="text"
          placeholder="Search items"
          autoComplete="off"
          value={filterValue}
          onChange={(evt) => {
            setFilterValue(evt.target.value)
          }}
        />
        {filterItems.map((item, i) => (
          <a
            key={`${item.key}${i}`}
            className="block px-4 py-2 text-[var(--text-color-2)] h-10 hover:bg-[var(--primary-color-opacity-10)] active:bg-blue-100 cursor-pointer rounded-md"
            onClick={() => {
              setOpen(false)
              item?.onClick?.(item.key)
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Dropdown