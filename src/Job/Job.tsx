import React from 'react';
import style from './Job.module.css'
import styleContainer from "../common/styles/container.module.css";

const Job = () => {

    return (
        <div className={style.jobBlock}>
            <div className={`${styleContainer.container} ${style.jobContainer}`}>
                <h2>Рассматриваю варианты удаленной работы</h2>
                <a href="" className={style.hireMe}>Нанять меня</a>
            </div>
        </div>
    );
};

export default Job;