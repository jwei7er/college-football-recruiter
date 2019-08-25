import React, { FC, useState } from 'react';
import styled from 'styled-components';
import TeamChooser from './components/team-chooser';

enum ViewStates {
  TeamChooser = 'TEAM_CHOOSER'
}

const App: FC = () => {
  const [view, setView] = useState(ViewStates.TeamChooser);
  const [teamId, setTeamId] = useState<string>();

  if (view === ViewStates.TeamChooser) {
    return <TeamChooser begin={setTeamId} />;
  }
  return null;
};

export default styled(App)``;
