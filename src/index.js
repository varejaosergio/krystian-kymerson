import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
/* SSV import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';*/

/** Desafio master blaster na descrição
// Colocar um jogo nessa página: https://www.youtube.com/watch?v=jOAU81jdi-c :) */
// SSV 28-09-2020 ReactDOM.render(
  //<BrowserRouter>
    //<Switch>
     // <Route path="/" component={Home} exact />
      //<Route path="/cadastro/video" component={CadastroVideo} />
      //<Route path="/cadastro/categoria" component={CadastroCategoria} />
      //<Route component={() => (<div>Página 404</div>)} />
    //</Switch>
  //</BrowserRouter>,
  //document.getElementById('root'),
//);
