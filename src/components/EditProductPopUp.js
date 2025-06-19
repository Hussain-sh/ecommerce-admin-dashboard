import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  InputLabel,
  Avatar,
  Typography
} from "@mui/material";
import styled from "styled-components";
import CustomButton from "./ui-library/CustomButton";

const FieldWrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled(InputLabel)`
  margin-bottom: 6px;
  font-weight: 500;
`;

const ErrorText = styled(Typography)`
  color: red;
  font-size: 0.8rem;
  margin-top: 4px;
`;

const PreviewImage = styled(Avatar)`
  width: 80px;
  height: 80px;
  margin-top: 8px;
`;

const EditProductPopUp = ({ open, onClose, product, onSave }) => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    stock: "",
    description: "",
    image: "",
    preview: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (product) {
      setForm({
        ...product,
        preview: product.image || ""
      });
      setErrors({});
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setForm((prev) => ({
        ...prev,
        image: file,
        preview: previewUrl
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.price) newErrors.price = "Price is required";
    if (form.price <= 0) newErrors.price = "Price must be greater than 0";
    if (!form.stock) newErrors.stock = "Stock is required";
    if (form.stock < 0) newErrors.stock = "Stock cannot be negative";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const updatedProduct = {
      ...product,
      title: form.title.trim(),
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
      description: (form.description || "").trim(),
      image: form.preview
    };

    onSave(updatedProduct);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit Product</DialogTitle>
      <DialogContent>

        <FieldWrapper>
          <Label htmlFor="title">Title</Label>
          <TextField
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            fullWidth
            error={Boolean(errors.title)}
          />
          {errors.title && <ErrorText>{errors.title}</ErrorText>}
        </FieldWrapper>

        <FieldWrapper>
          <Label htmlFor="price">Price</Label>
          <TextField
            id="price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            fullWidth
            error={Boolean(errors.price)}
          />
          {errors.price && <ErrorText>{errors.price}</ErrorText>}
        </FieldWrapper>

        <FieldWrapper>
          <Label htmlFor="stock">Stock</Label>
          <TextField
            id="stock"
            name="stock"
            type="number"
            value={form.stock}
            onChange={handleChange}
            fullWidth
            error={Boolean(errors.stock)}
          />
          {errors.stock && <ErrorText>{errors.stock}</ErrorText>}
        </FieldWrapper>

        <FieldWrapper>
          <Label htmlFor="description">Description</Label>
          <TextField
            id="description"
            name="description"
            multiline
            rows={3}
            value={form.description}
            onChange={handleChange}
            fullWidth
          />
        </FieldWrapper>

        <FieldWrapper>
          <Label>Upload Image</Label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {form.preview && <PreviewImage src={form.preview} variant="square" />}
        </FieldWrapper>

      </DialogContent>

      <DialogActions>
        <CustomButton
  onClick={onClose}
  bg="transparent"
  border="1px solid #1976d2"
  borderRadius="8px"
    color="#1976d2"
    padding="8px 16px"
    fontSize="14px"
    hover="transparent"
>
  Cancel
</CustomButton>

        <CustomButton onClick={handleSubmit}>
  Save Changes
</CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default EditProductPopUp;
