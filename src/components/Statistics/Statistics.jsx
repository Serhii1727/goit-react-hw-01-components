import PropTypes from 'prop-types';
import { UserStatistics } from './UserStatistics';
import data from '../../user-info-json/data.json';


export const Statistics = ({ title }) => {
    return <section>
        {title ? <h2>{title}</h2> : undefined}

        <ul>
            {data.map(el => (
                <UserStatistics
                    id={el.id}
                    label={el.label}
                    percentage={el.percentage}
                />
            ))}

        </ul>
    </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
}