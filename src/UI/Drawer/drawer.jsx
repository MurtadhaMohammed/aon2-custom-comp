import styles from "./drawer.module.css";

export const Drawer = ({ isOpen, onClose, width = 300, children }) => {
  return (
    <div className={styles.drawer}>
      <div
        onClick={onClose}
        className={styles.overlay}
        style={{ display: isOpen ? "block" : "none" }}
      ></div>
      <div
        className={styles.content}
        style={{ width, right: isOpen ? 0 : `-${width + 10}px` }}
      >
        {children}
      </div>
    </div>
  );
};
