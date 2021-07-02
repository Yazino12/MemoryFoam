import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

<<<<<<< HEAD
const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));
=======
import App from "./App.js";
import "./index.css";
>>>>>>> parent of eb89913... pushing PART_3

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
<<<<<<< HEAD
  document.getElementById('root'),
=======
  document.getElementById("root")
>>>>>>> parent of eb89913... pushing PART_3
);
