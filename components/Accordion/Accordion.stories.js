import React from 'react';
import { storiesOf } from '@storybook/react';
import Add from '@carbon/icons-react/es/add--filled/16';

import { Accordion, AccordionGroup } from '.';

storiesOf('Accordion', module).add('Default', () => (
  <AccordionGroup>
    <Accordion title="Section 1 title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Accordion>
    <Accordion renderIcon={<Add />} title="Section 2 title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Accordion>
  </AccordionGroup>
));
