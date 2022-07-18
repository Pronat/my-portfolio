import React from 'react';
import style from "./Work.module.css"

export const Work = (props) => {
    return (
        <div className={style.workBlock}>
            <div className={style.image}>{props.image}</div>
            <div className={style.titDescr}>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};
