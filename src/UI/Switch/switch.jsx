import { useEffect, useState } from "react";
import styles from "./switch.module.css";

export const Switch = ({ value = false, onChange }) => {
  const [isToggle, setIsToggle] = useState(value);

  useEffect(() => {
    onChange(isToggle);
  }, [isToggle]);

  return (
    <div className={styles.switch} onClick={() => setIsToggle(!isToggle)}>
      <div
        className={styles.toggle}
        style={{
          transform: `translateX(${isToggle ? 65 : 0}px)`,
          background: isToggle ? "#0000ff" : "#fff",
        }}
      ></div>
    </div>
  );
};
