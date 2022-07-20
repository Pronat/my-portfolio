import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3>Contacts</h3>
                <div>
                    <form className={style.form}>
                        <input className={style.margin}/>
                        <input className={style.margin}/>
                        <textarea className={style.margin}></textarea>
                    </form>
                </div>
                <button className={style.buttonSend}>Send</button>
            </div>
        </div>
    );
};
