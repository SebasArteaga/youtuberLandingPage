import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img

import YouTubePlayer from './YoutubePlayer';


const GetStarted = () => {

    const videoUrl1 = 'https://www.youtube.com/watch?v=TXXjeIF7M7I';
    const videoUrl2 = 'https://www.youtube.com/watch?v=7TcCIcE1hr8';

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Video popular'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Vídeo sobre cómo preparar una<br />
                        "tarta marina de chocolate y menta esmeralda"
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
            <YouTubePlayer  videoUrl={videoUrl1} />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <YouTubePlayer  videoUrl={videoUrl2} />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Vídeo Popular'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Cómo hacer la tarte de chocolate suprema
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}


export default GetStarted;