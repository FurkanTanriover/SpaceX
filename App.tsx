import React from "react";
import AppNavigator from "./src/navigation/App";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
