import PropTypes from 'prop-types';
import defaultUserAvatar from '../../defaultUserAvatar.jpg'

export const Profile = ({ userName, userTag, userLocation, userAvatar = defaultUserAvatar, userStats }) => {
    const { followers, views, likes } = userStats;
    return <div>
        <div>
            <img
                src={userAvatar}
                alt="User avatar"
            />
            <p>{userName}</p>
            <p>{userTag}</p>
            <p>{userLocation}</p>
        </div>

        <ul>
            <li>
                <span>Followers</span>
                <span>{followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{likes}</span>
            </li>
        </ul>
    </div>
}

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    userTag: PropTypes.string.isRequired,
    userLocation: PropTypes.string.isRequired,
    userAvatar: PropTypes.string.isRequired,
    userStats: PropTypes.object.isRequired,
}