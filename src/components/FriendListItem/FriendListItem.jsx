import PropTypes from 'prop-types';
import { ListItem } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <ListItem className='list-item'>
        <span className='status'>{isOnline}</span>
        <img className='avatar' src={avatar} alt="User avatar" width="48" />
        <p className='name'>{name}</p>
    </ListItem>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}




