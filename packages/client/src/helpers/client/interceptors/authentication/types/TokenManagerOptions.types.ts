import type { ITokenData } from '../token-providers/types/TokenData.types';
import type { RequestConfig } from './AxiosAuthenticationTokenManager.types';
import type { TokenContext } from '../token-providers/types/TokenContext.types';

export interface OptionsStorageProvider {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

export interface OptionsStorageSerializer {
  serializeTokenData(tokenData: ITokenData | null): string;
  deserializeTokenData(rawData: string): ITokenData;
}

export type UserParams = {
  username?: string;
  password?: string;
  grantType?: string;
  refreshToken?: string;
};

export type ClientCredentialsParams = {
  username?: string;
  password?: string;
  grantType?: string;
  refreshToken?: string;
};

export type GuestTokenRequester = (
  data: TokenContext,
  config?: RequestConfig,
) => Promise<ITokenData>;

export type UserTokenRequester = (
  data: UserParams,
  config?: RequestConfig,
) => Promise<ITokenData>;

export type ClientCredentialsTokenRequester = (
  data: ClientCredentialsParams,
  config?: RequestConfig,
) => Promise<ITokenData>;

type Headers = {
  'Accept-Language'?: string;
  'FF-Country'?: string;
  'FF-Currency'?: string;
  'x-api-key'?: string;
} & Record<string, string>;

export interface AxiosAuthenticationTokenManagerOptions {
  storage?: {
    provider: OptionsStorageProvider;
    serializer: OptionsStorageSerializer;
    guestTokenStorageKey?: string;
    userTokenStorageKey?: string;
    clientCredentialsTokenStorageKey?: string;
  };
  baseUrl?: string;
  callBacks?: {
    onUserSessionTerminated(expiredUserToken: string): void;
  };
  headers?: Headers;
  authorizationHeaderFormatter: (accessToken?: string) => string | null;
  guestTokenRequester: GuestTokenRequester;
  userTokenRequester: UserTokenRequester;
  clientCredentialsTokenRequester: ClientCredentialsTokenRequester;
  refreshTokenWindowOffset: number;
}
