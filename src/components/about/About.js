import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";

export default function About() {
    
    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>Carta de apresentação</span></p>
            <p>{info.bio}</p>
        </>;
    }
    function aboutMeText2() {
        return <>
            <p><span style={{color: info.baseColor}}>Mais sobre mim</span></p>
            <p>{info.bio2}</p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>Habilidades e ferramentas</span></p>
           
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposto a</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }
    
    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>Passatempos e interesses</span></p>
           
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={aboutMeText2()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}