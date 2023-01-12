import React from 'react';
import style from './contacts.module.scss'
import styleContainer from "../common/styles/container.module.css";
import Title from "../common/components/title/Title";

const Contacts = () => {

    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <form className={style.inputBlock}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                    <button className={style.sendBtn}>Отправить</button>
                </form>
            </div>

        </div>
    );
};

export default Contacts;