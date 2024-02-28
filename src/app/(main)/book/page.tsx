import { Stack } from '@/components';
import WhereToBeginPage from '../where-to-begin/page';
import NewProductVsExistingPage from '../new-product-vs-existing-solution/page';
import BusinessPage from '../business-as-1-10-100/page';
import GoodsProductServicePage from '../goods-product-or-service/page';
import CreateSellPage from '../create-or-sell-first/page';
import MinimumSetPage from '../minimum-set-in-the-box/page';
import PackagingDeliveryPage from '../packaging-and-delivery-vs-content/page';
import DoingFromEndPage from '../doing-from-the-end/page';
import WhatIsNextPage from '../what-is-next/page';

/**
 * Book page content
 * @page Book
 */
const BookPage = () => {
  return (
    <Stack gap='2rem'>
      <WhereToBeginPage/>
      <NewProductVsExistingPage/>
      <BusinessPage/>
      <GoodsProductServicePage/>
      <CreateSellPage/>
      <MinimumSetPage/>
      <PackagingDeliveryPage/>
      <DoingFromEndPage/>
      <WhatIsNextPage/>
    </Stack>
  );
};

export default BookPage;
