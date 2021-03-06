import React from 'react';

import reactDecorator from '../../.storybook/react-decorator';

import Loader from '@jetbrains/ring-ui/components/loader/loader';

export default {
  title: 'Components/Loader',
  decorators: [reactDecorator()],

  parameters: {
    component: Loader,
    framework: 'react',

    hermione: {skip: true}
  }
};

export const basic = args => <Loader {...args}/>;

basic.storyName = 'Loader';
basic.args = {message: 'Loading...'};
