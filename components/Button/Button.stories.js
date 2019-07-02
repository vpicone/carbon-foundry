import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';
import AddFilled16 from '@carbon/icons-react/es/add--filled/16';
import { Button, ButtonGroup } from '.';

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
`;

const sizeOptions = {
  'Normal (default)': null,
  Small: 'small',
  Field: 'field',
};

storiesOf('Button', module)
  .add('Default', () => (
    <ButtonRow>
      <Button
        disabled={boolean('Disabled', false)}
        variant="primary"
        size={select('Size', sizeOptions)}
      >
        Primary
      </Button>
      <Button
        disabled={boolean('Disabled', false)}
        variant="secondary"
        size={select('Size', sizeOptions)}
      >
        Secondary
      </Button>
      <Button
        disabled={boolean('Disabled', false)}
        variant="tertiary"
        size={select('Size', sizeOptions)}
      >
        Tertiary
      </Button>
      <Button
        disabled={boolean('Disabled', false)}
        variant="ghost"
        size={select('Size', sizeOptions)}
      >
        Ghost
      </Button>
    </ButtonRow>
  ))
  .add('Button Group', () => (
    <ButtonGroup>
      <Button variant="secondary">Default</Button>
      <Button variant="primary">Default</Button>
    </ButtonGroup>
  ))
  .add('With icon', () => (
    <ButtonRow>
      <Button
        disabled={boolean('Disabled', false)}
        variant="primary"
        icon={<AddFilled16 />}
        size={select('Size', sizeOptions)}
      >
        Primary
      </Button>
      <Button
        disabled={boolean('Disabled', false)}
        variant="secondary"
        icon={<AddFilled16 />}
        size={select('Size', sizeOptions)}
      >
        Secondary
      </Button>
      <Button
        disabled={boolean('Disabled', false)}
        variant="tertiary"
        icon={<AddFilled16 />}
        size={select('Size', sizeOptions)}
      >
        Tertiary
      </Button>
      <Button
        disabled={boolean('Disabled', false)}
        variant="ghost"
        icon={<AddFilled16 />}
        size={select('Size', sizeOptions)}
      >
        Ghost
      </Button>
    </ButtonRow>
  ));
