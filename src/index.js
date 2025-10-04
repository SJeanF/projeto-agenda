import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import MainPage from "./pages/MainPage";
import SearchArea from "./pages/SearchArea";
import ContactPage from "./pages/ContactPage";
import EditCreateContact from "./pages/EditCreateContactPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<MainPage />} />
            <Route path="/search" element={<SearchArea />} />
            <Route
              path="/create-contact"
              element={<EditCreateContact isCreate />}
            />
            <Route path="/contact/:id" element={<ContactPage />} />
            <Route path="/edit-contact/:id" element={<EditCreateContact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
