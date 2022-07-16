import React from 'react';
import s from './Main.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}></div>
            <div className={s.text}>
                <spam>Hi There</spam>
                <h1>I am Jeffrey Aaron</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={s.photo}></div>

        </div>
    );
};
