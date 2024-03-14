import { TMethodRequestOptions, usePostRequest } from "@/hooks/useApiRequest";

export const useLoginByPasswordApi = (opt?: TMethodRequestOptions<AuthAPI.AuthData>) => usePostRequest('/login/password', opt)

export const useRegisterByUsernameApi = (opt?: TMethodRequestOptions<AuthAPI.AuthData>) => usePostRequest('/register/username', opt)

export const useLoginByEmailApi = (opt?: TMethodRequestOptions<AuthAPI.AuthData>) => usePostRequest('/login/email', opt)

export const useSendLoginEmailApi = (opt?: TMethodRequestOptions<number>) => usePostRequest('/mail/login/send', opt)

export const useVerifyEmailApi = (opt?: TMethodRequestOptions<number>) => usePostRequest('/email/verify', opt)

export const useSendResetPasswordEmailApi = (opt?: TMethodRequestOptions<number>) => usePostRequest('/mail/reset-password/send', opt)

export const useRegisterByEmailApi = (opt?: TMethodRequestOptions<AuthAPI.AuthData>) => usePostRequest('/register/email', opt)

export const useSendVerificationEmailApi = (opt?: TMethodRequestOptions<number>) => usePostRequest('/mail/verify-email/send', opt)

export const useSendRegisterEmailApi = (opt?: TMethodRequestOptions<number>) => usePostRequest('/mail/register/send', opt)

export const useVerifyMobileApi = (opt?: TMethodRequestOptions<number>) => usePostRequest('/mobile/verify', opt)

export const useLoginByMobileApi = (opt?: TMethodRequestOptions<AuthAPI.AuthData>) => usePostRequest('/login/mobile', opt)

export const useSendLoginSmsApi = (opt?: TMethodRequestOptions<number>) => usePostRequest('/sms/login/send', opt)

export const useRegisterByMobileApi = (opt?: TMethodRequestOptions<AuthAPI.AuthData>) => usePostRequest('/register/mobile', opt)

export const useSendRegisterMobileApi = (opt?: TMethodRequestOptions<number>) => usePostRequest('/sms/register/send', opt)

export const useSendResetPasswordSmsApi = (opt?: TMethodRequestOptions<number>) => usePostRequest('/sms/reset-password/send', opt)

export const useSendVerificationSmsApi = (opt?: TMethodRequestOptions<number>) => usePostRequest('/sms/verify-mobile/send', opt)