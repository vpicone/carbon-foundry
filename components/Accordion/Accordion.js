import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textStyle } from 'styled-system';
import Chevron from '@carbon/icons-react/es/chevron--down/16';

const Details = styled.details`
  border-top: 1px solid ${props => props.theme.colors.ui03};
  border-bottom: 1px solid ${props => props.theme.colors.ui03};
  width: 100%;
  display: block;
  color: ${props => props.theme.colors.text01};
  & + & {
    border-top: none;
  }

  ${textStyle};
`;

const Summary = styled.summary.attrs({
  textStyle: 'bodyShort01',
})`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 1rem;
  transition: background-color cubic-bezier(0.2, 0, 0.38, 0.9) 110ms;
  background-color: ${({ theme, open }) => (open ? theme.colors.ui03 : 'none')};

  &:hover {
    background-color: ${props => props.theme.colors.ui03};
  }

  svg {
    fill: currentColor;
  }

  ${textStyle}
`;

const Expando = styled(Chevron)`
  transform: ${props => (props.open ? 'rotate(-180deg)' : '')};
  transition: transform 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
`;

const Content = styled.div.attrs({
  textStyle: 'bodyLong01',
})`
  padding: ${props => (props.open ? '1rem' : '0')};
  height: ${props => (props.open ? 'auto' : '0')};
  transition: padding-bottom cubic-bezier(0, 0, 0.38, 0.9) 110ms;

  ${textStyle}
`;

const Accordion = ({ title, children, renderIcon, ...rest }) => {
  const [openState, setOpenState] = useState(false);

  return (
    <Details
      onToggle={e => setOpenState(e.target.hasAttribute('open'))}
      {...rest}
    >
      {title && (
        <Summary open={openState}>
          {title}
          {renderIcon || <Expando open={openState} />}
        </Summary>
      )}
      <Content open={openState}>{children}</Content>
    </Details>
  );
};

export const AccordionGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  renderIcon: PropTypes.element,
};

export default Accordion;
