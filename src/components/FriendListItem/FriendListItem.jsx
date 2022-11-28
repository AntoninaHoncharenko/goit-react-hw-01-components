import PropTypes from 'prop-types';
import {
  FriendsItem,
  FriendAvatar,
  FriendName,
  IsFriendOnline,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <IsFriendOnline isOnline={isOnline}></IsFriendOnline>
      <FriendAvatar src={avatar} alt="User avatar" width="55" />
      <FriendName>{name}</FriendName>
    </FriendsItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
