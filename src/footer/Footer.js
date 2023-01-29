import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3 className={style.footerTitle}>Суворов Александр</h3>
                <div className={style.icons}>
                    <div className={style.icon1}></div>
                    <div className={style.icon1}></div>
                    <div className={style.icon1}></div>
                    <div className={style.icon1}></div>
                </div>
                <h3 className={style.footerDescription}>2019 Все права защищены</h3>
            </div>

        </div>
    );
};
