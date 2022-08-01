import React from 'react';
import style from "./Work.module.css"

export const Work = (props) => {
    return (
        <div className={style.workModule}>
            <div className={style.image}>
                {props.image}{<a href={"ссылка"} className={style.button}>Смотреть</a>}
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};
