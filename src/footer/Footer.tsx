import React from 'react';
import style from './footer.module.scss'
import styleContainer from "../common/styles/container.module.css";
import Title from "../common/components/title/Title";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${style.footerContainer} ${styleContainer.container} `}>
                <Title title={'Nikita Pulkin'}/>
                <div className={style.socialNetwork}>
                    <div className={style.socialNetworkBlock}>1</div>
                    <div className={style.socialNetworkBlock}>2</div>
                    <div className={style.socialNetworkBlock}>3</div>
                    <div className={style.socialNetworkBlock}>4</div>
                </div>
                <span>© 2022 Все права защищены </span>
            </div>
        </div>
    );
};

export default Footer;