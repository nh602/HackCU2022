import { Paper, Box, Typography } from '@mui/material';
import '../css/navbar.css';

const NavLink = (props) => {

    return (
        <li>
            <a 
                className="nav-link"
                href={ props.href }
            >
                <Typography variant="h6">
                    { props.text }
                </Typography>
            </a>
        </li>
    );
}

const Navbar = () => {

    return (
        <Paper className="nav-paper" elevation={5}>
            <div className="nav-box">
                <ul className="left links">
                    <NavLink href="/" text="home" />
                    <NavLink href="/about" text="about" /> 
                </ul>
                <ul className="right links">
                    
                </ul>
            </div>
        </Paper>
    );
}

export default Navbar;