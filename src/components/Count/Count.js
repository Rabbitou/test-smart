import React, { useMemo, useState } from "react";
import styles from "./Count.module.css";

export function Count() {
  const [count, setCount] = useState(0);

  const checkValue = useMemo(() => {
    if (count === 0) return "zero";
    return count > 0 ? "positive" : "negative";
  }, [count]);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.counterValue} data-attr={checkValue}>
        <span>{count}</span>
      </div>
      <div className={styles.btnContainer}>
        <button onClick={decreaseCount} className={styles.decreaseBtn}>
          -
        </button>
        <button onClick={increaseCount} className={styles.increaseBtn}>
          +
        </button>
      </div>
    </div>
  );
}
