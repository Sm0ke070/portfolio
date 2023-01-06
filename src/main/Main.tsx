import React from 'react';
import style from './Main.module.scss'
import styleContainer from './../common/styles/container.module.css'

const Main = () => {

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>i am Nikita Pulkin</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;