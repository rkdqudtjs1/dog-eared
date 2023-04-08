import debounce from "lodash.debounce";
import { useEffect, useRef, useState } from "react";

const useDebouncedValue = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  const setValue = useRef(debounce(setDebouncedValue, delay)).current;

  useEffect(() => {
    setValue(value);
  }, [value]);

  return debouncedValue;
};

export default useDebouncedValue;
