import { Typography, Button, Paper } from '@mui/material';
import { useState } from 'react';
import UserService from '../services/UserService';
import "../css/ballot.css";


const mockBallot = {
    "measures": [
        {
            "id": 0,
            "measureText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
            "measureOptions": ["option A", "option B", "option C"], 
            "writein": true
        },
        {
            "id": 1,
            "measureText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
            "measureOptions": ["option A", "option B", "option C", "option D"], 
            "writein": false
        },
        {
            "id": 2,
            "measureText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
            "measureOptions": ["option A", "option B"], 
            "writein": true
        },
        {
            "id": 3,
            "measureText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
            "measureOptions": ["option A", "option B", "option C"], 
            "writein": false
        }
    ]
}

const Ballot = (props) => {

    const [ballotData, setBallotData] = useState({})
    const ballotInfo = mockBallot;

    const handleChange = event => {
        let newBallotData = ballotData;
        newBallotData[event.target.name] = event.target.value;
        setBallotData(newBallotData);
    }

    const BallotMeasure = (props) => {
        let keyVar = 0;
        const options = props.measureOptions.map(optionText => {
            const option = (
                <label className="option-label" key={ keyVar }>
                        <input 
                            type="radio" 
                            name={ `${props.id}` }
                            id={ `measure-${props.id}-option-${keyVar}`}
                            value={ optionText }
                            onChange={ handleChange }
                        />
                    <Typography variant="subtitle2">
                        { optionText }
                    </Typography>
                </label>
            );
            keyVar++;
            return option;
        });
    
        return (
            <label className="measure-label">
                <Typography variant="subtitle1" className="measure-text">{props.id+1}. { props.measureText }</Typography>
                <div className="options">
                    { options }
                </div>
            </label>
        );
            
    
    
    }

    // TODO change props.measures to some array from the api
    const measures = ballotInfo.measures.map((measureObj) => (
        <BallotMeasure 
            id={ measureObj.id }
            measureOptions={ measureObj.measureOptions }
            measureText={ measureObj.measureText }
            writein={ measureObj.writein }
            key={ measureObj.id }
        />
    ));

    const handleSubmit = (event) => {
        event.preventDefault();
        UserService.postBallot(ballotData)
            .then((res) => {
                console.log(res);
                if(res.success === true) {
                    //window.open('/', "_self")
                }
            })
            .catch((err) => {
                console.log(err);
            }, []);
    };

    return (
        <div className="ballot page">
            <Paper className="ballot-paper" elevation={5}>
                <form className="ballot-form" onSubmit={ handleSubmit } >
                    <Typography variant="h4" className="ballot-title">
                        { props.state } State Ballot
                    </Typography>
                    { measures }
                    <Button 
                        variant="contained" 
                        type="submit" 
                        color="secondary"
                    >
                       <strong>Cast ballot</strong>
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default Ballot;