import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import * as RoutesModule from './routes/routes';
let routes = RoutesModule.routes;

function App() {
  return (
    <div className="App">
      <BrowserRouter children={ routes } />
    </div>
  );
}

export default App;
