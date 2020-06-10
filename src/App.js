import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import TowTruck from './projects/TowTruck'
import IsolationRating from './projects/IsolationRating'
import DataShare from './projects/DataShare'
import ResponseShare from './projects/ResponseShare'

function App() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand">Проекты <b>nVinz</b></div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="https://github.com/nVinz" role="button" className="btn btn-secondary m-1 github"> GitHub </a>
            <a href="https://vk.com/shelepukhin" role="button" className="btn btn-secondary m-1 vk"> ВКонтакте </a>
            <a href="https://career.habr.com/nvinz" role="button" className="btn btn-secondary m-1 habr"> Хабр.Карьера </a>
          </li>
        </ul>
      </nav>

      <div className="container d-flex ">
        <div className="card-columns">

            <IsolationRating />

            <TowTruck />

            <ResponseShare />

            <DataShare />

          </div>
        </div>

    </div>
  );
}

export default App;
