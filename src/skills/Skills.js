import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";
import tsImage from "../assets/image/icons/ts.png";
import jsImage from "../assets/image/icons/js.png";
import reactImage from "../assets/image/icons/react.jpg";

export const Skills = () => {
    const tsIcon = {
        color: 'blue',
        backgroundImage: `url(${tsImage})`,
    };
    const jsIcon = {
        color: 'blue',
        backgroundImage: `url(${jsImage})`,
    };
    const reactIcon = {
        color: 'blue',
        backgroundImage: `url(${reactImage})`,
    };
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"язык программирования, который позволяет вам создать динамически обновляемый контент"}/>
                    <Skill title={"TS"} description={"язык программирования для веб-разработки, основанный на JavaScript"}/>
                    <Skill title={"HTML"} description={"это код, который используется для структурирования и отображения веб-страницы и её контента"}/>
                    <Skill title={"CSS"} description={"Cascading Style Sheets — это каскадные таблицы стилей"}/>
                    <Skill title={"React"} description={"библиотеку для создания пользовательских интерфейсов"}/>
                    <Skill title={"Redux"} description={"контейнер предсказуемых состояний для JavaScript приложений"}/>
                </div>
            </div>

        </div>
    );
};
