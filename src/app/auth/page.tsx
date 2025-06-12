
import { loginUser } from './actions';
import styles from './page.module.scss';
import { AuthForm } from './AuthForm';

export default async function AuthPage() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>ورود به سیستم</h1>
        <AuthForm loginUser={loginUser} />
      </div>
    </div>
  );
} 