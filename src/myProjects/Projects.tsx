import React from 'react';
import style from './projects.module.scss'
import styleContainer from '../common/styles/container.module.css';
import Project from './Project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/image/todoList.png'
import socialImage from './../assets/image/socialNet.png'

const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todo = {
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>

                <Title title={'projects'}/>

                <div className={style.projects}>
                    <Project style={social}
                             title={"Проект 1"}
                             description={'Кратко расскажите суть своего проекта так, чтобы, прочитав вступление, спонсор уже был готов поддержать вашу идею.Кратко расскажите суть своего проекта так, чтобы, прочитав вступление, спонсор уже был готов поддержать вашу идею.Кратко расскажите суть своего проекта так, чтобы, прочитав вступление, спонсор уже был готов поддержать вашу идею.'}/>
                    <Project style={todo}
                             title={"Проект 2"}
                             description={'Кратко расскажите суть своего проекта так, чтобы, прочитав вступление, спонсор уже был готов поддержать вашу идею.'}/>

                </div>
            </div>

        </div>
    );
};

export default Projects;