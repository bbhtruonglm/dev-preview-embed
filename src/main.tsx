import "./index.css";
import "./i18n.ts";

import ReactDOM, { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { NetworkProvider } from "./components/NWProvider.tsx";
import { Provider } from "react-redux";
import Toast from "./components/Toast/Toast.tsx";
import { store } from "./stores/index.ts";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   // <React.StrictMode>

//   <BrowserRouter>
//     <Toast />
//     <App />
//   </BrowserRouter>
//   // </React.StrictMode>
// );
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <NetworkProvider>
        <Toast />
        <App />
      </NetworkProvider>
    </BrowserRouter>
  </Provider>
);
