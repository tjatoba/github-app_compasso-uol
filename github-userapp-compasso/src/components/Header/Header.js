import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export const Header = () => {
    return (
        <AppBar position="static">
        <Toolbar>
            <Typography> Github Search Engine </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>

    );
}

export default Header