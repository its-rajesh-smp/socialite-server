import envConstant from 'constants/env.const';

type EnvValue = string | number;

/**
 * Returns the value of the environment variable with the given name.
 * If the variable does not exist, it logs an error and returns am empty string.
 *
 * @param {string} variableName - The name of the environment variable.
 * @return {EnvValue | string} The value of the environment variable, or empty string if it does not exist.
 */
export default function getEnv(variableName: string): EnvValue {
  if (envConstant[variableName]) {
    return envConstant[variableName];
  } else {
    console.error(`env variable ${variableName} not found`);
    return '';
  }
}
