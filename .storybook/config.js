import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import themeDecorator from './themeDecorator';

function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

// Add theme and wrapper styles
addDecorator(themeDecorator);

addDecorator(withKnobs);

configure(loadStories, module);
