import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import Routes from "./routes";
// import Header from "./components/Header"
import "./App.css"

const Header = lazy(() => import("./components/Header"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <Routes />
      </Router>
    </Provider>
  )
}

export default App;
