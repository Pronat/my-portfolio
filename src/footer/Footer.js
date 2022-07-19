import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3>Суворов Александр</h3>
                <div className={style.icons}>
                    <div className={style.icon1}></div>
                    <div className={style.icon2}></div>
                    <div className={style.icon1}></div>
                    <div className={style.icon2}></div>
                    <div className={style.icon1}></div>
                    <div className={style.icon2}></div>
                    <div className={style.icon1}></div>
                </div>
                <h3>2019 Все права защищены</h3>
            </div>

        </div>
    );
};
