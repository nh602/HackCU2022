import { Typography, Paper } from '@mui/material';
import flagimg from "../img/flag.jpeg";
import "../css/success.css";


const Success = () => {

    return (
        <div className="success page">
            <div className="page-body">
                <Typography variant="h3">Woohoo!</Typography>
                <Typography variant="h4">Your vote has been successfully cast!</Typography>
                <div className="img-squash">
                    <img src={ flagimg } alt="flag" />
                </div>
            </div>
        </div>
    )
}


export default Success;