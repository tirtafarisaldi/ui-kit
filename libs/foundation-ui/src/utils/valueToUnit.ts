/**
 * Convert value of number or string to string with unit
 * @param input The input value
 * @param unit The unit needed
 * @returns Transformed string that contain value with unit
 */
const valueToUnit = (input: number | string = 0, unit = 'px'): string => {
    if (typeof input === 'number' && !Number.isNaN(input)) {
      return `${input}${unit}`;
    }
    return input.toString();
  };
  
  /**
   * Convert array values to shorthand values, it's useful for padding and margin shorthand.
   * Currently React native doesn't fully support shorthand properties, so it will convert to full properties.
   * @param key Key of values, padding or margin
   * @param value The value, may be nunber or array of value, value type must be number
   * @param unit [unit="px"] - The unit of css value
   * @returns Tranformed string that contain css key and value. example: `padding: 10px 5px 3px;`
   * @throws Will throw an Error if values length doesn't longer than 0 and less than equal to 4
   */
  const valueToCssShorthandProperties = <V extends number | string>(
    key: string,
    value: V | V[],
    unit = 'px'
  ): string => {
    const values = Array.isArray(value) ? value : [value];
  
    if (values.length > 0 && values.length <= 4) {
      const defaultResult = `${key}: ${values
        .map((v) => valueToUnit(v, unit))
        .join(' ')}`;
  
      return defaultResult;
    }
  
    throw new Error(
      'values length must be longer than 0 and less than equal to 4'
    );
  };
  
  export {valueToCssShorthandProperties};
  export default valueToUnit;