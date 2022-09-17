import { useEffect, useState } from "react";

const useDebounce = ( value, delay ) => {
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedTerm(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);
  return debouncedTerm;
};

export default useDebounce;
