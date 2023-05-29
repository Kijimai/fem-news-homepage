import { useContext, createContext, useEffect, useState } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  useEffect(() => {
    console.log(AppContext)
    console.log("Connected")
  })
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
