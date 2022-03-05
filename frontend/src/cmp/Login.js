import "../css/login.css";
import { TextField, Autocomplete, Typography, Button, Modal, Box } from '@mui/material';
import { useState } from "react";

const states = [
    'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 
    'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD',
    'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH',
    'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'
]


const Login = () => {
    /* Login modal cmp */


    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const loginDiv = (
        <Box className="login-div">
            <div className="modal-header">
                <Typography variant="h4">Login</Typography>
                <Typography>Please enter valid voter-registration information.</Typography>
            </div>
            <form className="login-form" action="#">
                <div className="form-row">
                    <TextField id="firstname" label="First Name" variant="standard" required />
                    <TextField id="lastname" label="Last Name" variant="standard" required />
                </div>
                
                <div className="form-row">
                    <TextField id="address-line1" label="Address 1" variant="standard" required />
                    <TextField id="address-line2" label="Address 2" variant="standard" />
                </div>
                
                <div className="form-row">
                    <TextField id="city" label="City" variant="standard" required />
                    <TextField id="state" label="State" variant="standard" required />
                    <TextField id="zipcode" label="ZIP" variant="standard" required />
                </div>

                <Button variant="text">Submit</Button>
            </form>
        </Box>
    );

    return (
        <div>
            <Button variant="outlined" onClick={handleOpen}>
                Login
            </Button>
            <Modal open={open} onClose={handleClose}>
                { loginDiv }
            </Modal>
        </div>
    );
}


export default Login;