import React from 'react';
import style from './Sills.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Sills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={style.skills}>111</div>

            </div>

        </div>
    );
};
