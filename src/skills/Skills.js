import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";
import tsImage from "../assets/image/icons/ts.png";
import jsImage from "../assets/image/icons/js.png";
import reactImage from "../assets/image/icons/react.jpg";
import reduxImage from "../assets/image/icons/redux.png";
import htmlImage from "../assets/image/icons/html.png";
import cssImage from "../assets/image/icons/css.png";

export const Skills = () => {
    const tsIcon = {
        color: 'blue',
        backgroundImage: `url(${tsImage})`,
    };
    const jsIcon = {
        color: 'blue',
        backgroundImage: `url(${jsImage})`,
    };
    const reduxIcon = {
        color: 'blue',
        backgroundImage: `url(${reduxImage})`,
    };
    const reactIcon = {
        color: 'blue',
        backgroundImage: `url(${reactImage})`,
    };
    const cssIcon = {
        color: 'blue',
        backgroundImage: `url(${cssImage})`,
    };
    const htmlIcon = {
        color: 'blue',
        backgroundImage: `url(${htmlImage})`,
    };

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill style={jsIcon} title={"JS"} description={"язык программирования, который позволяет вам создать динамически обновляемый контент"}/>
                    <Skill style={tsIcon} title={"TS"} description={"язык программирования для веб-разработки, основанный на JavaScript"}/>
                    <Skill style={htmlIcon} title={"HTML"} description={"это код, который используется для структурирования и отображения веб-страницы и её контента"}/>
                    <Skill style={cssIcon} title={"CSS"} description={"Cascading Style Sheets — это каскадные таблицы стилей"}/>
                    <Skill style={reactIcon} title={"React"} description={"библиотеку для создания пользовательских интерфейсов"}/>
                    <Skill style={reduxIcon} title={"Redux"} description={"контейнер предсказуемых состояний для JavaScript приложений"}/>
                </div>
            </div>

        </div>
    );
};
