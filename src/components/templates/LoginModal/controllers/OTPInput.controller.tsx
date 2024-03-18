import { Input } from "@/components/form"
import { InputProps } from "@/components/form/Input"
import { useCountDown } from "ahooks"
import { FC, useState } from "react"
import { useTranslation } from "react-i18next"
import { toast } from "sonner"

const OTPInputController: FC<InputProps & {
  onSend(): Promise<void>
}> = ({
  onSend,
  ...props
}) => {
  const { t } = useTranslation()
  const [targetDate, setTargetDate] = useState<number>();
  const [countdown] = useCountDown({
    targetDate,

  });

  return (
    <Input
      type="number"
      suffix={
        countdown !== 0 ? (
          <span className="loading loading-dots loading-md ml-1"></span>
        ) : (
          <a
            className="text-[var(--primary-color)] text-sm cursor-pointer ml-1"
            onClick={() => {
              setTargetDate(Date.now() + 60*1000)
              onSend().catch((err) => {
                setTargetDate(Date.now())
                if(err instanceof Error) {
                  toast.error(err.message)
                }
              })
            }}
          >
            {t('Get Code')}
          </a>
        )
      }
      {...props}
    />
  )
}

export default OTPInputController