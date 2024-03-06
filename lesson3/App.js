import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Todos from "./components/Todos";

export default function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}
