import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, source, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
         <Box component={'img'} src={image} alt={'mockup'} width={{xs: '50vh', md: '50vh'}}
              height={{xs: '50vh', md: '50vh'}} paddingBottom={'1rem'} 
              borderRadius={'50%'} p={'0.3rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>

         <h1 style={{fontSize: '2rem'}}>{title}</h1>

         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
             marginTop={'1rem'} alignItems={'center'} fontSize={'1.0rem'} py={'2rem'} >
            
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;