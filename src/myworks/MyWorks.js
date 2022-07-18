import React from 'react';
import style from './MyWorks.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const MyWorks = (props) => {
    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <h2 className={style.title}>{title}</h2>
                <div className={style.works}>
                    {Work}
                </div>

            </div>

        </div>
    );
};
