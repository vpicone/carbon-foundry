import React from 'react';
import { storiesOf } from '@storybook/react';

import { Breadcrumb, BreadcrumbItem } from '.';

storiesOf('Breadcrumb', module).add('Default', () => (
  <Breadcrumb>
    <BreadcrumbItem href="#">This is a breadcrumb link</BreadcrumbItem>
    <BreadcrumbItem href="#">This is a breadcrumb link</BreadcrumbItem>
    <BreadcrumbItem href="#">This is a breadcrumb link</BreadcrumbItem>
  </Breadcrumb>
));
