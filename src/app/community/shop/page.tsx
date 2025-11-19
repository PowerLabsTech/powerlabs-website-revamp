import { fetchShopCategories, fetchShops } from '@/services/cms';
import HeroShop from './hero';
import Footer from '@/components/footer';
import Container from '@/components/container';
import { Subscribe } from '@/app/subscribe';

export default async function ShopPage() {
  const [shopsRes, categoriesRes] = await Promise.all([
    fetchShops(),
    fetchShopCategories(),
  ]);

  const shops = shopsRes?.data ?? [];
  const shopCategories = categoriesRes?.data ?? [];

  return (
    <>
      <HeroShop props={{ shops, shopCategories }} />

      <Subscribe
        title="Learn more about PowerLabs"
        subtitle="Get the latest PowerLabs news via email."
      />

      <Container>
        <Footer />
      </Container>
    </>
  );
}

// import { redirect } from 'next/navigation';

// export default function DisabledPage() {
//   redirect('/');
// }
