import React from 'react';
import style from './MyWorks.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./Work/Work";
import {Title} from "../common/components/title/Title";
import socialImage from './../assets/image/social-network.jpg'
import todolistImage from './../assets/image/todolist.jpg'

export const MyWorks = () => {
    // const social = {
    //     color: 'blue',
    //     backgroundImage: 'url(' + imgUrl + ')',
    // };

    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <Title text={'Projects'}/>
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
