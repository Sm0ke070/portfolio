import React from 'react';
import style from './projects.module.css'
import styleContainer from "../common/styles/container.module.css";
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.title}>
                    <h2>projects</h2>
                </div>

                <div className={style.projects}>
                    <Project title={"Проект 1"}/>
                    <Project title={"Проект 2"}/>
                </div>
            </div>

        </div>
    );
};

export default Projects;