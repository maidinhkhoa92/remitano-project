import type { AppProps } from 'next/app'
import { useEffect, useState } from "react"
import { createGlobalStyle } from "styled-components"
import { Snackbar, Alert } from "@mui/material"
import { Header } from "../components"
import { onAuthStateChanged } from "firebase/auth";
import { AppStateProvider, useAppState } from "../provider"
import { auth } from "../services/api";

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

const AuthState = () => {
  const { setAuth } = useAppState()

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuth({
          email: user?.email || "",
          uid: user.uid,
          refreshToken: user.refreshToken,
        })
      } else {
        setAuth(null)
      }
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  return <></>
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppStateProvider>
      <GlobalStyle />
      <AuthState />
      <Toast />
      <Header />
      <Component {...pageProps} />
    </AppStateProvider>
  )
}

export default MyApp
