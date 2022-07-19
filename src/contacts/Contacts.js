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
                        <div className={style.margin}><input value={"input"}/></div>
                        <div className={style.margin}><input value={"input"}/></div>
                        <div className={style.margin}><textarea value={"textarea"}></textarea></div>
                    </form>
                </div>
                <button className={style.buttonSend}>Send</button>
            </div>
        </div>
    );
};
