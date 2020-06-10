import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function TowTruck() {
  return (
    <div className="card m-3 text-white bg-dark">
        <div className="card-header text-center h4  border-secondary"><b>Эвакуатор</b></div>
        <ul className="list-group list-group-flush">
            <div>

                <li className="list-group-item bg-dark border-secondary">
                    <div className="card-body p-1">
                        Полукоммерческий сайт-визитка, показывает расположение эвакуатора на карте.
                        Его владелец пользуется трекером на этом же сайте, который отслеживает геолокацию и посылает ее в API веб-сервиса.
                    </div>
                </li>

                <li className="list-group-item bg-dark border-secondary">
                    <div className="card-body p-1">
                        <div className="text-center mb-3"><b>Технологии</b></div>
                        <div className="alert alert-secondary"> <b>Бэкенд</b>: Java, Spring (Boot, Web), Hibernate </div>
                        <div className="alert alert-secondary mb-2"> <b>Фронтенд</b>: React.js, Bootstrap, Yandex.Maps JavaScript API </div>
                    </div>
                </li>
                
                <li className="list-group-item bg-dark border-secondary">
                    <div className="text-center mb-3"><b>Скриншот</b></div>
                    <img className="card-img" src="https://i.ibb.co/Npbg4G3/2rw9l-Ub-Xq-OY.jpg" alt="Скриншот недоустпен"></img>
                </li>

            </div>
        </ul>
        <div className="card-footer text-center p-1"> 
            <a href="https://nvinz.site/" role="button" className="btn btn-secondary mr-1 ml-1 btn-sm"> Перейти </a>
            <a href="https://github.com/nVinz/tow-truck-spring" role="button" className="btn btn-secondary mr-1 ml-1 btn-sm"> Как работает </a>
        </div>
    </div>
  );
}

export default TowTruck;
