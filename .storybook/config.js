import { addParameters, configure } from '@storybook/react';

addParameters({
  options: {
    showPanel: false
  }
});

function loadStories() {
  const req = require.context('../src', true, /\.story\.(ts|tsx)$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
