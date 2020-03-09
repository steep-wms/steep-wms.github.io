const State = React.createContext();
const Dispatch = React.createContext()

const reducer = (state, autoScrolling) => ({
  autoScrolling
});

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, { autoScrolling: false });

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
