import clsx from 'clsx'
import { Button } from '../button'
import styles from './styles.module.scss'

export const ButtonClose = ({ className, ...restProps}) => <Button className={clsx(styles.buttonClose, className)} {...restProps}/>