import { Typography, RadioGroup, Radio, TextField, Button, Paper } from '@mui/material';
import "../css/ballot.css";



const Ballot = (props) => {

    const BallotMeasure = (props) => {
        let keyVar = 0;
        const options = props.measureOptions.map(optionText => {
            const option = (
                <label className="option-label" key={ keyVar }>
                        <input 
                            type="radio" 
                            name={ `measure-${props.id}-option` }
                            id={ `measure-${props.id}-option-${keyVar}`}
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
                <Typography variant="subtitle1" className="measure-text">{ props.measureText }</Typography>
                <div className="options">
                    { options }
                </div>
            </label>
        );
            
    
    
    }

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

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
                    >
                        Cast
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default Ballot;