import { Stack } from "@/components";
import WhereToBeginPage from "../(main)/where-to-begin/page";
import NewProductVsExistingPage from "../(main)/new-product-vs-existing-solution/page";
import BusinessPage from "../(main)/business-as-1-10-100/page";
import GoodsProductServicePage from "../(main)/goods-product-or-service/page";
import CreateSellPage from "../(main)/create-or-sell-first/page";
import MinimumSetPage from "../(main)/minimum-set-in-the-box/page";
import PackagingDeliveryPage from "../(main)/packaging-and-delivery-vs-content/page";
import DoingFromEndPage from "../(main)/doing-from-the-end/page";
import WhatIsNextPage from "../(main)/what-is-next/page";
import { APP_NAME } from "@/config";

export const title = APP_NAME
export const link = '/book/'

export const content =(
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