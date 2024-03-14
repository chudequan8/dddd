import { Input } from "@/components/form"
import Dropdown from "@/components/ui/Dropdown"
import { AREA_CODES } from "@/constants/areacode.constant"
import { Controller, useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"

const PhoneNumberInputController = () => {
  const { t } = useTranslation()
  const { register, control } = useFormContext()

  return (
    <Input
      type="number"
      placeholder={t('Your cell phone number')}
      className="mb-3 relative"
      prefix={
        <Controller
          name="mobile_country_code"
          control={control}
          defaultValue="852"
          render={({ field: { onChange, value } }) => (
            <Dropdown
              rootClassName="!static"
              menu={{
                items: AREA_CODES.filter((v) => v.hasSms).map((v) => ({
                  key: v.areaCode.slice(1),
                  filterLabel: `${v.name}|${v.areaCode}`,
                  label: (
                    <div className="flex justify-between">
                      <span>{v.name}</span>
                      <span>{v.areaCode}</span>
                    </div>
                  ),
                  onClick(key) {
                    onChange(key)
                  },
                }))
              }}
            >
              <span className="relative after:content-[''] after:absolute after:-right-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:bg-[var(--note)] pr-3 mr-3">
                <span>+{value}</span>
                <i className="iconfont icon-left-arrow -rotate-90 inline-block scale-[.8] ml-2 text-[var(--note)]" />
              </span>
            </Dropdown>
          )}
        />
      }
      {...register('mobile', {
        required: t('Please enter the phone number !'),
        valueAsNumber: true
      })}
    />
  )
}

export default PhoneNumberInputController