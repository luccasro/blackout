import * as actionTypes from '../actionTypes';
import { AnyAction, combineReducers } from 'redux';
import type {
  FetchProductFittingsAction,
  FetchProductFittingsFailureAction,
  FetchProductFittingsRequestAction,
  ProductsFittingsState,
} from '../types';

export const INITIAL_STATE: ProductsFittingsState = {
  error: {},
  isLoading: {},
};

const error = (
  state = INITIAL_STATE.error,
  action: FetchProductFittingsRequestAction | FetchProductFittingsFailureAction,
) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_FITTINGS_REQUEST:
      return {
        ...state,
        [action.meta.productId]: undefined,
      };
    case actionTypes.FETCH_PRODUCT_FITTINGS_FAILURE:
      return {
        ...state,
        [action.meta.productId]: action.payload.error,
      };
    default:
      return state;
  }
};

const isLoading = (
  state = INITIAL_STATE.isLoading,
  action: FetchProductFittingsAction | AnyAction,
) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_FITTINGS_REQUEST:
      return {
        ...state,
        [action.meta.productId]: true,
      };
    case actionTypes.FETCH_PRODUCT_FITTINGS_SUCCESS:
    case actionTypes.FETCH_PRODUCT_FITTINGS_FAILURE:
      return { ...state, [action.meta.productId]: false };
    default:
      return state;
  }
};

export const getError = (
  state: ProductsFittingsState,
): ProductsFittingsState['error'] => state.error;
export const getIsLoading = (
  state: ProductsFittingsState,
): ProductsFittingsState['isLoading'] => state.isLoading;

/**
 * Reducer for products fittings.
 *
 * @param state  - Current redux state.
 * @param action - Action dispatched.
 *
 * @returns New state.
 */
const productsFittingsReducer = combineReducers({
  error,
  isLoading,
});

export default productsFittingsReducer;
