import "./style.css";
import Number from "./Number";
import Button from "./Button";
import { Provider } from "react-redux";
import { createStore } from "redux";
function App() {
  const initialState = {
    number: 0,
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "plus":
        return {
          ...state,
          number: state.number + 1,
        };

      case "minus":
        return {
          ...state,
          number: state.number - 1,
        };
      case "rand":
        return {
          ...state,
          number: state.number + action.payload,
        };
      default:
        return state;
    }
  };

  const store = createStore(reducer);
  return (
    <Provider store={store}>
      <Number />
      <Button />
    </Provider>
  );
}

export default App;
