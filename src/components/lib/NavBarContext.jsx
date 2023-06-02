import { createContext, useReducer } from "react"

const State = createContext()
const Dispatch = createContext()

const reducer = (state, { height, pinned }) => {
  if (typeof height !== "undefined" && height !== state.height) {
    state = {
      ...state,
      height
    }
  }
  if (typeof pinned !== "undefined" && pinned !== state.pinned) {
    state = {
      ...state,
      pinned
    }
  }
  return state
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { height: 0, pinned: false })

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  )
}

const NavBarContext = {
  State,
  Dispatch,
  Provider
}

export default NavBarContext
