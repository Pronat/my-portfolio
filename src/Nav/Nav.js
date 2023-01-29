import React from 'react';
import style from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.navText} href="">Main</a>
            <a className={style.navText} href="">Skills</a>
            <a className={style.navText} href="">Projects</a>
            <a className={style.navText} href="">Contacts</a>
        </div>
    );
};
