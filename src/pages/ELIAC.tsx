import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ELIAC() {
  const router = useRouter();
  useEffect(() => {
    router.push('https://eliac-org.github.io/');
  }, [router]);

  return null;
}