import React from 'react';
import style from './Job.module.scss'
import styleContainer from "../common/styles/container.module.css";
import Title from "../common/components/title/Title";

const Job = () => {

    return (
        <div className={style.jobBlock}>
            <div className={`${styleContainer.container} ${style.jobContainer}`}>
                <Title title={'Jobs'}/>
                <a href="" className={style.hireMe}>Нанять меня</a>
            </div>
        </div>
    );
};

export default Job;