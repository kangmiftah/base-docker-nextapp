"use client"
import React, {useState} from 'react';

type LOCALSTORAGETYPE<VALUETYPE = any> = [ VALUETYPE, (value: VALUETYPE) => any ]
function useLocalStorage<VALUETYPE = any>(key:string, initialValue?: VALUETYPE) : LOCALSTORAGETYPE<VALUETYPE> {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        return initialValue;
      }
    });
  
    const setValue = (value: VALUETYPE) => {
      try {
        const valueToStore =
        value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // console.log(error);
      }
    };
  
    return [storedValue, setValue];
}

  export default useLocalStorage;