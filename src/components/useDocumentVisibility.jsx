import { useState, useEffect, useCallback } from "react";

export function useDocumentVisibility() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const changeState = () => {
    let visibilityState = document.visibilityState;
    if (visibilityState === "visible") {
      setVisible(true);
    } else {
      setVisible(false);
      setCount((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", changeState);
    return () => document.removeEventListener("visibilitychange", changeState);
  }, []);

  const onVisibilityChange = useCallback(
    (isVisible) => {
      const getMessage = () =>
        isVisible(document.visibilityState === "visible");
      document.addEventListener("visibilitychange", getMessage);
      return () => document.removeEventListener("visibilitychange", getMessage);
    },
    [visible]
  );

  return {
    count,
    visible,
    onVisibilityChange,
  };
}
