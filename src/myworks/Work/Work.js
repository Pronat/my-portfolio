import React from 'react';
import style from "./Work.module.css"

export const Work = (props) => {
    return (
        <div>
            <div className={style.image}>{props.image}</div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
};
