import type { AppProps } from 'next/app'
import { createGlobalStyle } from "styled-components"
import { Snackbar, Alert } from "@mui/material"
import { Header } from "../components"
import { AppStateProvider, useAppState } from "../provider"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const Toast = () => {
  const { alert, setAlert } = useAppState()
  return (
    <Snackbar open={alert.status} autoHideDuration={6000} onClose={() => setAlert({
      status: false,
      message: "",
      type: "success"
    })}>
      <Alert severity={alert.type}>
        {alert.message}
      </Alert>
    </Snackbar>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppStateProvider>
      <GlobalStyle />
      <Toast />
      <Header />
      <Component {...pageProps} />
    </AppStateProvider>
  )
}

export default MyApp
