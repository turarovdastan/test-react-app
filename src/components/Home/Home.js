import { Grid } from '@material-ui/core';
import React from 'react';
import CarouselContainer from './CarouselContainer';
import Content from './Content';
import Sidebar from './Sidebar';

const Home = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Grid container spacing-md={3} spacing-sm={3}>
                <div style={{ padding: '0px' }}>
                    <CarouselContainer />
                </div>
                <Sidebar />
                <Content />
            </Grid>
        </div>
    );
};

export default Home;