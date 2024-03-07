import { Stack } from '@/components';
import WhereToBeginPage from '../../app/(main)/book/where-to-begin/page';
import NewProductVsExistingPage from '../../app/(main)/book/new-product-vs-existing-solution/page';
import BusinessPage from '../../app/(main)/book/business-as-1-10-100/page';
import GoodsProductServicePage from '../../app/(main)/book/goods-product-or-service/page';
import CreateSellPage from '../../app/(main)/book/create-or-sell-first/page';
import MinimumSetPage from '../../app/(main)/book/minimum-set-in-the-box/page';
import PackagingDeliveryPage from '../../app/(main)/book/packaging-and-delivery-vs-content/page';
import DoingFromEndPage from '../../app/(main)/book/doing-from-the-end/page';
import WhatIsNextPage from '../../app/(main)/book/what-is-next/page';
import { APP_NAME } from '@/config';

export const cat = 'История';
export const title = APP_NAME;
export const link = '/book/';

export const content = (
  <Stack gap="2rem">
    <WhereToBeginPage />
    <NewProductVsExistingPage />
    <BusinessPage />
    <GoodsProductServicePage />
    <CreateSellPage />
    <MinimumSetPage />
    <PackagingDeliveryPage />
    <DoingFromEndPage />
    <WhatIsNextPage />
  </Stack>
);
