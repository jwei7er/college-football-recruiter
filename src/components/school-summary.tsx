import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import Row from './row';
import School from '../interfaces/school-interface';

interface SchoolSummaryProps {
  isSelected: boolean;
  school: School;
  selectSchool(teamId: string): void;
}

const SchoolSummary: FC<SchoolSummaryProps> = ({
  isSelected,
  school,
  selectSchool
}) => {
  const {
    name,
    id,
    conference,
    division,
    nationalChampionships,
    overallRating,
    offenseRating,
    defenseRating
  } = school;

  const handleOnClick = () => {
    selectSchool(id);
  };

  return (
    <SchoolSummaryRow onClick={handleOnClick} isSelected={isSelected}>
      <Name>{name}</Name>
      <Conference>{conference}</Conference>
      {division && <Conference>{division}</Conference>}
      <NationalChampionships>{nationalChampionships}</NationalChampionships>
      <Rating>{overallRating}</Rating>
      <Rating>{offenseRating}</Rating>
      <Rating>{defenseRating}</Rating>
    </SchoolSummaryRow>
  );
};

export default styled(SchoolSummary)``;

const SchoolSummaryRow = styled(Row)<{ isSelected: boolean }>`
  padding: 10px;
  height: 30px;
  align-items: center;

  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid gray;
    `}
`;

const Name = styled(Row)`
  font-size: 18px;
  font-weight: bold;
  width: 300px;
  text-transform: uppercase;
`;

const Conference = styled('div')`
  margin-right: 20px;
`;

const NationalChampionships = styled('div')`
  margin-right: 50px;
`;

const Rating = styled('div')`
  margin-right: 15px;
`;
