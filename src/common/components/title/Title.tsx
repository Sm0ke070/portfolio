import React from 'react';
import style from './title.module.scss'


type TitlePropsType = {
    title: string
}

const Title = (props: TitlePropsType) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    );
};

export default Title;