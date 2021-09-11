import './StatisticsPanel.scss';

// Import Models
import { StatisticsApi } from '../../shared/models/api-models';

// Import Components
import StatisticsItem from '../StatisticsItem/StatisticsItem';

function StatisticsPanel (props: {statistics: StatisticsApi[]}) {
    return (
        <div className="panel-wrapper">
            <div className="left-panel">KYC List</div>
            <div className="right-panel">

                {
                    props.statistics.length ?
                    props.statistics.map((item: StatisticsApi, index: number) =>
                        (
                            <StatisticsItem key={index} item={item}></StatisticsItem>
                        )
                    ) : null
                }
            </div>
        </div>
    );
}

export default StatisticsPanel;