import { Link, Box, Typography } from '@mui/material';
import '../css/navbar.css';


const Navbar = () => {

    return (
        <Box className="nav-bar">
            <Typography variant="h6" color="inherit" className="nav-links">
                <Link  href="/" variant="inherit" color="inherit" underline="hover">home</Link>
                <Link  href="/about" variant="inherit" color="inherit" underline="hover">about</Link>
            </Typography>
        </Box> 
    );
}

export default Navbar;