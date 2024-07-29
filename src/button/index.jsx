import clsx from 'clsx'
import styles from './styles.module.scss'

export const Button = ({ className, ...restProps}) => <button className={clsx(styles.button, className)} {...restProps}/>