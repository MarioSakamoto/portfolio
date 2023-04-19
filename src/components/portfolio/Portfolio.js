import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>
            
            <Grid container display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={7} md={7} key={index} padding={1} marginTop={'2rem'} >
                    
                    <PortfolioBlock  image={project.image} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
            
        </Box>
    );
};