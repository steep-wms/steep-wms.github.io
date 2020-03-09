const State = React.createContext();
const Dispatch = React.createContext()

const reducer = (state, { height, pinned }) => {
  if (typeof height !== "undefined" && height !== state.height) {
    state = {
      ...state, height
    };
  }
  if (typeof pinned !== "undefined" && pinned !== state.pinned) {
    state = {
      ...state, pinned
    };
  }
  return state;
};

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { height: 0, pinned: false });

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};

export default {
  State,
  Dispatch,
  Provider
};
