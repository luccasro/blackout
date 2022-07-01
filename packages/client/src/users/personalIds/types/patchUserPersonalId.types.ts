import type { Config } from '../../../types';
import type { UserPersonalIdPartial } from '.';
import type { User } from '../../authentication/types/user.types';

export type PatchUserPersonalIdData = {
  backImageId: string;
  expiryDate: string;
  frontImageId: string;
  idNumber: string;
  name: string;
};

export type PatchUserPersonalId = (
  userId: User['id'],
  personalId: string,
  data: PatchUserPersonalIdData,
  config: Config,
) => Promise<UserPersonalIdPartial>;
