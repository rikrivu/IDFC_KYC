import './StatisticsItem.scss';

// Import Models
import { StatisticsApi } from '../../shared/models/api-models';

function StatisticsItem (props: {item: StatisticsApi}) {
    // console.log('StatisticsItem prop', props);
    return (
        <div className={props.item.label}>
            {props.item.value}
            <span>
                <div>{props.item.display_name.replace(' KYC', '')}</div>
                <div>KYC</div>
            </span>
        </div>
    );
}

export default StatisticsItem;