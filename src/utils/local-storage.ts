import { config } from 'config';

interface ILocalStorageService {
  get: (key: string) => string | null;
  set: (key: string, value: any) => void;
  remove: (key: string) => void;
  removeAll: () => void;
}

class LocalStorageService implements ILocalStorageService {
  public get(key: string): any {
    const data: string | null = window.localStorage.getItem(
      `${config.storageNamespace}${key}`,
    );

    if (!data) {
      return null;
    }

    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  }

  public set(key: string, value: any): void {
    const objValue = JSON.stringify(value);

    window.localStorage.setItem(`${config.storageNamespace}${key}`, objValue);
  }

  public remove(key: string): void {
    window.localStorage.removeItem(`${config.storageNamespace}${key}`);
  }

  public removeAll(): void {
    const storage = window.localStorage || {};
    Object.keys(storage).forEach((key: string): void => {
      if (key.startsWith(config.storageNamespace)) {
        window.localStorage.removeItem(key);
      }
    });
  }
}

export const LocalStorage = new LocalStorageService();
