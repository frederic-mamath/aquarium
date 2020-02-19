import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

const req = requireContext('../src/components', true, /\.stories.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
