import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  margin: 0 auto;
  table-layout: fixed;
  border-collapse: collapse;
  margin-bottom: 50px;
  border-radius: 4px;
`;

export const TableHead = styled.thead``;

export const TableHeadTr = styled.tr``;

export const TableHeadTh = styled.th`
  border: 1px solid #e3eef7;
  padding: 20px 0;
  font-size: 18px;
  text-transform: uppercase;
  color: white;
  background-color: grey;
`;

export const TableBody = styled.tbody``;

export const TableTr = styled.tr`
  text-align: center;
  background-color: ${props => {
    switch (props.type) {
      case 'invoice':
        return 'yellow';
      case 'payment':
        return 'orangered';
      case 'withdrawal':
        return 'orange';
      case 'deposit':
        return 'lightgreen';
      default:
        return 'white';
    }
  }};
`;

export const TableTd = styled.td`
  border: 1px solid #e3eef7;
  padding: 15px 0;
  font-size: 18px;
`;
