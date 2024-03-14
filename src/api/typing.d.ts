namespace API {
  type ApiData<T> = {
    code: number
    data: T
    message: string
  }
}