import React from 'react';
import Cards from './Card';
import { Grid } from '@material-ui/core';

const Content = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={10} sm={6} md={4}>
                    <Cards></Cards>
                </Grid>
                <Grid item xs={10} sm={6} md={4}>
                    <Cards></Cards>
                </Grid>
                <Grid item xs={10} sm={6} md={4}>
                    <Cards></Cards>
                </Grid>
                <Grid item xs={10} sm={6} md={4}>
                    <Cards></Cards>
                </Grid>
                <Grid item xs={10} sm={6} md={4}>
                    <Cards></Cards>
                </Grid>
                <Grid item xs={10} sm={6} md={4}>
                    <Cards></Cards>
                </Grid>
            </Grid>        
        </div>
    );
};

export default Content;