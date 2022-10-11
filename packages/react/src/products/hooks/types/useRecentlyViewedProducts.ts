import type { Config } from '@farfetch/blackout-client';

export type UseRecentlyViewedProductsOptions = {
  save?: boolean;
  fetchConfig?: Config;
  enableAutoFetch?: boolean;
  fetchQuery?: {
    pageSize: number;
    page: number;
  };
};
