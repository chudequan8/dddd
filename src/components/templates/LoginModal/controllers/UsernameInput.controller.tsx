import { Input } from "@/components/form"
import { useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"

const UsernameInputController = () => {
  const { t } = useTranslation()
  const { register } = useFormContext()

  return (
    <Input
      placeholder={t('Your username')}
      className="mb-3"
      {...register('username', {
        required: t('Please enter your username')
      })}
    />
  )
}

export default UsernameInputController