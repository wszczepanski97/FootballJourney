import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
