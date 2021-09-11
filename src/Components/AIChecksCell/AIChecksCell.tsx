import './AIChecksCells.scss';

// Import Components
import PieChart from '../PieChart/PieChart';

function AIChecks (props: any) {

    // console.log('AIChecks props', props);

    return (
        <div className="chart-wrapper">

            <PieChart value={props.value}></PieChart>

            <div className="chart-description">{props.value}% Passed</div>

        </div>
    );
}

export default AIChecks;