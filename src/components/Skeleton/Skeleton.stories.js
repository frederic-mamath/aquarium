import React from 'react';
import { storiesOf } from '@storybook/react';

import Skeleton from './Skeleton';

storiesOf('Skeleton', module)
  .add('square', () => <Skeleton style={{ height: '24px', width: '24px' }} />)
  .add('rounded square', () => <Skeleton style={{ borderRadius: '4px', height: '24px', width: '24px' }} />)
  .add('round', () => <Skeleton style={{ borderRadius: '12px', height: '24px', width: '24px' }} />);
