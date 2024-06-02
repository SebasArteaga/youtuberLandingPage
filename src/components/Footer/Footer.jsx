import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube'
import { Twitter } from '@mui/icons-material';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'Acerca De'} />
        <FooterLink 
        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} 
        />
      
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'Redes'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="https://www.instagram.com/chocolate_cacao_seijin/" target="_blank" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#983F00',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="https://x.com/chocolateSeijin" target="_blank"  variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#983F00',
            }
          }}
          >
            <TwitterIcon />
          </Link> 
          <Link href="https://www.youtube.com/@chocolate_cacao/featured" target="_blank"  variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#983F00',
            }
          }}
          >
            <YoutubeIcon />
          </Link> 
        </Stack>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer