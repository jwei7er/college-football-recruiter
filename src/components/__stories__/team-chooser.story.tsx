import React from 'react';
import { storiesOf } from '@storybook/react';

import TeamChooser from '../team-chooser';

const begin = () => console.log('begin clicked');

storiesOf('Team Chooser', module).add('Example', () => (
  <TeamChooser begin={begin} />
));
