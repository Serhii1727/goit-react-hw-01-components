import PropTypes from 'prop-types';

export const UserStatistics = (data) => {
    const { id, label, percentage } = data;
    return (
        <li key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
        </li>)
}

UserStatistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired,
    }))
}