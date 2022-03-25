import type { Address } from '@farfetch/blackout-client/addresses/types';
import type {
  AddressEntity,
  AvailableTimeSlotsEntity,
  BagItemEntity,
  CheckoutDetailsEntity,
  CheckoutEntity,
  CheckoutOrderEntity,
  CheckoutOrderItemEntity,
  CitiesEntity,
  ContentsEntity,
  ConvertEntity,
  CountriesEntity,
  DeliveryBundlesEntity,
  DeliveryBundleUpgradesEntity,
  FacetEntity,
  InstrumentEntity,
  MerchantEntity,
  OrderItemsEntity,
  OrdersEntity,
  PaymentTokenEntity,
  ProductEntity,
  ProductsListEntity,
  ProgramEntity,
  ReplacementEntity,
  ReturnItemsEntity,
  ReturnOptionsEntity,
  ReturnsEntity,
  StatementEntity,
  StatesEntity,
  SubscriptionPackageEntity,
  WishlistItemEntity,
  WishlistSetEntity,
} from '../entities/types';
import type { State as AddressesState } from '../addresses/types';
import type { State as BagState } from '../bags/types';
import type { Brand } from '@farfetch/blackout-client/brands/types';
import type { State as BrandsState } from '../brands/types';
import type { State as CategoriesState } from '../categories/types';
import type { Category } from '@farfetch/blackout-client/categories/types';
import type { State as CheckoutState } from '../checkout/types';
import type { State as ContentsState } from '../contents/types';
import type { State as DesignersState } from '../designers/types';
import type { State as FormsState } from '../forms/types';
import type { State as LocaleState } from '../locale/types';
import type { State as LoyaltyState } from '../loyalty/types';
import type { MerchantLocation } from '@farfetch/blackout-client/merchantsLocations/types';
import type { State as MerchantsLocationsState } from '../merchantsLocations/types';
import type { State as OrdersState } from '../orders/types';
import type { State as PaymentsState } from '../payments/types';
import type { State as ProductsState } from '../products/types';
import type { ProgramMembership } from '@farfetch/blackout-client/src/loyalty/types';
import type { State as PromotionEvaluationsState } from '../promotionEvaluations/types';
import type { State as RecentlyViewedState } from '../recentlyViewed/types';
import type { State as RecommendationsState } from '../recommendations/types';
import type { State as ReturnsState } from '../returns/types';
import type { State as SearchState } from '../search/types';
import type { State as SizeGuidesState } from '../sizeGuides/types';
import type { SizeScale } from '@farfetch/blackout-client/sizeScales/types';
import type { State as SizeScalesState } from '../sizeScales/types';
import type { State as StaffMembersState } from '../staffMembers/types';
import type { SubscriptionState } from '../subscriptions/types';
import type { State as UsersState } from '../users/types';
import type { State as WishlistsState } from '../wishlists/types';

export type StoreState = Partial<{
  // Keep adding/changing here as we migrate chunks
  entities: Partial<{
    addresses: Record<Address['id'], AddressEntity>;
    availableTimeSlots: Record<string, AvailableTimeSlotsEntity>;
    bagItems: Record<BagItemEntity['id'], BagItemEntity>;
    brands: Record<Brand['id'], Brand>;
    categories: Record<Category['id'], Category>;
    checkout: Record<CheckoutEntity['id'], CheckoutEntity>;
    checkoutDetails: Record<CheckoutDetailsEntity['id'], CheckoutDetailsEntity>;
    checkoutOrderItems: Record<
      CheckoutOrderItemEntity['id'],
      CheckoutOrderItemEntity
    >;
    checkoutOrders: Record<CheckoutOrderEntity['id'], CheckoutOrderEntity>;
    cities: Record<string, CitiesEntity>;
    contents: Record<string, ContentsEntity>;
    converts: Record<ConvertEntity['id'], ConvertEntity>;
    countries: Record<string, CountriesEntity>;
    deliveryBundles: Record<DeliveryBundlesEntity['id'], DeliveryBundlesEntity>;
    deliveryBundleUpgrades: DeliveryBundleUpgradesEntity;
    facets: Record<FacetEntity['id'], FacetEntity>;
    instruments: Record<InstrumentEntity['id'], InstrumentEntity>;
    membership: Record<ProgramMembership['id'], ProgramMembership>;
    merchants: Record<MerchantEntity['id'], MerchantEntity>;
    merchantsLocations: Record<MerchantLocation['id'], MerchantLocation>;
    orders: Record<OrdersEntity['id'], OrdersEntity>;
    orderItems: Record<OrderItemsEntity['id'], OrderItemsEntity>;
    paymentTokens: Record<PaymentTokenEntity['id'], PaymentTokenEntity>;
    products: Record<ProductEntity['id'], ProductEntity>;
    productsLists: Record<ProductsListEntity['hash'], ProductsListEntity>;
    programs: Record<ProgramEntity['id'], ProgramEntity>;
    replacements: Record<ReplacementEntity['id'], ReplacementEntity>;
    returnItems: Record<ReturnItemsEntity['Id'], ReturnItemsEntity>;
    returns: Record<ReturnsEntity['id'], ReturnsEntity>;
    returnOptions: Record<ReturnOptionsEntity['id'], ReturnOptionsEntity>;
    sizeScales: Record<SizeScale['sizeScaleId'], SizeScale>;
    statements: Record<StatementEntity['id'], StatementEntity>;
    states: Record<string, StatesEntity>;
    subscriptionPackages: Record<
      SubscriptionPackageEntity['id'],
      SubscriptionPackageEntity
    >;
    user: Record<string, any>;
    wishlistItems: Record<WishlistItemEntity['id'], WishlistItemEntity>;
    wishlistSets: Record<WishlistSetEntity['id'], WishlistSetEntity>;
    [k: string]: any;
    // Keep adding/changing here as we migrate chunks
  }>;
  addresses: AddressesState;
  bag: BagState;
  brands: BrandsState;
  categories: CategoriesState;
  checkout: CheckoutState;
  contents: ContentsState;
  designers: DesignersState;
  forms: FormsState;
  locale: LocaleState;
  loyalty: LoyaltyState;
  merchantsLocations: MerchantsLocationsState;
  orders: OrdersState;
  payments: PaymentsState;
  products: ProductsState;
  promotionEvaluations: PromotionEvaluationsState;
  recentlyViewed: RecentlyViewedState;
  recommendations: RecommendationsState;
  returns: ReturnsState;
  search: SearchState;
  sizeGuides: SizeGuidesState;
  sizeScales: SizeScalesState;
  staffMembers: StaffMembersState;
  subscriptions: SubscriptionState;
  users: UsersState;
  wishlist: WishlistsState;
  // Keep adding here as we migrate chunks
}>;
