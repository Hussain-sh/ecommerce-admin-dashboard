import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ProductTable from '@/components/ProductTable';
import EditProductPopUp from '@/components/EditProductPopUp';
import AddProductPopUp from '@/components/AddProductPopUp';

const ProductManagement = () => {

  const ProductData = [
  {
    id: 1,
    title: "Basic T-Shirt",
    price: 19.99,
    stock: 120,
    image: "https://via.placeholder.com/60"
  },
  {
    id: 2,
    title: "Running Shoes",
    price: 59.99,
    stock: 80,
    image: "https://via.placeholder.com/60"
  },
  {
    id: 3,
    title: "Denim Jeans",
    price: 39.99,
    stock: 50,
    image: "https://via.placeholder.com/60"
  }
];

  const [products, setProducts] = useState(ProductData);
 const [selectedProduct, setSelectedProduct] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [openAddPopUp, setOpenAddPopUp] = useState(false);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditOpen(true);
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };


  const handleSave = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };
  return (
    <Container fluid>
      <ButtonWrapper>
          <CustomButton
  startIcon={<AddIcon />}
  onClick={() => setOpenAddPopUp(true)}
>
  Add Product
</CustomButton>

      </ButtonWrapper>
        <ProductTable products={products} setProducts={setProducts} onEdit={handleEdit} />
      <EditProductPopUp
        open={editOpen}
        onClose={() => setEditOpen(false)}
        product={selectedProduct}
        onSave={handleSave}
      />
      <AddProductPopUp
        open={openAddPopUp}
        onClose={() => setOpenAddPopUp(false)}
        onAdd={handleAddProduct}
      />
    </Container>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CustomButton = styled(MuiButton)`
  &&& {
    background-color: #1976d2;
    color: white;
    text-transform: none;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    box-shadow: none;

    &:hover {
      background-color: #1565c0;
      box-shadow: none;
    }

    svg {
      font-size: 20px;
    }
  }
`;

export default ProductManagement