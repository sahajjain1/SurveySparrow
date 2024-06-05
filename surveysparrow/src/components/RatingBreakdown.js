import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const RatingBreakdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #000;
  color: white;
  border-radius: 4px;
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const ChartArea = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
`;

const YAxisLabel = styled.div`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  margin-right: 10px;
  color: white;
`;

const XAxisLabelContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 50px;
`;

const Bar = styled.div`
  width: 100%;
  background-color: rgba(0, 123, 255, 0.5);
  border: 1px solid rgba(0, 123, 255, 1);
  border-radius: 4px 4px 0 0;
  height: ${(props) => props.height}%;
  transition: height 0.5s ease-in-out;
`;

const Value = styled.div`
  color: white;
  margin-bottom: 5px;
`;

const RegenerateButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const RatingBreakdown = () => {
  const [ratingCounts, setRatingCounts] = useState([35, 50, 40, 22, 10]);

  const regenerateRatingCounts = useCallback(() => {
    const newRatingCounts = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 51)
    );
    setRatingCounts(newRatingCounts);
  }, []);

  const maxCount = Math.max(...ratingCounts);
  const barHeights = ratingCounts.map((count) => (count / maxCount) * 100);

  return (
    <RatingBreakdownContainer>
      <ChartArea>
        <YAxisLabel>No. of ratings</YAxisLabel>
        <ChartContainer>
          {barHeights.map((height, index) => (
            <BarContainer key={index}>
              <Bar height={height} />
              <Value>{ratingCounts[index]}</Value>
            </BarContainer>
          ))}
        </ChartContainer>
      </ChartArea>
      <XAxisLabelContainer>Rating</XAxisLabelContainer>
      <RegenerateButton onClick={regenerateRatingCounts}>
        Regenerate
      </RegenerateButton>
    </RatingBreakdownContainer>
  );
};

export default RatingBreakdown;
