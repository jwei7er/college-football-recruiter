import React, { FC, useState } from 'react';
import styled from 'styled-components';

import Row from './row';
import Column from './column';
import schools from '../common/schools';
import SchoolSummary from './school-summary';
import Button from './button';

interface TeamChooserProps {
  begin(teamId: string): void;
}

const TeamChooser: FC<TeamChooserProps> = ({ begin }) => {
  const [teamId, setTeamId] = useState<string>();

  const teams: JSX.Element[] = [];

  Object.keys(schools).map((teamKey) => {
    teams.push(
      <SchoolSummary
        isSelected={teamId === teamKey}
        selectSchool={setTeamId}
        school={schools[teamKey]}
      />
    );
  });

  const handleBeginClick = () => {
    if (teamId) {
      begin(teamId);
    }
  };

  return (
    <>
      <SelectedSchoolRow>
        Selected School:
        {teamId && schools[teamId].name}
        <Button disabled={!teamId} onClick={handleBeginClick}>
          Begin
        </Button>
      </SelectedSchoolRow>
      <Column>{teams}</Column>
    </>
  );
};

export default styled(TeamChooser)``;

const SelectedSchoolRow = styled(Row)`
  justify-content: center;
  align-items: center;
`;
