import { mockProductId } from 'tests/__fixtures__/products';
import { productsActionTypes } from '../..';
import reducer, {
  getError,
  getIsLoading,
  INITIAL_STATE,
} from '../groupingProperties';

const mockAction = { type: 'foo' };
const meta = { productId: mockProductId };
let initialState;

describe('groupingProperties redux reducer', () => {
  beforeEach(() => {
    initialState = reducer(INITIAL_STATE, mockAction);
  });

  describe('error() reducer', () => {
    const error = 'An error occurred';
    const expectedError = {
      [mockProductId]: { '!all': error },
    };

    it('should return the initial state', () => {
      const state = reducer(INITIAL_STATE, mockAction).error;

      expect(state).toEqual(initialState.error);
    });

    it('should handle FETCH_PRODUCT_GROUPING_PROPERTIES_REQUEST action type', () => {
      const expectedResult = { [mockProductId]: { '!all': undefined } };
      const state = reducer(undefined, {
        meta,
        type: productsActionTypes.FETCH_PRODUCT_GROUPING_PROPERTIES_REQUEST,
        payload: { hash: '!all' },
      });

      expect(state.error).toEqual(expectedResult);
    });

    it('should handle FETCH_PRODUCT_GROUPING_PROPERTIES_FAILURE action type', () => {
      const state = reducer(undefined, {
        meta,
        payload: { error, hash: '!all' },
        type: productsActionTypes.FETCH_PRODUCT_GROUPING_PROPERTIES_FAILURE,
      });

      expect(state.error).toEqual(expectedError);
    });

    it('should handle other actions by returning the previous state', () => {
      const state = {
        error: { [mockProductId]: { '!all': error } },
        isLoading: {},
      };

      expect(reducer(state, mockAction).error).toEqual(state.error);
    });
  });

  describe('isLoading() reducer', () => {
    it('should return the initial state', () => {
      const state = reducer(INITIAL_STATE, mockAction).isLoading;

      expect(state).toEqual(initialState.isLoading);
    });

    it('should handle FETCH_PRODUCT_GROUPING_PROPERTIES_REQUEST action type', () => {
      const expectedIsLoading = {
        [mockProductId]: { '!all': true },
      };
      const state = reducer(undefined, {
        meta,
        type: productsActionTypes.FETCH_PRODUCT_GROUPING_PROPERTIES_REQUEST,
        payload: { hash: '!all' },
      });

      expect(state.isLoading).toEqual(expectedIsLoading);
    });

    it('should handle FETCH_PRODUCT_GROUPING_PROPERTIES_FAILURE action type', () => {
      const expectedIsLoading = {
        [mockProductId]: { '!all': false },
      };
      const state = reducer(undefined, {
        meta,
        payload: { error: '', hash: '!all' },
        type: productsActionTypes.FETCH_PRODUCT_GROUPING_PROPERTIES_FAILURE,
      });

      expect(state.isLoading).toEqual(expectedIsLoading);
    });

    it('should handle FETCH_PRODUCT_GROUPING_PROPERTIES_SUCCESS action type', () => {
      const expectedIsLoading = {
        [mockProductId]: { '!all': false },
      };
      const state = reducer(undefined, {
        meta,
        payload: {
          hash: '!all',
          result: mockProductId,
        },
        type: productsActionTypes.FETCH_PRODUCT_GROUPING_PROPERTIES_SUCCESS,
      });

      expect(state.isLoading).toEqual(expectedIsLoading);
    });

    it('should handle other actions by returning the previous state', () => {
      const state = {
        error: {},
        isLoading: { [mockProductId]: false },
      };

      expect(reducer(state, mockAction).isLoading).toEqual(state.isLoading);
    });
  });

  describe('selectors', () => {
    describe('getError()', () => {
      it('should return the `error` property from a given state', () => {
        const error = { [mockProductId]: '234-foo' };
        const state = { ...initialState, error };

        expect(getError(state)).toBe(error);
      });
    });

    describe('getIsLoading()', () => {
      it('should return the `isLoading` property from a given state', () => {
        const isLoading = { [mockProductId]: true };
        const state = { ...initialState, isLoading };

        expect(getIsLoading(state)).toBe(isLoading);
      });
    });
  });
});
