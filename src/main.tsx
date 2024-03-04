import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App.tsx";
import { Provider } from "react-redux";
import { store } from "src/store/store.ts";
import debounce from "debounce";
import "src/app/styles/index.scss";
import { saveState } from "src/app/localStorage.ts";

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
