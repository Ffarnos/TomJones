import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './Menu';
import Tragos from './Tragos';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Switch, Route} from "react-router-dom";
import SinAlcohol from "./SinAlcohol";
import Botellas from "./Botellas";
import Vinos from "./Vinos";

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <Switch>
              <Route path="/menu"><Menu/></Route>
              <Route path="/tragos"><Tragos/></Route>
              <Route path="/vinos"><Vinos/></Route>
              <Route path="/sinalcohol"><SinAlcohol/></Route>
              <Route path="/botellas"><Botellas/></Route>
              <Route path="/"><App/></Route>
          </Switch>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
