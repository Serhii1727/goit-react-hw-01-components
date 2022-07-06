import PropTypes from 'prop-types';
import { ListItem } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const spanClass = isOnline ? 'statusOnline' : 'statusOffline';

    return <ListItem className='list-item'>
        <span className={spanClass}></span>
        {/* {isOnline ? <span className='statusOnline'></span> : <span className='statusOffline'></span>} */}
        <img className='avatar' src={avatar} alt="User avatar" width="48" />
        <p className='name'>{name}</p>
    </ListItem>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}




