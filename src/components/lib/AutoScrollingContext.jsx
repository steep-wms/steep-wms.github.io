import { createContext, useReducer } from "react"

const State = createContext()
const Dispatch = createContext()

const reducer = (state, autoScrolling) => autoScrolling

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, false)

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  )
}

const AutoScrollingContext = {
  State,
  Dispatch,
  Provider
}

export default AutoScrollingContext
