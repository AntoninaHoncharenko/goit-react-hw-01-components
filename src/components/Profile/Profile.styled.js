import styled from 'styled-components';

export const ProfileCard = styled.div`
  background-color: lightgray;
  width: 300px;
  height: 410px;
  padding-top: 20px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 8px;
`;

export const UserInfo = styled.div`
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const ImgWrap = styled.div`
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 170px;
  height: 170px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
`;

export const UserTag = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  color: brown;
`;

export const UserLocation = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  color: brown;
`;

export const UserStatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: white;
  height: 85px;
  border: 1px solid lightgray;
  border-radius: 0 0 8px 8px;
`;

export const UserStatItem = styled.li`
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
`;

export const StatLabel = styled.span`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const StatQuantity = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: brown;
`;
