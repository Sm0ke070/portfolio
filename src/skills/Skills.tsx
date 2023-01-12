import React from 'react';
import style from './skills.module.scss'
import styleContainer from './../common/styles/container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";


const Skills = () => {

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={"JS"}
                           description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>
                    <Skill title={"CSS"}
                           description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>
                    <Skill title={"React"}
                           description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>
                </div>
            </div>

        </div>
    );
};

export default Skills;