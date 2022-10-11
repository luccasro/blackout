import {
  fetchRecentlyViewedProducts,
  removeRecentlyViewedProduct,
  saveRecentlyViewedProduct,
} from '@farfetch/blackout-redux';
import { mockBrandResponse } from 'tests/__fixtures__/brands';
import {
  mockProductId,
  mockProductsListHashWithProductIds,
  mockProductsListNormalizedPayload,
  mockProductsState,
} from 'tests/__fixtures__/products';
import { renderHook } from '@testing-library/react';
import { withStore } from '../../../../tests/helpers';
import useRecentlyViewedProduct from '../useRecentlyViewedProducts';

jest.mock('@farfetch/blackout-redux', () => ({
  ...jest.requireActual('@farfetch/blackout-redux'),
  fetchRecentlyViewedProducts: jest.fn(() => () => Promise.resolve()),
  removeRecentlyViewedProduct: jest.fn(() => () => Promise.resolve()),
  saveRecentlyViewedProduct: jest.fn(() => () => () => Promise.resolve()),
  fetchProductListing: jest.fn(() => () => Promise.resolve()),
  fetchProductSet: jest.fn(() => () => Promise.resolve()),
  resetProductsLists: jest.fn(() => () => Promise.resolve()),
}));

const expectedProductsWithBrand = Object.values(
  mockProductsListNormalizedPayload.entities.products,
).map(product => ({ ...product, brand: mockBrandResponse }));

describe('useRecentlyViewedProducts', () => {
  beforeEach(jest.clearAllMocks);

  it('should return data correctly with initial state', () => {
    const mockState = {
      ...mockProductsState,
      products: {
        ...mockProductsState.products,
        lists: {
          error: {},
          isHydrated: {},
          isLoading: { [mockProductsListHashWithProductIds]: false },
          hash: null,
        },
      },
      entities: {
        ...mockProductsState.entities,
        productsLists: {
          [mockProductsListHashWithProductIds]: {
            hash: mockProductsListHashWithProductIds,
            products: {
              entries: [12913172, 12913174],
              number: 1,
              totalItems: 2,
              totalPages: 1,
            },
            config: {
              pageIndex: 1,
              pageSize: 9,
              mobilePageSize: 9,
            },
          },
        },
      },
    };

    const { result } = renderHook(
      () => useRecentlyViewedProduct(mockProductId, { save: true }),
      {
        wrapper: withStore(mockState),
      },
    );

    expect(result.current).toStrictEqual({
      error: undefined,
      isFetched: true,
      isLoading: false,
      data: {
        pagination: {
          number: 1,
          totalPages: 1,
          totalItems: 2,
        },
        products: expectedProductsWithBrand,
      },
      actions: {
        fetch: expect.any(Function),
        reset: expect.any(Function),
      },
    });
  });

  it('should return error state', () => {
    const mockError = { message: 'This is an error message' };

    const errorMockRecentlyViewedState = {
      entities: {},
      products: {
        lists: {
          error: {},
          isHydrated: {},
          isLoading: {},
          hash: null,
        },
        recentlyViewed: {
          error: mockError,
          isLoading: false,
          result: null,
        },
      },
    };

    const { result } = renderHook(
      () => useRecentlyViewedProduct(mockProductId),
      {
        wrapper: withStore(errorMockRecentlyViewedState),
      },
    );

    expect(result.current).toStrictEqual({
      error: mockError,
      isFetched: true,
      isLoading: false,
      data: {
        pagination: undefined,
        products: undefined,
      },
      actions: {
        fetch: expect.any(Function),
        reset: expect.any(Function),
      },
    });
  });

  it('should return loading state', () => {
    const loadingMockRecentlyViewedState = {
      entities: {},
      products: {
        lists: {
          error: {},
          isHydrated: {},
          isLoading: {},
          hash: null,
        },
        recentlyViewed: {
          error: null,
          isLoading: true,
          result: null,
        },
      },
    };

    const { result } = renderHook(
      () => useRecentlyViewedProduct(mockProductId),
      {
        wrapper: withStore(loadingMockRecentlyViewedState),
      },
    );

    expect(result.current).toStrictEqual({
      error: undefined,
      isFetched: false,
      isLoading: true,
      data: {
        pagination: undefined,
        products: undefined,
      },
      actions: {
        reset: expect.any(Function),
        fetch: expect.any(Function),
      },
    });
  });

  describe('options', () => {
    it('should not fetch data if `enableAutoFetch` option is false', () => {
      renderHook(
        () =>
          useRecentlyViewedProduct(mockProductId, { enableAutoFetch: false }),
        {
          wrapper: withStore(mockProductsState),
        },
      );

      expect(fetchRecentlyViewedProducts).not.toHaveBeenCalled();
    });

    it('should fetch data if `enableAutoFetch` is true and there is no loaded data ', () => {
      const mockState = {
        ...mockProductsState,
        products: {
          ...mockProductsState.products,
          recentlyViewed: {
            error: null,
            isLoading: false,
            result: null,
          },
        },
      };
      renderHook(() => useRecentlyViewedProduct(mockProductId), {
        wrapper: withStore(mockState),
      });

      expect(fetchRecentlyViewedProducts).toHaveBeenCalled();
    });

    it('should save product in the store if `save` is true', () => {
      renderHook(
        () => useRecentlyViewedProduct(mockProductId, { save: true }),
        {
          wrapper: withStore(mockProductsState),
        },
      );

      expect(saveRecentlyViewedProduct).toHaveBeenCalledWith(mockProductId);
    });

    it('should not save product in the store if `save` is false', () => {
      renderHook(() => useRecentlyViewedProduct(mockProductId), {
        wrapper: withStore(mockProductsState),
      });

      expect(saveRecentlyViewedProduct).not.toHaveBeenCalled();
    });
  });

  describe('actions', () => {
    it('should call `fetch` action successfully', () => {
      const {
        result: {
          current: {
            actions: { fetch },
          },
        },
      } = renderHook(() => useRecentlyViewedProduct(mockProductId), {
        wrapper: withStore(mockProductsState),
      });

      fetch();

      expect(fetchRecentlyViewedProducts).toHaveBeenCalled();
    });

    it('should call `reset` action successfully', () => {
      const {
        result: {
          current: {
            actions: { reset },
          },
        },
      } = renderHook(() => useRecentlyViewedProduct(mockProductId), {
        wrapper: withStore(mockProductsState),
      });

      reset(mockProductId);

      expect(removeRecentlyViewedProduct).toHaveBeenCalledWith(mockProductId);
    });
  });
});
