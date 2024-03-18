'use client'

import AsideWrapper from "@/components/AsideWrapper"
import AsideRouter from "@/components/router/AsideRouter"
import HeaderRouter from "@/components/router/HeaderRouter"
import FooterRouter from "@/components/router/FooterRouter"
import { Toaster } from "sonner"
import { FC, ReactNode } from "react"
import TranslationsProvider from "@/components/TranslationsProvider"
import { ThemeContextProvider } from "@/context/themeContext"
import MessagesPartial from "@/components/templates/Message/DefaultMessages.template";

const Template: FC<{
  children: ReactNode
}> = ({
  children
}) => {

  return (
    <>
      {children}
    </>
  )
}

export default Template