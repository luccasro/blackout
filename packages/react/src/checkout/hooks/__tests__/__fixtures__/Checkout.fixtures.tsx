import React from 'react';
import useCheckout from '../../useCheckout';

const booleanToText = (boolean: boolean) => (boolean ? 'yes' : 'no');

export const Checkout = () => {
  const {
    // State
    checkoutId,
    isCheckoutLoading,
    checkoutError,
    selectedCollectPoint,
    // Actions
    fetchCheckoutOrder,
    updateCheckoutOrder,
    updateCheckoutOrderItems,
    // Handle functions
    handleGetCollectPoints,
    handleSetShippingAddress,
    handleSetBillingAddress,
    handleSelectCollectPoint,
  } = useCheckout({});

  if (isCheckoutLoading) {
    return (
      <span data-test="checkout-loading">
        {booleanToText(isCheckoutLoading)}
      </span>
    );
  }

  if (checkoutError) {
    return <span data-test="checkout-error">{checkoutError}</span>;
  }

  return (
    <div data-test="checkout-body">
      <button
        data-test="checkout-updateButton"
        onClick={() =>
          updateCheckoutOrder(checkoutId, {
            clickAndCollect: { id: 123 },
          })
        }
      >
        update Checkout request
      </button>
      <button
        data-test="checkout-getButton"
        onClick={() => fetchCheckoutOrder(checkoutId)}
      >
        get Checkout request
      </button>
      <button
        data-test="checkout-giftmessage-updateButton"
        onClick={() =>
          updateCheckoutOrderItems(checkoutId, { giftData: 'data' })
        }
      >
        update Checkout gift message request
      </button>
      <button
        data-test="checkout-handleGetCollectPointsButton"
        onClick={() => handleGetCollectPoints(checkoutId)}
      >
        handle get collectpoints request
      </button>
      <button
        data-test="checkout-handleSetShippingAddressButton"
        onClick={() => handleSetShippingAddress({ id: 1234 })}
      >
        handle set shipping address
      </button>
      <button
        data-test="checkout-handleSetBillingAddressButton"
        onClick={() => handleSetBillingAddress({ id: 1234 })}
      >
        handle set billing address
      </button>
      <button
        data-test="checkout-handleSelectCollectPointButton"
        onClick={() =>
          handleSelectCollectPoint(
            checkoutId,
            { collectPointId: 4567 },
            { storeAddressId: 890 },
          )
        }
      >
        handle set collect point
      </button>
      {selectedCollectPoint && (
        <p data-test="checkout-selected-collectPoint">
          Selected collect point is {selectedCollectPoint}
        </p>
      )}
    </div>
  );
};
