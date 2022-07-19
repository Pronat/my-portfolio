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
                        <input type="checkbox"/>text1
                        <input type="text1"/>text1
                        <textarea>text3</textarea>
                    </form>
                </div>
                <button className={style.buttonSend}>Send</button>
            </div>
        </div>
    );
};
