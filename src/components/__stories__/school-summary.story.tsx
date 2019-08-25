import React from 'react';
import { storiesOf } from '@storybook/react';

import SchoolSummary from '../school-summary';
import schools from '../../common/schools';

const selectSchool = (teamId) => console.log('selected school: ', teamId);

storiesOf('School Summary', module)
  .add(`${schools.ALABAMA.name}`, () => (
    <SchoolSummary
      isSelected={false}
      selectSchool={selectSchool}
      school={schools.ALABAMA}
    />
  ))
  .add(`${schools.ALABAMA.name} selected`, () => (
    <SchoolSummary
      isSelected={true}
      selectSchool={selectSchool}
      school={schools.ALABAMA}
    />
  ));
