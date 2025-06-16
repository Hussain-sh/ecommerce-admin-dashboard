import React from 'react';
import styled from 'styled-components';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 300px;
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`; 

const SalesChart = () => {
 const data = [
  { month: 'Jan', sales: 450 },
  { month: 'Feb', sales: 700 },
  { month: 'Mar', sales: 900 },
  { month: 'Apr', sales: 1100 },
  { month: 'May', sales: 1234 },
  { month: 'Jun', sales: 1234 },
];


  return (
    <Wrapper>
        <Title>Sales Chart</Title>
        <ChartWrapper>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#4880FF"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                />
                </LineChart>
            </ResponsiveContainer>
        </ChartWrapper>
    </Wrapper>
    
  );
};

export default SalesChart;
