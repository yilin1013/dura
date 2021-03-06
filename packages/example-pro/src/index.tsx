import React from "react";
import { render } from "react-dom";
import { store } from "./store";
import Home from "./container/Home";

import { Provider } from "react-redux";

render(
  <div>
    <Provider store={store}>
      <Home />
    </Provider>
  </div>,
  document.querySelector("#root")
);
