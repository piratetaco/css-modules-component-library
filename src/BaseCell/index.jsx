import { clsx } from 'clsx';
import style from './styles.module.scss';

/**
 * @todo nicollet document [See Ticket](https://git.target.com/web/platform/issues/18297)
 *
 * Server component compatible.
 */
export const BaseCell = ({ children, divider, className, ...restProps }) => (
  <div className={clsx(style.baseCell, divider && style[divider], className)} {...restProps}>
    {children}
  </div>
);

BaseCell.displayName = 'BaseCell';
