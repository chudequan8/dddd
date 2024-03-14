import localFont from "next/font/local";
import './iconfont/iconfont.css'

const saira = localFont({
  src: './saira/saira.woff2',
  variable: '--font-saira',
})

const roboto = localFont({
  src: './roboto/roboto.woff2',
  variable: '--font-roboto',
})

const iconfont = localFont({
  src: './iconfont/iconfont.woff2',
  variable: '--font-iconfont'
})

export const classes = [roboto.className, saira.className, iconfont.className]
export const variables = [roboto.variable, saira.variable, iconfont.variable]