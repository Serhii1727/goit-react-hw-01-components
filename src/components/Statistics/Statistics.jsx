import PropTypes from 'prop-types';


export const Statistics = ({ title, stats }) => {
    return <section>
        {title ? <h2>{title}</h2> : undefined}
        <ul>
            {stats.map(el => {
                return (
                    <li key={el.id}>
                        <span>{el.label}</span>
                        <span>{el.percentage}%</span>
                    </li>
                )
            })}
        </ul>
    </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}