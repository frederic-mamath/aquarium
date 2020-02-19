import Cx from 'classnames'; 
import React from 'react';

import styles from './styles.module.scss';

export default ({ className, style }) => (
  <div className={Cx(styles.view, className)} style={style} />
);