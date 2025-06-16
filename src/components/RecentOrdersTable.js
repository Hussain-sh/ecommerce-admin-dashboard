import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Chip
} from '@mui/material';
import styled from 'styled-components';

const TableWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;  

const mockData = [
  { id: 1, customer: 'John Doe', date: '2024-12-01', amount: 120.5, status: 'Completed' },
  { id: 2, customer: 'Jane Smith', date: '2024-12-03', amount: 80.0, status: 'Pending' },
  { id: 3, customer: 'Alice Johnson', date: '2024-12-05', amount: 150.75, status: 'Shipped' },
  { id: 4, customer: 'Bob Brown', date: '2024-12-07', amount: 99.99, status: 'Completed' },
  { id: 5, customer: 'Eva White', date: '2024-12-09', amount: 60.0, status: 'Cancelled' },
];

function getStatusColor(status) {
  switch (status) {
    case 'Completed':
      return 'success';
    case 'Pending':
      return 'warning';
    case 'Cancelled':
      return 'error';
    case 'Shipped':
      return 'info';
    default:
      return 'default';
  }
}

export default function RecentOrdersTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('date');

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedData = [...mockData].sort((a, b) => {
    if (orderBy === 'amount') {
      return order === 'asc' ? a.amount - b.amount : b.amount - a.amount;
    } else {
      return order === 'asc'
        ? a[orderBy].localeCompare(b[orderBy])
        : b[orderBy].localeCompare(a[orderBy]);
    }
  });

  return (
    <TableWrapper>
        <Title>Recent Orders</Title>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'customer'}
                  direction={order}
                  onClick={() => handleSort('customer')}
                >
                  Customer
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'date'}
                  direction={order}
                  onClick={() => handleSort('date')}
                >
                  Date
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === 'amount'}
                  direction={order}
                  onClick={() => handleSort('amount')}
                >
                  Amount ($)
                </TableSortLabel>
              </TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.customer}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell align="right">{row.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Chip label={row.status} color={getStatusColor(row.status)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
}
