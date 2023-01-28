import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import avatarImage from './../assets/image/avatar.jpg'


export const Main = () => {
    const avatar = {
        color: 'blue',
        backgroundImage: `url(${avatarImage})`,
    };
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h1 className={style.mainTitle}>Hi</h1>
                    <h1 className={style.mainText}>My name is Alexandr Suvorov</h1>
                    <p className={style.mainDescription}>I am front-end developer</p>
                </div>
                <div className={style.photo} style={avatar}></div>
            </div>
        </div>
    );
};
