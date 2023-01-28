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
                    <span>Hi</span>
                    <h1>My name is Alexandr Suvorov</h1>
                    <p>I am front-end developer</p>
                </div>
                <div className={style.photo} style={avatar}>Photo</div>
            </div>
        </div>
    );
};
