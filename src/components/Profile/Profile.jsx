import PropTypes from 'prop-types';
import { Container, ContainerUser, UserAvatar, ProfileInfo, ProfileInfoItem } from './Profile.styled.jsx'

import defaultUserAvatar from '../../defaultUserAvatar.jpg'

export const Profile = ({ userName, userTag, userLocation, userAvatar = defaultUserAvatar, userStats }) => {
    const { followers, views, likes } = userStats;
    return <Container className='container'>
        <ContainerUser className='container-user'>
            <UserAvatar className='user-avatar'>
                <img
                    src={userAvatar}
                    alt="User avatar"
                    width={75}
                    height={75}

                />
            </UserAvatar>
            <p className='user-name'>
                {userName}
            </p>
            <p className='user-tag'>
                {userTag}
            </p>
            <p className='user-location'>
                {userLocation}
            </p>


            <ProfileInfo className='profile-info'>
                <ProfileInfoItem className='profile-inf-item'>
                    <span className='name'>Followers</span>
                    <span className='amount'>{followers}</span>
                </ProfileInfoItem>
                <ProfileInfoItem className='profile-inf-item'>
                    <span className='name'>Views</span>
                    <span className='amount'>{views}</span>
                </ProfileInfoItem>
                <ProfileInfoItem className='profile-inf-item'>
                    <span className='name'>Likes</span>
                    <span className='amount'>{likes}</span>
                </ProfileInfoItem>
            </ProfileInfo>
        </ContainerUser>
    </Container >
}

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    userTag: PropTypes.string.isRequired,
    userLocation: PropTypes.string.isRequired,
    userAvatar: PropTypes.string.isRequired,
    userStats: PropTypes.object.isRequired,
}