import "../css/login.css";
import { TextField, Button, Modal, Typography, Paper } from '@mui/material';
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
    firstName: "",
    lastName: "",
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
                if (res.code == 200) {
                    window.open("/ballot", "_self"); 
                }
            })
            .catch((err) => {
                console.log(err)
            }, []);
    };

    const loginDiv = (
        <Paper className="login-div">
            <div className="modal-header">
                <Typography align="center" variant="h6">Please enter your legal name, date of birth, and SSN.</Typography>
            </div>
            <form className="login-form" onSubmit={ handleSubmit } id="login-form">
                <TextField name="firstName" label="First Name" variant="standard" value={formValues.firstName} onChange={handleInputChange} required />
                <TextField name="lastName" label="Last Name" variant="standard" value={formValues.lastName} onChange={handleInputChange} required />
                <TextField name="dob" label=" " type="date" variant="standard" value={formValues.dob} onChange={handleInputChange} required />
                <TextField name="ssn" type="password" label="SSN" variant="standard" value={formValues.ssn} onChange={handleInputChange} required />
                <div className="btn-squash">
                    <Button variant="contained" color="secondary" type="submit" ><strong>Submit</strong></Button>
                </div>
                </form>
        </Paper>
    );

    return (
        <div>
            <Button color="secondary" variant="contained" onClick={handleOpen} size="large">
                <strong>Vote</strong>
            </Button>
            <Modal open={open} onClose={handleClose}>
                { loginDiv }
            </Modal>
        </div>
    );
}


export default Login;