'use client';

import React, { useEffect } from 'react';
import HeroShop from './hero';
import { IShop, IShopCategory } from '@/interfaces';
import { fetchShopCategories, fetchShops } from '@/utils/api';
import Footer from '@/components/footer';
import Container from '@/components/container';

export default function ShopPage() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [shops, setShops] = React.useState<IShop[]>([]);
  const [shopsCategories, setShopsCategories] = React.useState<IShopCategory[]>(
    []
  );

  const init = async () => {
    try {
      setIsLoading(true);

      const [shopsRes, categoriesRes] = await Promise.all([
        fetchShops(),
        fetchShopCategories(),
      ]);

      if (shopsRes?.data?.length) {
        setShops(shopsRes.data);
      }

      if (categoriesRes?.data?.length) {
        setShopsCategories(categoriesRes.data);
      }
    } catch (error) {
      console.error('Failed to load data:', error);
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
      <HeroShop props={{ shops, shopCategories: shopsCategories }} />
      <Container>
        <Footer />
      </Container>
    </>
  );
}
