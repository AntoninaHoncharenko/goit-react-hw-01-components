import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeadTr,
  TableHeadTh,
  TableTr,
  TableBody,
  TableTd,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableHeadTr>
          <TableHeadTh>Type</TableHeadTh>
          <TableHeadTh>Amount</TableHeadTh>
          <TableHeadTh>Currency</TableHeadTh>
        </TableHeadTr>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableTr key={id} type={type}>
              <TableTd>{type}</TableTd>
              <TableTd>{amount}</TableTd>
              <TableTd>{currency}</TableTd>
            </TableTr>
          );
        })}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
