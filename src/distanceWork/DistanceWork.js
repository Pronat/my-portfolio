import React from 'react';
import style from './DistanceWork.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const DistanceWork = () => {
    return (
        <div className={style.DistanceWork}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.border}>
                    <h3>Рассмотрю варианты удаленной работы</h3>
                    <button>Нанять меня</button>
                </div>
            </div>
        </div>
    );
};
