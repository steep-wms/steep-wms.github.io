import { createContext, useReducer } from "react"

const State = createContext()
const Dispatch = createContext()

const reducer = (state, language) => language

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, "yaml")

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  )
}

const CodeLanguageContext = {
  State,
  Dispatch,
  Provider
}

export default CodeLanguageContext
