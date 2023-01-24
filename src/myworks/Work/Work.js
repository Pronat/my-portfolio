import React from 'react';
import style from "./Work.module.css"

export const Work = (props) => {
    return (
        <div className={style.workModule}>
            <div className={style.image} style={props.style}>
                {props.image}{<a href={"ссылка"} className={style.button}>Project</a>}
            </div>
            {/*<div className={style.projectInfo}>*/}
                <h3 className={style.workTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            {/*</div>*/}
        </div>
    );
};
