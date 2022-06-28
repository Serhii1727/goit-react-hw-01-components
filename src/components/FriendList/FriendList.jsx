import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import friends from '../../user-info-json/friends.json'


export const FriendList = (friendsList) => {
    return <ul>
        {friends.map(el => (
            <FriendListItem
                key={el.id}
                avatar={el.avatar}
                name={el.name}
                isOnline={el.isOnline}
            />
        ))}

    </ul>
}

FriendList.propTypes = {
    friendsList: PropTypes.array
}