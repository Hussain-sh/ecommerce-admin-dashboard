import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Avatar
} from "@mui/material";
import styled from "styled-components";
import CustomButton from "./ui-library/CustomButton";
import EditIcon from '@mui/icons-material/Edit';


const TableWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ProductTable = ({ onEdit, products }) => {
  return (
    <TableWrapper>
      <Title>Product List</Title>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price ($)</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Avatar variant="square" src={product.image} alt={product.title} />
                </TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <CustomButton
  onClick={() => onEdit(product)}
  bg="transparent"
  color="#1976d2"
  padding="8px 10px"
  fontSize="14px"
  hover="transparent"
>
  <EditIcon style={{ fontSize: '20px' }} />
</CustomButton>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export default ProductTable;
