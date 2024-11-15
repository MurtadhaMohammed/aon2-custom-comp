import { useEffect, useState } from "react";
import styles from "./radio.module.css";

export const Radio = ({ value = false, onChange, children }) => {
  const [isToggle, setIsToggle] = useState(value);

  useEffect(() => {
    onChange(isToggle);
  }, [isToggle]);

  return (
    <div className={styles.radio} onClick={() => setIsToggle(!isToggle)}>
      <div className={styles.container}>
        <div
          className={styles.toggle}
          style={{
            background: isToggle ? "#0000ff" : "#fff",
            width: isToggle ? "100%" : "0",
            height: isToggle ? "100%" : "0",
          }}
        ></div>
      </div>
      <p>{children}</p>
    </div>
  );
};
