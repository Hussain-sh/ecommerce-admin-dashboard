import React from 'react';
import { Button as MuiButton } from '@mui/material';
import styled from 'styled-components';

const StyledButton = styled(MuiButton)`
  &&& {
    background-color: ${(props) => props.bg || '#1976d2'};
    border: ${(props) => props.border || 'none'};
    color: ${(props) => props.color || 'white'};
    text-transform: none;
    padding: ${(props) => props.padding || '8px 20px'};
    border-radius: ${(props) => props.radius || '8px'};
    font-size: ${(props) => props.fontSize || '14px'};
    font-weight: ${(props) => props.fontWeight || '500'};
    box-shadow: none;

    &:hover {
      background-color: ${(props) => props.hover || '#1565c0'};
      box-shadow: none;
    }

    svg {
      font-size: 20px;
    }
  }
`;

const CustomButton = ({
  children,
  startIcon,
  bg,
  hover,
  color,
  padding,
  radius,
  fontSize,
  fontWeight,
  border,
  ...rest
}) => {
  return (
    <StyledButton
      disableRipple
      startIcon={startIcon}
      bg={bg}
      hover={hover}
      color={color}
      padding={padding}
      radius={radius}
      fontSize={fontSize}
      fontWeight={fontWeight}
      border={border}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
