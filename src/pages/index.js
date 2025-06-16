import SummaryCard from "@/components/SummaryCard";
import React from "react";
import SouthEastIcon from '@mui/icons-material/SouthEast';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import styled from "styled-components";
import SalesChart from "@/components/SalesChart";
import { Container } from "react-bootstrap";
import RecentOrdersTable from "@/components/RecentOrdersTable";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
export default function Home() {
  return (
     <Container fluid>
   <Wrapper>
   <SummaryCard 
   title="Total Sales"
   value="$1,234"
   indicatorColor="#ff6e00"
   indicatorIcon={<TrendingUpIcon style={{ color: '#28a745', fontSize: '30px' }} />}
   desc="12.2% increase from last month"
   />

   <SummaryCard 
   title="Total Orders"
   value="87"
   indicatorColor="#6c757d"
   indicatorIcon={<SouthEastIcon style={{ color: '#ffc107', fontSize: '30px' }} />}
   desc="5.4% decrease from last month"
   />

   <SummaryCard 
   title="Active Users"
   value="20"
   indicatorColor="#28a745"
   indicatorIcon={<GroupIcon style={{ color: '#28a745', fontSize: '30px' }} />}
   desc="2% increase from last month"
   />
   </Wrapper>
   <SalesChart />
   <RecentOrdersTable />
   </Container>
  );
}
