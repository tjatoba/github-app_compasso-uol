import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { StyledToolbar, LogoImg} from './styled'
import Logo from '../../assets/githublogo.png'
import Typography from '@material-ui/core/Typography'
import { elementColor } from '../../constants/colors'

export const Header = () => {
    return (
        <AppBar position="static">
        <StyledToolbar>
            <LogoImg src = {Logo} />
            <Typography 
            color={elementColor}>
                WELCOME TO THE <b>FIRST GITHUB SEARCH ENGINE</b>
            </Typography>
        </StyledToolbar>
        </AppBar>

    );
}

export default Header