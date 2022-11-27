import styled from 'styled-components';

export const StatsBox = styled.section`
  width: 400px;
  height: 178px;
  background-color: lightgray;
  margin: 50px auto;
  padding-top: 35px;
`;

export const StatsTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 35px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  border: 1px solid lightgray;
`;

const randomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #${randomColor};
`;

export const StatsLabel = styled.span`
  font-size: 18px;
  margin-bottom: 4px;
`;

export const StatsPercent = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
