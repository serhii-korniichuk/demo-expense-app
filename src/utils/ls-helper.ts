/* eslint-disable @typescript-eslint/explicit-function-return-type */

// owerwrite here

export const lsHelper = (key: string, value?: string) => {
  const getValue = <Type>(): Type | undefined => {
    const result = localStorage.getItem(key);

    return result ? JSON.parse(result) : undefined;
  };

  const setValue = () => localStorage.setItem(key, JSON.stringify(value));

  const removeValue = () => localStorage.removeItem(key);

  return { getValue, setValue, removeValue };
};
