import type { AppProps } from 'next/app'
import { createGlobalStyle } from "styled-components"
import { Header } from "../components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
