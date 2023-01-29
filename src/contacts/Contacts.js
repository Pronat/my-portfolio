import React from 'react';
import style from './Contacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={'Contacts'}/>
                <form className={style.form}>
                    <input className={style.margin}/>
                    <input className={style.margin}/>
                    <textarea className={style.margin}></textarea>
                </form>
                <button type="submit" className={style.buttonSend}>Send</button>
            </div>
        </div>
    );
};
