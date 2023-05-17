
import React, { Suspense } from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const App = React.lazy(() => import(/* webpackChunkName: "App" */ "./App"));

const Main = () => {
  return (
    <React.StrictMode>
      <Provider store={configureStore()}>
        <Suspense fallback={<div className='loading' />}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
