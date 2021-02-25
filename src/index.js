import React from "react";
import ReactDOM from "react-dom";
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/root-reducer";
import "./sass/style.scss";
import App from "./components/app";
import {createAPI} from "./services/api";
import {loadExchangeRate} from "./store/api-actions";

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(loadExchangeRate(store.getState().CONVERTER.date)),
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById(`root`)
    );
  });
