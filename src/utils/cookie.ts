export const getLocalStorage = (key: string) => {
  const jsonData = localStorage.getItem(key);
  if (jsonData) {
    return JSON.parse(jsonData);
  }
  return null;
};

export const setLocalStorage = (key: string, data: Object) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};
