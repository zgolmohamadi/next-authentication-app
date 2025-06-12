'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button/Button';
import styles from './page.module.scss';
import { logout } from './actions';

interface User {
  name: {
    first: string;
    last: string;
    title: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
}

export function DashboardContent() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/auth');
      return;
    }

    setUser(JSON.parse(storedUser));
  }, [router]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      localStorage.removeItem('user');
      router.push('/auth');
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className={styles.welcomeCard}>
      <h1 className={styles.title}>خوش آمدید!</h1>
      <div className={styles.userInfo}>
        <p className={styles.name}>
          {user.name.title} {user.name.first} {user.name.last}
        </p>
        <p className={styles.email}>{user.email}</p>
        <p className={styles.phone}>{user.phone}</p>
        <p className={styles.location}>
          {user.location.city}, {user.location.state}, {user.location.country}
        </p>
      </div>
      <Button
        onClick={handleLogout}
        variant='secondary'
        isLoading={isLoggingOut}
        className={styles.logoutButton}
      >
        {isLoggingOut ? 'در حال خروج...' : 'خروج'}
      </Button>
    </div>
  );
}
