import CollectionDisplayClient from './collectionDisplay';
import Container from '@/components/container';
import Categories from './categories';
import { IShop, IShopCategory } from '@/interfaces';

export default function HeroShop({
  props,
}: {
  props: { shops: IShop[]; shopCategories: IShopCategory[] };
}) {
  const recentCollection = props.shops[0];
  const restCollections = props.shops.filter(
    (shop) => shop.id !== recentCollection.id
  );

  return (
    <>
      <CollectionDisplayClient
        key={recentCollection.id}
        prop={recentCollection}
      />

      <Container>
        <Categories shopCategories={props.shopCategories} />
      </Container>

      {restCollections.map((shop) => (
        <CollectionDisplayClient key={shop.id} prop={shop} />
      ))}
    </>
  );
}
