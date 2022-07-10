import React, { useContext, useState, ReactNode } from "react"

type AlertProps = {
  type: "success" | "error"
  message: string
  status: boolean
}

type Props = {
  children: ReactNode
}

export interface Error {
  status: boolean
  type: "error" | "success"
  message: string
}

interface AppStateValue {
  alert: AlertProps
  setAlert: (alert: AlertProps) => void
}

const AppStateContext = React.createContext<AppStateValue | null>(null)

export function useAppState(): AppStateValue {
  const state = useContext(AppStateContext)

  if (!state) {
    throw new Error("useAppState must be used within AppStateProvider")
  }

  return state
}

export const AppStateProvider = ({ children }: Props) => {
  const [alert, setAlert] = useState<AlertProps>({
    status: false,
    message: "",
    type: "success"
  })

  const providerValue = {
    alert,
    setAlert
  }

  return <AppStateContext.Provider value={providerValue}>{children}</AppStateContext.Provider>
}
