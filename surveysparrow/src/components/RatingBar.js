import React, { memo } from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  height: 100px;
  width: 20px;
  background-color: #333;
  margin-right: 10px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`;

const Bar = styled.div`
  width: 100%;
  background-color: #007bff;
  transition: height 0.3s ease-in-out;
`;

const RatingBar = memo(({ count, maxCount }) => {
  const barHeight = (count / maxCount) * 100;

  return (
    <BarContainer>
      <Bar style={{ height: `${barHeight}%` }} />
    </BarContainer>
  ); 
});

export default RatingBar;
