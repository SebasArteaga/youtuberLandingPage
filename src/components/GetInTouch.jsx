import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'Contacto para colaborar'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
                Obcaecati animi ab optio explicabo. Rerum, ipsum quibusdam \
                porro deserunt aut, dolore harum laudantium voluptatem ea, \
                quam fuga expedita perspiciatis dolor earum?'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#793302',
                "&:hover": {
                    backgroundColor: '#983F00',
                }
            }}
            >
                Contacto
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;