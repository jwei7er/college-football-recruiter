import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../button';

storiesOf('Button', module)
  .add('Click Me', () => <Button>Click Me</Button>)
  .add('Longer Button Text', () => <Button>Longer Button Text</Button>);
