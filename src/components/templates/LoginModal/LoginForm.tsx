import { useTranslation } from "react-i18next";
import LoginTabs, { useLoginTabsProps } from "./LoginTabs";
import LoginTitle from "./LoginTitle";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import PhoneNumberInputController from "./controllers/PhoneNumberInput.controller";
import OTPInputController from "./controllers/OTPInput.controller";
import PasswordLoginControllers from "./controllers/PasswordLogin.controllers";

const LoginForm = () => {
  const { t } = useTranslation()
  const tabsProps = useLoginTabsProps()
  const { tabIndex } = tabsProps
  const formMethods = useForm()
  const { register, handleSubmit, formState: { errors }, reset } = formMethods
  const submit = (data: any) => {
    console.log(data)
  }

  return (
    <>
      <LoginTitle>
        {t('Sign in')}
      </LoginTitle>

      <LoginTabs {...tabsProps} />

      <FormProvider {...formMethods}>
        <form
          className="my-3"
        >
          {tabIndex === 0 && (
            <PasswordLoginControllers />
          )}

          {tabIndex === 1 && (
            <>
              <PhoneNumberInputController />
              <OTPInputController
                placeholder={t('The phone number OTP')}
                onSend={async () => {
                  throw new Error('11')
                }}
              />
            </>
          )}
        </form>
      </FormProvider>

      <div className="text-right mb-3">
        <a className="text-[var(--note)] text-sm cursor-pointer">
          {t('Forgot Password?')}
        </a>
      </div>

      <button
        className="btn bg-[var(--primary-color)] hover:bg-[var(--primary-color-opacity-80)] text-white w-full text-sm font-normal"
        onClick={handleSubmit(
          submit,
          (err) => {
            for(const k in err) {
              const msg = err[k]?.message
              if(msg) {
                toast.error(msg.toString())
                return
              }
            }
          }
        )}
      >
        {t('Sign In Now')}
      </button>

      <div className="text-[var(--note)] text-sm mt-3">
        {t('{{Brand}} New user?', {
          Brand: 'Product.com'
        })}
        <a className="text-[var(--secondary-color)] ml-1">{t('Create Account')}</a>
      </div>
    </>
  )
}

export default LoginForm