import styled from 'styled-components';
import React from 'react';
import { textStyle, flexbox, layout } from 'styled-system';
import { Link } from '../Link';

const Breadcrumb = styled.nav`
  display: inline;

  ${props => props.theme.mq.md} {
    display: flex;
    flex-wrap: wrap;
  }

  ${flexbox} ${textStyle} ${layout}
`;

const BreadcrumbItemStyles = styled.span`
  display: block;
  &::after {
    content: '/';
    margin: 0 ${props => console.log(props) || props.theme.space[4]};
    color: ${props => props.theme.colors.text01};
  }

  &:last-of-type::after {
    content: '';
    margin: 0;
  }
`;

export const BreadcrumbItem = React.forwardRef(function BreadcrumbItem(
  props,
  ref
) {
  return (
    <BreadcrumbItemStyles>
      <Link ref={ref} {...props} />
    </BreadcrumbItemStyles>
  );
});

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default Breadcrumb;
