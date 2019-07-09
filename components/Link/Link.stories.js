import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import { Link } from '.';

storiesOf('Link', module).add('Default', () => (
  <Link
    disabled={boolean('disabled', false)}
    href={text('href', 'https://www.carbondesignsystem.com')}
  >
    Carbon Design
  </Link>
));
