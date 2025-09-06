'use client';

import React, { useEffect } from 'react';
import HeroShop from './hero';
import { IShop } from '@/interfaces';
import { fetchShops } from '@/utils/api';
import Footer from '@/components/footer';
import Container from '@/components/container';

export default function ShopPage() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [shops, setShops] = React.useState<IShop[]>([]);

  const init = async () => {
    try {
      setIsLoading(true);

      const response = await fetchShops();

      if (!!response && response.data.length > 0) {
        setShops(response.data);
      }
    } finally {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <HeroShop props={shops} />
      <Container>
        <Footer />
      </Container>
    </>
  );
}
