'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import styles from './page.module.scss';

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

interface AuthFormProps {
  loginUser: () => Promise<User>;
}

export function AuthForm({ loginUser }: AuthFormProps) {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^09[0-9]{9}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setError('');

    if (!validatePhone(phone)) {
      setError('شماره تلفن نامعتبر است');
      return;
    }

    setIsLoading(true);
    setIsSubmitting(true);

    try {
      const userData = await loginUser();
      localStorage.setItem('user', JSON.stringify(userData));
      router.push('/dashboard');
    } catch {
      setError('خطا در دریافت اطلاعات');
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label="شماره موبایل"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="شماره موبایل خود را وارد کنید"
        error={error}
        dir="ltr"
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        isLoading={isLoading}
        disabled={isLoading || isSubmitting}
      >
        {isLoading ? 'در حال ورود...' : 'ورود'}
      </Button>
    </form>
  );
} 