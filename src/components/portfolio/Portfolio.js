import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>
            
            <Grid container display={'flex'} justifyContent={'center'} >
                {info.portfolio.map((project, index) => (
                   <Grid item xs={5} md={5} key={index} padding={5} >
                    
                    <PortfolioBlock  image={project.image} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
            
        </Box>
    );
};