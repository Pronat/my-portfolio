import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"aaaaaaaaaaa  aaaaa aa aaaaaaa aaaaaa aaaaa aaaaa"}/>
                    <Skill title={"TS"} description={"aaaaaaaaaaa  aaaaa aa aaaaaaa aaaaaa aaaaa aaaaa"}/>
                    <Skill title={"HTML"} description={"aaaaaaaaaaa  aaaaa aa aaaaaaa aaaaaa aaaaa aaaaa"}/>
                    <Skill title={"CSS"} description={"bbb bbb bbbbbbb b bbb bbbbbbbbbbbbb bbbbbbbbbbb"}/>
                    <Skill title={"React"} description={"cccccccccc cccccccccc cccccccccccc c c c ccccc"}/>
                </div>
            </div>

        </div>
    );
};
