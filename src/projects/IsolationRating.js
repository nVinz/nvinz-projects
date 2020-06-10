import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function IsolationRating() {
  return (
    <div className="card m-3 text-white bg-dark">
        <div className="card-header text-center h4 border-secondary"><b>Рейтинг самоизоляции</b></div>
        <ul className="list-group list-group-flush">
            <div>

                <li className="list-group-item bg-dark border-secondary">
                    <div className="card-body p-1">
                        Сервис для оценки уровня самоизоляции. IP-адрес и геолокация зашедших пользователей отправляются в API веб-сервиса, 
                        который рассчитывает общий рейтинг, и рейтинг каждого отдельного пользователя, исходя из их недавних перемещений.
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
                    <img className="card-img" src="https://i.ibb.co/Jr6VbKL/0-Tj-G3-BUa-AF0.jpg" alt="Скриншот недоустпен"></img>
                </li>

            </div>
        </ul>
        <div className="card-footer text-center p-1"> 
            <a href="https://isolation-rating.netlify.app/" role="button" className="btn btn-secondary mr-1 ml-1 btn-sm"> Перейти </a>
            <a href="https://github.com/nVinz/isolation-rating-spring" role="button" className="btn btn-secondary mr-1 ml-1 btn-sm"> Как работает </a>
        </div>
    </div>
  );
}

export default IsolationRating;
