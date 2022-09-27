import {
  BlackoutError,
  OrderItem,
  PickupRescheduleRequests,
  RescheduleStatus,
  ReturnItem,
  ReturnOptionType,
} from '@farfetch/blackout-client';

export const id = 123456;
export const rescheduleRequestId = '1654321';
export const mockOrderId = '123456';
export const pickupDay = '2020-04-20';
export const returnTimeWindowData = {
  start: '1574445600000',
  end: '/Date(1574413200000)/',
};

export const getReturnPickupRescheduleRequestsData = {
  id: '',
  timeWindow: returnTimeWindowData,
  status: RescheduleStatus.InProgress,
};

export const responses = {
  post: {
    success: {
      availableDates: [
        '2022-01-07T10:59:03.9169641Z',
        '2022-01-07T10:59:03.9169641Z',
        '2022-01-07T10:59:03.9169641Z',
        '2022-01-07T10:59:03.9169641Z',
        '2022-01-07T10:59:03.9169641Z',
        '2022-01-07T10:59:03.9169641Z',
      ],
      id: 25741579,
      orderId: '8HYCEV',
      merchantId: 11554,
      userId: 34113438,
      type: 'Courier',
      status: 'Accepted',
      courier: 'NotKnown',
      numberOfBoxes: 0,
      numberOfItems: 1,
      maximumDateForPickup: '2022-01-08T15:10:13.69Z',
      items: [
        {
          id: 32283248,
          orderItemId: 49427539,
          reason: "Item doesn't fit",
          description: 'Fits too big',
          status: 'Created',
        },
      ],
      createdDate: '2022-01-03T15:10:13.66Z',
      awbUrl: '/account/v1/returns/25741579/AWB',
      invoiceUrl: '/account/v1/returns/25741579/Invoice',
      references: [
        {
          name: 'ReturnNote',
          url: '/account/v1/returns/25741579/references/ReturnNote',
        },
      ],
    },
  },
  get: {
    success: {
      availableDates: [
        '2022-01-07T10:59:03.9169641Z',
        '2022-01-07T10:59:03.9169641Z',
        '2022-01-07T10:59:03.9169641Z',
        '2022-01-07T10:59:03.9169641Z',
        '2022-01-07T10:59:03.9169641Z',
        '2022-01-07T10:59:03.9169641Z',
      ],
      id: 25741579,
      orderId: '8HYCEV',
      merchantId: 11554,
      userId: 34113438,
      type: 'Courier',
      status: 'Accepted',
      courier: 'NotKnown',
      numberOfBoxes: 0,
      numberOfItems: 1,
      maximumDateForPickup: '2022-01-08T15:10:13.69Z',
      items: [
        {
          id: 32283248,
          orderItemId: 49427539,
          reason: "Item doesn't fit",
          description: 'Fits too big',
          status: 'Created',
        },
      ],
      createdDate: '2022-01-03T15:10:13.66Z',
      awbUrl: '/account/v1/returns/25741579/AWB',
      invoiceUrl: '/account/v1/returns/25741579/Invoice',
      references: [
        {
          name: 'ReturnNote',
          url: '/account/v1/returns/25741579/references/ReturnNote',
        },
      ],
    },
  },
  getReturnPickupCapability: {
    success: {
      availableTimeSlots: [
        {
          start: '/Date(1549987200000)/',
          end: '/Date(1549962000000)/',
        },
        {
          start: '/Date(1549987200000)/',
          end: '/Date(1549965600000)/',
        },
        {
          start: '/Date(1549987200000)/',
          end: '/Date(1549969200000)/',
        },
        {
          start: '/Date(1549987200000)/',
          end: '/Date(1549972800000)/',
        },
        {
          start: '/Date(1549987200000)/',
          end: '/Date(1549976400000)/',
        },
      ],
    },
  },
  getPickupCapabilities: {
    success: {
      availableTimeSlots: [
        {
          start: '/Date(1549987200000)/',
          end: '/Date(1549962000000)/',
        },
        {
          start: '/Date(1549987200000)/',
          end: '/Date(1549965600000)/',
        },
        {
          start: '/Date(1549987200000)/',
          end: '/Date(1549969200000)/',
        },
        {
          start: '/Date(1549987200000)/',
          end: '/Date(1549972800000)/',
        },
        {
          start: '/Date(1549987200000)/',
          end: '/Date(1549976400000)/',
        },
      ],
    },
  },
  getReturnsFromOrder: {
    get: {
      success: [
        {
          availableDates: [
            '2022-01-07T10:59:03.9169641Z',
            '2022-01-07T10:59:03.9169641Z',
            '2022-01-07T10:59:03.9169641Z',
            '2022-01-07T10:59:03.9169641Z',
            '2022-01-07T10:59:03.9169641Z',
            '2022-01-07T10:59:03.9169641Z',
          ],
          id: 25741579,
          orderId: '8HYCEV',
          merchantId: 11554,
          userId: 34113438,
          type: 'Courier',
          status: 'Accepted',
          courier: 'NotKnown',
          numberOfBoxes: 0,
          numberOfItems: 1,
          maximumDateForPickup: '2022-01-08T15:10:13.69Z',
          items: [
            {
              id: 32283248,
              orderItemId: 49427539,
              reason: "Item doesn't fit",
              description: 'Fits too big',
              status: 'Created',
            },
          ],
          createdDate: '2022-01-03T15:10:13.66Z',
          awbUrl: '/account/v1/returns/25741579/AWB',
          invoiceUrl: '/account/v1/returns/25741579/Invoice',
          references: [
            {
              name: 'ReturnNote',
              url: '/account/v1/returns/25741579/references/ReturnNote',
            },
          ],
        },
      ],
    },
  },
  patch: {
    success: {
      redirectUrl:
        'https://obx05-whitelabel.fftech.info/pt/account/return/summary/?id=5926969',
    },
  },
  getReturnPickupRescheduleRequests: {
    success: [getReturnPickupRescheduleRequestsData],
  },
  getReturnPickupRescheduleRequest: {
    success: getReturnPickupRescheduleRequestsData,
  },
  postReturnPickupRescheduleRequests: {
    success: 202,
  },
};

export const orderId = responses.get.success.orderId;
export const returnId = responses.get.success.id;
export const returnPickupCapabilityId = `${returnId}|${pickupDay}`;
export const returnItemId = responses.get.success.items[0]
  ?.orderItemId as ReturnItem['id'];
export const orderItemId = responses.get.success.items[0]
  ?.orderItemId as OrderItem['id'];
export const returnsNormalizedPayload = {
  entities: {
    returnItems: {
      [orderItemId]: {
        id: 32283248,
        orderItemId,
        reason: "Item doesn't fit",
        description: 'Fits too big',
        status: 'Created',
      },
    },
    returns: {
      [returnId]: {
        id: 25741579,
        orderId: '8HYCEV',
        merchantId: 11554,
        userId: 34113438,
        type: 'Courier',
        status: 'Accepted',
        courier: 'NotKnown',
        numberOfBoxes: 0,
        numberOfItems: 1,
        maximumDateForPickup: 1641654613690,
        items: [orderItemId],
        createdDate: 1641222613660,
        awbUrl: '/account/v1/returns/25741579/AWB',
        invoiceUrl: '/account/v1/returns/25741579/Invoice',
        references: [
          {
            name: 'ReturnNote',
            url: '/account/v1/returns/25741579/references/ReturnNote',
          },
        ],
      },
    },
  },
};

export const orderReturnsNormalizedPayload = {
  ...returnsNormalizedPayload,
  result: [returnId],
};

export const returnEntity = {
  id: returnId,
  orderId: '8VXRHN',
  merchantId: 10973,
  userId: 29511627,
  items: [returnItemId],
};

export const returnItem = {
  id: returnItemId,
  orderItemId: 333,
  reason: 'Item does not fit',
};

export const returnEntityDenormalized = {
  ...returnEntity,
  items: [returnItem],
};

export const mockState = {
  returns: {
    returnDetails: {
      error: { [returnId]: new Error('dummy error') as BlackoutError },
      isLoading: { [returnId]: false },
    },
    createReturn: {
      error: new Error('dummy error') as BlackoutError,
      isLoading: false,
      result: null,
    },
    returnPickupCapabilities: {
      error: {
        [returnPickupCapabilityId]: new Error('dummy error') as BlackoutError,
      },
      isLoading: { [returnPickupCapabilityId]: false },
    },
  },
  entities: {
    returnItems: { [returnItemId]: returnItem },
    returns: { [returnId]: returnEntity },
    returnPickupCapabilities: {
      [returnPickupCapabilityId]: {
        availableTimeSlots: [
          {
            start: 1641553200,
            end: 1641556800,
          },
        ],
      },
    },
  },
};

export const mockPatchData = {
  start: '2022-01-07T10:59:03.9169641Z',
  end: '2022-01-07T10:59:03.9169641Z',
};

export const mockPostData = {
  availableDates: [
    '2022-01-07T10:59:03.9169641Z',
    '2022-01-07T10:59:03.9169641Z',
    '2022-01-07T10:59:03.9169641Z',
    '2022-01-07T10:59:03.9169641Z',
    '2022-01-07T10:59:03.9169641Z',
    '2022-01-07T10:59:03.9169641Z',
  ],
  id: 25741579,
  orderId: '8HYCEV',
  merchantId: 11554,
  userId: 34113438,
  type: ReturnOptionType.Courier,
  status: 'Accepted',
  courier: 'NotKnown',
  numberOfBoxes: 0,
  numberOfItems: 1,
  maximumDateForPickup: '2022-01-08T15:10:13.69Z',
  items: [
    {
      id: 32283248,
      orderItemId: 49427539,
      reason: "Item doesn't fit",
      description: 'Fits too big',
      status: 'Created',
    },
  ],
  createdDate: '2022-01-03T15:10:13.66Z',
  awbUrl: '/account/v1/returns/25741579/AWB',
  invoiceUrl: '/account/v1/returns/25741579/Invoice',
  references: [
    {
      name: 'ReturnNote',
      url: '/account/v1/returns/25741579/references/ReturnNote',
    },
  ],
};

export const mockPickupCapabilityResponse = {
  availableTimeSlots: [
    {
      start: '2022-01-07T10:00:00.0Z',
      end: '2022-01-07T11:00:00.0Z',
    },
  ],
};

export const mockPickupReschedulesResponse: PickupRescheduleRequests = [
  {
    id: 'reschedule-request-id',
    timeWindow: {
      start: '2022-01-07T10:00:00.0Z',
      end: '2022-01-07T11:00:00.0Z',
    },
    status: RescheduleStatus.InProgress,
  },
];

export const mockPickupReschedulePostData = {
  id: '',
  timeWindow: {
    start: '',
    end: '',
  },
  status: RescheduleStatus.InProgress,
};
