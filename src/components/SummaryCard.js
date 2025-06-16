import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';


const StyledCard = styled(Card)`
  &&& {
    width: 30%;
    border-radius: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const CardContents = styled(CardContent)`
  &&& {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const Value = styled(Typography)`
  &&& { 
    font-size: 28px;
    font-weight: 700;
    font-family: "barlow", sans-serif;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-left: 3px solid ${props => props.indicatorColor || '#ff6e00'};
  padding: 0 10px;
`;

const CardTitle = styled(Typography)`
  &&& {
    font-size: 20px;
    font-weight: 600;
    font-family: "barlow", sans-serif;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const CardBody = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: "barlow", sans-serif;
`;

const ValueWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default function SummaryCard({title, value, indicatorColor, indicatorIcon, desc}) {
  return (
    <StyledCard>
      <CardContents>
        <TitleWrapper indicatorColor={indicatorColor}>
          <CardTitle variant="h5" component="div">{title}</CardTitle>
        </TitleWrapper>

        <CardBody>
            <ValueWrapper>
                <Value>{value}</Value>
                {indicatorIcon}
            </ValueWrapper>
            <Typography variant="body2" color="text.secondary">{desc}</Typography>
        </CardBody>
      </CardContents>
    </StyledCard>
  );
}
