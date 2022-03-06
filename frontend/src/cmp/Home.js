import { Typography } from "@mui/material";
// import { useState } from 'react';
import Login from "./Login";


const Home = () => {


    return (
        <div className="home page">
            <div className="page-body">
                <Typography variant="h2">Blockchain Ballot</Typography>
                <Typography variant="h6" align="center">
                    Welcome! This web-app is a proof-of-concept demo for a secure, efficient, and completely online 
                    system of voting. The Blockchain Ballot relies on encryption and blockchain technology to prevent
                    fraudulent voting and discrepencies in vote-counting, all while being completely accessable
                    online! Users can vote in local elections with their state-ballot if they have a valid 
                    SSN and are registered to vote in their state. Click the button below to verify your credentials 
                    and cast your ballot, or visit the About page and learn more about our tech!
                </Typography>
                <Login /> 
            </div>
        </div>
    );
}


export default Home;