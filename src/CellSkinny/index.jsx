'use client'; // subcomponent: `Heading`

import classNames from 'classnames';
import { BaseCell } from '../BaseCell';
import { Heading } from '../Heading';
import styles from './styles.module.scss';

/**
 * A skinny cell of a table intended for composition with sub-components as children.
 */
export const CellSkinny = ({
  className,
  'data-test': testId,
  divider,
  headingLevel,
  headingText,
  isBorderOffset,
  isHeading,
  renderLeading,
  renderTrailing,
  ...props
}) => (
  <BaseCell
    className={classNames(styles.cellSkinny, isBorderOffset && styles.borderOffset, className)}
    data-test={testId}
    divider={divider}
    {...props}
  >
    {renderLeading}
    <span className={classNames(styles.wrapper, renderLeading && styles.renderleadingHeading)}>
      {isHeading ? (
        <Heading level={headingLevel} size={4} stackSpacing="0">
          {headingText}
        </Heading>
      ) : (
        <>{headingText}</>
      )}
    </span>
    {renderTrailing && <span className={styles.trailingSpan}>{renderTrailing}</span>}
  </BaseCell>
);

CellSkinny.displayName = 'CellSkinny';
