import React from 'react';
import Style from './Contato.module.scss'
import me from '../../img/self.png';
import classNames from 'classnames';
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import 'animate.css';

export default function Contato() {
   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '45vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.3rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1 class="animate__animated animate__zoomIn" >Aqui você contrata um<span className={Style.hand}></span>
            </h1>
            <h1 class="animate__animated animate__zoomIn"> <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.position}</span>.</h1>
            
            <Box className='social-icon' display={'flex'} gap={'2.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}} marginTop={'1rem'}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
            
         </Box>
      </Box>
   )
}