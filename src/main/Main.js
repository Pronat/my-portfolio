import React from 'react';
import style from './Main.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.text}>
                <span>Привет</span>
                <h1>Меня зовут Александр Суворов</h1>
                <p>Я front-end разработчик</p>
            </div>
            <div className={style.photo}>photo</div>

        </div>
    );
};
