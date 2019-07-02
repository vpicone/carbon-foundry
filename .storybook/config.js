import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import ThemeProvider from '../components/ThemeProvider';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';
import {themes} from '@carbon/elements';

function loadStories() {
    const req = require.context('../components', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

const Base = styled.div`
    background-color: ${props => props.theme.colors.uiBackground};
    width: 100%;
    height: 300px;
    display: flex; 
    justify-content: center;
    align-items: center;
`

addDecorator((story) => (
    <ThemeProvider themeColor='g10'>
        <Base>
            {story()}
        </Base>
    </ThemeProvider>
));

addDecorator(withKnobs);

configure(loadStories, module);