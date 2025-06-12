import { DashboardContent } from './DashboardContent';
import styles from './page.module.scss';

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <DashboardContent />
    </div>
  );
} 