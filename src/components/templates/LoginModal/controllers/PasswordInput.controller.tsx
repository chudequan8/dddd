import { PasswordInput } from "@/components/form"
import { useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"

const PasswordInputController = () => {
  const { t } = useTranslation()
  const { register } = useFormContext()

  return (
    <PasswordInput
      placeholder="Your password"
      {...register('password', {
        required: t('Please enter login password')
      })}
    />
  )
}

export default PasswordInputController