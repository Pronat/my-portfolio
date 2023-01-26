import React from 'react';
import style from './MyWorks.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./Work/Work";
import {Title} from "../common/components/title/Title";
import socialImage from './../assets/image/social-network.jpg'
import todolistImage from './../assets/image/todolist.jpg'

export const MyWorks = () => {
    const social = {
        color: 'blue',
        backgroundImage: `url(${socialImage})`,
    };
 const todolist = {
        color: 'blue',
        backgroundImage: `url(${todolistImage})`,
    };

    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <Title text={'Projects'}/>
                <div className={style.works}>
                    <Work style={social} title={"Social network"}
                          description={"Description of my Social network, Description of my Social network"}/>
                    <Work style={todolist} title={"Todolist"}
                          description={"Description of my Todolist, Description of my Todolist"}/>
                </div>
            </div>
        </div>
    );
};
