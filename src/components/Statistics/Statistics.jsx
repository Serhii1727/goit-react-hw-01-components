import PropTypes from 'prop-types';
import { Section, Title, ListStats } from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
    return <Section className='section'>
        {title ? <Title>{title}</Title> : undefined}
        <ListStats className='list-stats'>
            {stats.map(el => {
                return (
                    <li key={el.id} className='item'>
                        <span className='label'>{el.label}</span>
                        <span className='percentage'>{el.percentage}%</span>
                    </li>
                )
            })}
        </ListStats>
    </Section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}