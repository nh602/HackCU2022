import { Typography, RadioGroup, Radio, TextField, Button } from '@mui/material';
import "../css/ballot.css";


const BallotMeasure = (props) =>{

    let keyVar = 0;
    const options = props.measureOptions.map(optionText => {
        const option = (
            <label className="option-label" key={ keyVar }>
                    <input 
                        type="radio" 
                        name={ `measure-${props.id}-option` }
                    />
                <Typography variant="subtitle2">
                    { optionText }
                </Typography>
            </label>
        );
        keyVar++;
        return option;
    });
    if (props.writein) {
        options.push(
            <label className="option-label" key={ keyVar }>
                    <input 
                        type="radio" 
                        name={ `measure-${props.id}-option` }
                    />
                    <TextField variant="outlined" label="write-in" />
            </label>
        );
    }

    return (
        <label className="measure-label">
            <Typography variant="subtitle1" className="measure-text">{ props.measureText }</Typography>
            <div className="options">
                { options }
            </div>
        </label>
    );
        
}

const Ballot = (props) => {

    // TODO change props.measures to some array from the api
    const measures = props.measures.map((measureObj) => (
        <BallotMeasure 
            id={ measureObj.id }
            measureOptions={ measureObj.measureOptions }
            measureText={ measureObj.measureText }
            writein={ measureObj.writein }
            key={ measureObj.id }
        />
    ));

    return (
        <div className="ballot page">
            <form className="ballot-form">
                <Typography variant="h4" className="ballot-title">
                    { props.state } State Ballot
                </Typography>
                { measures }
                <Button 
                    variant="contained" 
                    type="submit" 
                >
                    Cast
                </Button>
            </form>
        </div>
    );
}

export default Ballot;