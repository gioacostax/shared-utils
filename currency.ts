/**
 * Contratos Planes Institucionales
 */

interface TOptions {
  forceDecimals?: boolean;
  isTyping?: boolean;
  locale?: Intl.LocalesArgument;
  maxDecimals?: number;
}

/**
 * Convert to currency string
 *
 * @param value Number to convert
 * @param options Options
 * @returns converted value
 */
export const numberToCurrency = (value: number | string | null | undefined, options?: TOptions) => {
  const maxDecimals = options?.maxDecimals ?? 2;
  const decimalsFormat = (0.1).toLocaleString(options?.locale).substring(1, 2);
  const isNegative = String(value).includes('-');

  // Validate value
  if (
    value === '' || // empty string
    value === (decimalsFormat === '.' ? ',' : '.') || // starts with "."
    /^[A-Za-zÀ-ú][A-Za-zÀ-ú\s]*$/.test(String(value)) || // have differents values from [0-9 . ,]
    value === null || // is null
    value === undefined // is undefined
  )
    return '';

  // Split integers and decimals according to locale decimal format
  const rawValue =
    typeof value === 'number'
      ? String(value).replace('.', decimalsFormat).split(decimalsFormat)
      : String(value).split(decimalsFormat);

  // Extract integer from raw value
  const integer = Number(rawValue[0]?.replace(/\D|\./g, '').slice(0, 16));

  // Extract decimals from raw value
  const decimals =
    rawValue[1] &&
    (options?.isTyping
      ? rawValue[1].replace(/\D|\./g, '').slice(0, maxDecimals)
      : Number(rawValue[1]).toFixed(maxDecimals).replace(/\D|\./g, '').slice(0, maxDecimals));

  // Return transformation with decimals if necessary
  return `${isNegative && integer !== 0 ? '-' : ''}${integer.toLocaleString(options?.locale)}${
    // eslint-disable-next-line no-nested-ternary
    rawValue[1] !== undefined
      ? `${decimalsFormat}${decimals}`
      : options?.forceDecimals
        ? `${decimalsFormat}0${Array(maxDecimals).join('0')}`
        : ''
  }`;
};

export const toPriceString = (value: number | string, precision = 11, fixed = 2) => {
  let _value = Number(value).toFixed(precision);

  while (_value.endsWith('0')) {
    _value = _value.slice(0, -1);
  }

  if (
    precision >= fixed &&
    Number(_value) >
      Number(
        `0.${new Array(fixed).fill(0).reduce((acc, val) => `${acc}${val}`, '')}${new Array(precision - fixed).fill(9).reduce((acc, val) => `${acc}${val}`, '')}`,
      )
  ) {
    _value = Number(_value).toFixed(fixed);
  }

  if (
    precision >= fixed &&
    Number(_value) <
      Number(
        `-0.${new Array(fixed).fill(0).reduce((acc, val) => `${acc}${val}`, '')}${new Array(precision - fixed).fill(9).reduce((acc, val) => `${acc}${val}`, '')}`,
      )
  ) {
    _value = Number(_value).toFixed(fixed);
  }

  if (_value.endsWith('.')) {
    _value = `${_value}${new Array(fixed).fill(0).reduce((acc, val) => `${acc}${val}`, '')}`;
  }

  return _value;
};

export default { numberToCurrency, toPriceString };
