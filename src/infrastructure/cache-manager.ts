export const CacheLoad = (key: string) => {
  const value = localStorage.getItem(key);
  if (!value) return null;

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export const CacheSave = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const CacheClear = () => {
  localStorage.clear();
}