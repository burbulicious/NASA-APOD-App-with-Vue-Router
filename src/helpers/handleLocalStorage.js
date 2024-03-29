const storeDataInLocalStorage = (key, data) => {
  if (key && data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};

const getDataFromLocalStorage = key => {
  const storedData = localStorage.getItem(key);
  if (storedData) {
    try {
      return JSON.parse(storedData);
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};

export { storeDataInLocalStorage, getDataFromLocalStorage };
