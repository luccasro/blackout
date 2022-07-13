/**
 * Hook to provide all kinds of data for the business logic attached to the locale.
 *
 * @module useLocale
 * @category content
 * @subcategory Hooks
 */
import {
  areCitiesLoading as areCitiesLoadingSelector,
  areCountriesLoading as areCountriesLoadingSelector,
  areCurrenciesLoading as areCurrenciesLoadingSelector,
  areStatesLoading as areStatesLoadingSelector,
  getCitiesByStateId,
  getCitiesError,
  getCountriesError,
  getCountryCode,
  getCountryCultures,
  getCultureCode,
  getCurrenciesByCountryCode,
  getCurrenciesError,
  getCurrencyCode,
  getStatesByCountryCode,
  getStatesError,
  getSubfolder,
} from '@farfetch/blackout-core/locale/redux/selectors';
import { createContinentsList } from '@farfetch/blackout-core/locale/utils';
import {
  doGetCities,
  doGetCountries,
  doGetCountry,
  doGetCurrencies,
  doGetStates,
  doSetCountry,
} from '@farfetch/blackout-core/locale/redux/actions';
import {
  getCities as getCitiesClient,
  getCountries as getCountriesClient,
  getCountry as getCountryClient,
  getCurrencies as getCurrenciesClient,
  getStates as getStatesClient,
} from '@farfetch/blackout-core/locale/client';
import {
  getCountries,
  getCountry,
} from '@farfetch/blackout-core/entities/redux/selectors';
import { useAction } from '../../utils';
import { useSelector } from 'react-redux';

export default () => {
  // Actions
  const fetchCities = useAction(doGetCities(getCitiesClient));
  const fetchCountries = useAction(doGetCountries(getCountriesClient));
  const fetchCountry = useAction(doGetCountry(getCountryClient));
  const fetchCurrencies = useAction(doGetCurrencies(getCurrenciesClient));
  const fetchStates = useAction(doGetStates(getStatesClient));
  const setCountry = useAction(doSetCountry);
  // Selectores
  const countries = useSelector(getCountries);
  const countryCode = useSelector(getCountryCode);
  const cultureCode = useSelector(getCultureCode);
  const cultures = useSelector(getCountryCultures);
  const currencyCode = useSelector(getCurrencyCode);
  const currencies = useSelector(getCurrenciesByCountryCode);
  const subfolder = useSelector(getSubfolder);
  const states = useSelector(getStatesByCountryCode);
  const areCitiesLoading = useSelector(areCitiesLoadingSelector);
  const areCountriesLoading = useSelector(areCountriesLoadingSelector);
  const areCurrenciesLoading = useSelector(areCurrenciesLoadingSelector);
  const areStatesLoading = useSelector(areStatesLoadingSelector);
  const country = useSelector(state => getCountry(state, countryCode));
  const continents = createContinentsList(countries);
  // Errors
  const citiesError = useSelector(getCitiesError);
  const countriesError = useSelector(getCountriesError);
  const currenciesError = useSelector(getCurrenciesError);
  const statesError = useSelector(getStatesError);
  const error = countriesError || currenciesError || citiesError || statesError;

  return {
    // Actions
    fetchCities,
    fetchCountries,
    fetchCountry,
    fetchCurrencies,
    fetchStates,
    setCountry,

    // Selectores
    areCitiesLoading,
    areCountriesLoading,
    areCurrenciesLoading,
    areStatesLoading,
    country,
    countryCode,
    countries,
    continents,
    cultureCode,
    cultures,
    currencies,
    currencyCode,
    states,
    subfolder,
    getCitiesByStateId,

    // Errors
    error,
    citiesError,
    countriesError,
    currenciesError,
    statesError,
  };
};
