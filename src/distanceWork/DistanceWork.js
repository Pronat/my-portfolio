
import React from 'react';
import style from './DistanceWork.module.scss'
import styleContainer from '../common/styles/Container.module.css'

export const DistanceWork = () => {
    return (
        <div className={style.DistanceWork}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.border}>
                    <h3 className={style.distanceText}>I am available for Freelance</h3>
                    <a href={"Подробнее"} className={style.distanceLink}>Hire me</a>
                </div>
            </div>
        </div>
    );
};
