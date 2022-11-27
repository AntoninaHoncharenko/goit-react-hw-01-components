import PropTypes from 'prop-types';
import { ProfileCard } from './Profile.styled';
import { UserInfo } from './Profile.styled';
import { ImgWrap } from './Profile.styled';
import { UserName } from './Profile.styled';
import { UserTag } from './Profile.styled';
import { UserLocation } from './Profile.styled';
import { UserStatList } from './Profile.styled';
import { UserStatItem } from './Profile.styled';
import { StatLabel } from './Profile.styled';
import { StatQuantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <UserInfo>
        <ImgWrap>
          <img src={avatar} alt="User avatar" width="130" />
        </ImgWrap>
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserInfo>

      <UserStatList>
        <UserStatItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{stats.followers}</StatQuantity>
        </UserStatItem>
        <UserStatItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{stats.views}</StatQuantity>
        </UserStatItem>
        <UserStatItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{stats.likes}</StatQuantity>
        </UserStatItem>
      </UserStatList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};