import { fetchReturnPickupCapabilityFactory } from './factories';
import { getReturnPickupCapability } from '@farfetch/blackout-client';

/**
 * Fetch retuurn pickup capability for a specific return and pickup day.
 */
export default fetchReturnPickupCapabilityFactory(getReturnPickupCapability);
