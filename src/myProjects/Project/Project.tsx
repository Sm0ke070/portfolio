import React from 'react';
import style from './Project.module.css'

const Project = ({...props}) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a href="" className={style.img}>
                    <div>show</div>
                </a>
            </div>
            <div className={style.title}>
                <h4>{props.title}</h4>
                <span>Кратко расскажите суть своего проекта так, чтобы, прочитав вступление, спонсор уже был готов поддержать вашу идею.</span>
            </div>
        </div>
    );
};

export default Project;