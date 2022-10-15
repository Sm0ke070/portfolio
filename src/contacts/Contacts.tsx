import React from 'react';
import style from './contacts.module.css'
import styleContainer from "../common/styles/container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Контакты</h2>
                <form className={style.inputBlock}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <a className={style.send} href="">Отправить</a>
            </div>

        </div>
    );
};

export default Contacts;