import { useLocalStorageState, useRequest, useSessionStorageState } from 'ahooks'
import type { Options } from 'ahooks/lib/useRequest/src/types'
import STORAGE from "../constants/storage.constant";
import queryString from 'query-string'
import { isEmpty, template } from 'lodash';

export type TMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type TApiRequestRequestParams<P = any> = Partial<[P, TApiRequestRequestOptions]>

export type TMethodRequestOptions<T, P = any> = Options<T, TApiRequestRequestParams<P>> & { headers?: Record<string, string> }

type TApiRequestRequestOptions = {
  pathArgs?: Record<string, any>
  params?: Record<string, any>
}

export type TApiRequestOptions<T, P = any> = {
  url: string
  method: TMethod
} & TMethodRequestOptions<T, P>

const useApiRequest = <T, P = any>({
  url,
  headers = {},
  method,
  ...rest
}: TApiRequestOptions<T, P>) => {
  const [ , setToken ] = useLocalStorageState<string>(STORAGE.TOKEN)
  // const [ , setUserProfile ] = useSessionStorageState(STORAGE.USER_PROFILE)
  const request = async (data?: any, opt?: TApiRequestRequestOptions) => {
    let body, token
    try {
      token = JSON.parse(localStorage.getItem('token') || '""')
    } catch {}
    if(token) headers.Authorization = 'Bearer ' + token
    let _url = process.env.NEXT_PUBLIC_API_BASE_URL + (opt?.pathArgs ? template(url)(opt.pathArgs) : url)
    const params = {
      ...(opt?.params || {})
    }
    if(method === 'GET') {
      Object.assign(params, data)
    } else if(data) {
      if(data instanceof FormData) {
        body = data
      } else {
        body = JSON.stringify(data)
        headers['Content-Type'] = 'application/json'
      }
    }
    if(!isEmpty(params)) _url += '?' + queryString.stringify(params)
    const res = await fetch(_url, {
      method,
      headers: {
        ...headers,
        'Accept': "application/json, text/plain, */*"
      },
      body
    })
    const json: API.ApiData<T> = await res.json()
    if(json.code !== 1000) {
      if(json.code === 2005) {
        setToken()
        // TODO: 未登錄提示未做
        // setUserProfile()
        // navigate(`../${authPages.loginPage.to}`, { replace: true })
      }
      throw new Error(json.message)
    }

    return json.data
  }

  return useRequest(request, rest)
}

export const useGetRequest = <T>(url: string, opt?: TMethodRequestOptions<T>) => useApiRequest<T>({
  url,
  method: "GET",
  ...opt
})

export const usePostRequest = <T>(url: string, opt?: TMethodRequestOptions<T>) => useApiRequest<T>({
  url,
  method: 'POST',
  ...opt
})

export const usePutRequest = <T>(url: string, opt?: TMethodRequestOptions<T>) => useApiRequest<T>({
  url,
  method: 'PUT',
  ...opt
})

export const usePatchRequest = <T>(url: string, opt?: TMethodRequestOptions<T>) => useApiRequest<T>({
  url,
  method: 'PATCH',
  ...opt
})

export const useDeleteRequest = <T>(url: string, opt?: TMethodRequestOptions<T>) => useApiRequest<T>({
  url,
  method: 'DELETE',
  ...opt
})

export default useApiRequest