import PropTypes from 'prop-types';
import { FriendsItem } from './FriendListItem.styled';
import { FriendAvatar } from './FriendListItem.styled';
import { FriendName } from './FriendListItem.styled';
import { IsFriendOnline } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <IsFriendOnline></IsFriendOnline>
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
