import React from 'react';
import style from './MyWorks.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./Work/Work";

export const MyWorks = () => {
    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.works}>
                    <Work image={"Image1"} title={"My first work"}
                          description={"Description of my first work, Description of my first work"}/>
                    <Work image={"Image2"} title={"My second work"}
                          description={"Description of my second work, Description of my second work"}/>
                </div>
            </div>
        </div>
    );
};
