import { Typography } from '@mui/material';

const BallotMeasure = (props) =>{

    const options = props.options.map()

    return (
        <></>
    );
}

const Ballot = (props) => {

    const measures = props.measures;

    return (
        <div className="ballot page">
            <Typography variant="h2" className="page-title">Ballot Page</Typography>
            <form className='ballot-form' action="#" id="ballot-form">

            </form>
        </div>
    );
}

export default Ballot;