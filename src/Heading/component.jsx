'use client'; // forwardRef

import { forwardRef } from 'react';
import { clsx } from 'clsx';

import styles from './styles.module.scss';

export const Heading = forwardRef(
  (
    { stackSpacing = 'x2', isPromotion = false, level = 2, className, size, ...otherProps },
    ref,
  ) => {
    const Tag = `h${level}`;
    const fontSize = `${size ?? (level && level < 6 ? level : 2)}`;

    return (
      <Tag
        className={clsx(
          className,
          styles.heading2,
          styles[`fontSize${fontSize}`],
          isPromotion && styles.promotion,
          stackSpacing === '0' ? styles.noMargin : styles[`${stackSpacing}Margin`],
        )}
        ref={ref}
        {...otherProps}
      />
    );
  },
);

Heading.displayName = 'Heading';
