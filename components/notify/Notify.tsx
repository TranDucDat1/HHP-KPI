import { CloseOutlined } from '@ant-design/icons';
import styles from './notify.module.css';

interface NotifyProps {
  onClick?: () => void;
}

export default function Notify({ onClick }: NotifyProps) {
  
  return (
    <div className={styles.notify}>
      <div className={styles.notifyHeader}>
        <p className={styles.notifyHeaderText}>Thông báo</p>
        <CloseOutlined rev={undefined} onClick={onClick}/>
      </div>
      <div className={styles.notifyBody}>
        không có thông báo
      </div>
    </div>
  )
}