import styled from 'styled-components';

export const FriendsItem = styled.li`
  width: 300px;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: lightgray;
  border-radius: 8px;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const FriendAvatar = styled.img`
  margin-right: 20px;
  margin-left: 20px;
`;

export const FriendName = styled.p`
  font-size: 22px;
  font-weight: 600;
`;

export const IsFriendOnline = styled.span(
  props => `
  ::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 20px;
    background-color: ${props.isOnline ? 'green' : 'red'};
`
);
