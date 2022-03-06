import "../css/login.css";
import { TextField, Typography, Button, Modal, Box, Route } from '@mui/material';
import { useState } from "react";
import UserService from '../services/UserService';

// const states = [
//     'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 
//     'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD',
//     'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH',
//     'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
//     'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'
// ];

const defaultValues = {
    firstname: "",
    lastname: "",
    dob: "",
    ssn: "",
};

const Login = () => {
    /* Login modal cmp */

    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState(defaultValues);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        UserService.postLogin(formValues)
            .then((res) => {
                console.log(res)
                if (res.success == true) {
                    window.open("/Ballot"); 
                }
            })
            .catch((err) => {
                console.log(err)
            }, []);
    };

    const loginDiv = (
        <Box className="login-div">
            <div className="modal-header">
                <Typography variant="h4">Login</Typography>
                <Typography>Please enter valid voter-registration information.</Typography>
            </div>
            <form className="login-form" onSubmit={ handleSubmit } id="login-form">
                <div className="form-row">
                    <TextField name="firstname" label="First Name" variant="standard" value={formValues.firstname} onChange={handleInputChange} required />
                    <TextField name="lastname" label="Last Name" variant="standard" value={formValues.lastname} onChange={handleInputChange} style={{ marginLeft: "10px" }} required />
                </div>
                
                <div style={{ height: "90px" }}>
                    <TextField
                        id="date"
                        name="dob"
                        label="Birth Date"
                        type="date"
                        defaultValue="2022-05-03"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        style={{ marginTop: "20px", marginBottom: "200px" }}
                        value={formValues.dob}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                
                <div className="form-row">
                    <TextField name="ssn" type="password" label="Social Security Number" variant="standard" value={formValues.ssn} onChange={handleInputChange} required />
                </div>

                <Button variant="text" type="submit" style={{ marginTop: "10px" }} >Submit</Button>
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