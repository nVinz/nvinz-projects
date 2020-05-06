import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

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

            <div className="card m-3 text-white bg-dark">
              <div className="card-header text-center h4  border-secondary"><b>Эвакуатор</b></div>
              <ul className="list-group list-group-flush">
                <div>

                  <li className="list-group-item bg-dark border-secondary">
                    <div className="card-body p-1">
                      Полукоммерческий сайт-визитка, показывает расположение эвакуатора на карте.
                      Его владелец пользуется клиентом на этом же сайте, который отслеживает геолокацию и посылает ее в API веб-сервиса.
                    </div>
                  </li>
                  <li className="list-group-item bg-dark border-secondary">
                    <div className="card-body p-1">
                      <div className="text-center"><b>Технологии</b></div>
                      Бэкенд: Java + Spring (Boot, Web) <br/>
                      Фронтенд: React.js (react-yandex-maps) + Bootstrap
                    </div>
                  </li>
                  
                  <li className="list-group-item bg-dark border-secondary">
                    <img className="card-img" src="https://i.ibb.co/Npbg4G3/2rw9l-Ub-Xq-OY.jpg" alt="Скриншот"></img>
                  </li>

                </div>
              </ul>
              <div className="card-footer text-center p-1"> 
                  <a href="https://nvinz.site/" role="button" className="btn btn-secondary mr-1 ml-1 btn-sm"> Перейти </a>
                  <a href="https://github.com/nVinz/tow-truck-spring" role="button" className="btn btn-secondary mr-1 ml-1 btn-sm"> Как работает? </a>
              </div>
            </div>


            <div className="card m-3 text-white bg-dark">
              <div className="card-header text-center h4 border-secondary"><b>Рейтинг самоизоляции</b></div>
              <ul className="list-group list-group-flush">
                <div>

                  <li className="list-group-item bg-dark border-secondary">
                    <div className="card-body p-1">
                      Сервис для оценки уровня самоизоляции. Определяются IP-адрес, геолокация зашедших пользователей и отправляются в API веб-сервиса, 
                      который рассчитывает рейтинг каждого отдельного пользователя исходя из его недавних перемещений, и общий рейтинг.
                    </div>
                  </li>
                  <li className="list-group-item bg-dark border-secondary">
                    <div className="card-body p-1">
                      <div className="text-center"><b>Технологии</b></div>
                      Бэкенд: Java + Spring (Boot, Web) + Hibernate <br/>
                      Фронтенд: React.js (react-yandex-maps) + Bootstrap
                    </div>
                  </li>
                  
                  <li className="list-group-item bg-dark border-secondary">
                    <img className="card-img" src="https://i.ibb.co/Jr6VbKL/0-Tj-G3-BUa-AF0.jpg" alt="Скриншот"></img>
                  </li>

                </div>
              </ul>
              <div className="card-footer text-center p-1"> 
                  <a href="https://isolation-rating.netlify.app/" role="button" className="btn btn-secondary mr-1 ml-1 btn-sm"> Перейти </a>
                  <a href="https://github.com/nVinz/isolation-rating-spring" role="button" className="btn btn-secondary mr-1 ml-1 btn-sm"> Как работает? </a>
              </div>
            </div>


            <div className="card m-3 bg-dark text-white">
              <div className="card-header text-center h4 border-secondary"><b>Сервис для работы с тестовыми данными</b></div>
              <ul className="list-group list-group-flush">
                <div>

                  <li className="list-group-item bg-dark text-secondary border-secondary">
                    <div className="card-body p-1">
                      В разработке
                    </div>
                  </li>
                  <li className="list-group-item bg-dark text-secondary border-secondary">
                    <div className="card-body p-1">
                      <div className="text-center"><b>Технологии</b></div>
                      Бэкенд: Java + Spring (Boot, Web), Hibernate <br/>
                      Фронтенд: React.js + Bootstrap
                    </div>
                  </li>
                  

                </div>
              </ul>
            </div>
            
          </div>
        </div>

    </div>
  );
}

export default App;
