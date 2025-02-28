import { useState, useEffect } from "react";

const useThrottle = (fn: Function, delay: number) => {
  const [lastRun, setLastRun] = useState(Date.now());

  useEffect(() => {
    const handler = setTimeout(function () {
      if (Date.now() - lastRun >= delay) {
        fn();
        setLastRun(Date.now());
      }
    }, delay - (Date.now() - lastRun));

    return () => clearTimeout(handler);
  }, [fn, delay, lastRun]);
};

export default useThrottle;
