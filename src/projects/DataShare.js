import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function DataShare() {
  return (
    <div className="card m-3 bg-dark text-white">
        <div className="card-header text-center h4 border-secondary"><b>Сервис для работы с тестовыми данными</b></div>
        <ul className="list-group list-group-flush">
            <div>

                <li className="list-group-item bg-dark border-secondary">
                    <div className="card-body p-1">
                        <div className="alert alert-info"> <b>В разработке</b> </div>
                    </div>
                </li>

                <li className="list-group-item bg-dark border-secondary">
                    <div className="card-body p-1">
                        <div className="text-center mb-3"><b>Технологии</b></div>
                        <div className="alert alert-secondary"> <b>Бэкенд</b>: Java, Spring (Boot, Web), Hibernate </div>
                    </div>
                </li>
                
            </div>
        </ul>
    </div>
  );
}

export default DataShare;
