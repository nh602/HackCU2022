import * as React from 'react';
import {
    Link,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container
} from '@mui/material';

const Navbar = () => {

    return (
        <AppBar>
            <Container maxWidth="x1">
                <Toolbar disableGutters>
                    <Typography variant="h5" component="div" sx={{ mr: 2, display: { md: 'flex' } }}>
                        Navbar
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { md: 'flex' }}}>
                        <Link href="/" color="inherit" variant="body2" underline="none" sx={{  }}>Home</Link>
                        <Link href="/about" color="inherit" variant="body2" underline="none" sx={{ ml: 2 }}>About</Link>
                    </Box>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;