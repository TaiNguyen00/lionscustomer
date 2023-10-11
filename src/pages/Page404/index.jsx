import { clsx } from 'clsx';
import img404 from '../../assets/images/404.svg'
import styles from './404.module.scss'

const Page404 = () => {
  return (
    <div className={clsx(styles.container)}>
      <img className={clsx(styles.image)} src={img404} alt="" />
    </div>
  )
};

export default Page404;
