import Cookies from 'universal-cookie'

export const cookies = new Cookies()

export const getToken = (): string => {
  return cookies.get('vector/token')
}

export const removeToken = () => {
  cookies.remove('vector/token')
}

export const setToken = (token: string) => {
  cookies.set('vector/token', token)
}