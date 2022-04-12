import {
  useState,
  useEffect
} from 'react'

function useLocalStorage(itemName, initialValue) {
  // TodoItems
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      // Local storage
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem("itemName", JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
     
      }

      setItem(parsedItem)
      setLoading(false)
    }, 2000)
  }, [initialValue, itemName])

  const saveItem = (newItem) => {
    const itemString = JSON.stringify(newItem);
    localStorage.setItem(itemName, itemString);
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading
  };
}

export {
  useLocalStorage
}