'use client'

import AsideWrapper from "@/components/AsideWrapper"
import AsideRouter from "@/components/router/AsideRouter"
import HeaderRouter from "@/components/router/HeaderRouter"
import FooterRouter from "@/components/router/FooterRouter"
import { Toaster } from "sonner"
import { FC, ReactNode } from "react"
import TranslationsProvider from "@/components/TranslationsProvider"
import { ThemeContextProvider } from "@/context/themeContext"

const Template: FC<{
  children: ReactNode
}> = ({
  children
}) => {

  return (
    <>
      <div id="root">
        <ThemeContextProvider>
          <TranslationsProvider>
            <AsideRouter />
            <AsideWrapper>
              <HeaderRouter />
                {children}
              <FooterRouter />
            </AsideWrapper>
          </TranslationsProvider>
        </ThemeContextProvider>
      </div>
      <div id="portal-root" />
      <Toaster position="bottom-left" richColors  />
    </>
  )
}

export default Template