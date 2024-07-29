import clsx from 'clsx'
import { ButtonClose } from '../button-close'
import styles from './styles.module.scss'

export const ButtonCloseWrapper = ({ className, ...restProps}) => <ButtonClose className={clsx(styles.buttonCloseWrapper, className)} {...restProps}/>