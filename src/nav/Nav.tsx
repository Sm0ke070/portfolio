import React from 'react';
import style from './nav.module.scss'

const Nav = () => {
    return (
        <div className={style.navBlock}>
            <a className={style.nav} href="">Главная</a>
            <a className={style.nav} href="">Скилы</a>
            <a className={style.nav} href="">Проекты</a>
            <a className={style.nav} href="">Контакты</a>
        </div>
    );
};

export default Nav;