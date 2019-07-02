import React from 'react';
import { select } from '@storybook/addon-knobs';
import styled from 'styled-components';
import ThemeProvider from '../components/ThemeProvider';

const Base = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.colors.uiBackground}
    display: flex; 
    justify-content: center;
    align-items: center;
`;

const themeOptions = {
  White: 'white',
  g10: 'g10',
  g90: 'g90',
  g100: 'g100',
};

function themeDecorator(story) {
  const content = story();
  return (
    <ThemeProvider themeColor={select('Theme', themeOptions, 'white')}>
      <Base>{content}</Base>
    </ThemeProvider>
  );
}

export default themeDecorator;
