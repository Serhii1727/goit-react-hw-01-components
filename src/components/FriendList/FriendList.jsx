import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { List } from './FriendList.styled';
import friends from '../../user-info-json/friends.json'


export const FriendList = (friendsList) => {
    return <List className='friends-list'>
        {friends.map(el => (
            <FriendListItem
                key={el.id}
                avatar={el.avatar}
                name={el.name}
                isOnline={el.isOnline}
            />
        ))}

    </List>
}

FriendList.propTypes = {
    friendsList: PropTypes.array
}