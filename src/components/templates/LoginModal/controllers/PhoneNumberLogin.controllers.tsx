import { useTranslation } from "react-i18next"
import OTPInputController from "./OTPInput.controller"
import PhoneNumberInputController from "./PhoneNumberInput.controller"

const PhoneNumberLoginControllers = () => {
  const { t } = useTranslation()

  return (
    <>
      <PhoneNumberInputController />
      <OTPInputController
        placeholder={t('The phone number OTP')}
        onSend={async () => {
          throw new Error('11')
        }}
      />
    </>
  )
}

export default PhoneNumberLoginControllers