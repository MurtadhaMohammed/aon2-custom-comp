import styles from "./modalSheet.module.css";

export const ModalSheet = ({ isOpen, onClose, height = 400, children }) => {
  return (
    <div className={styles.modal}>
      <div
        className={styles.overlay}
        onClick={onClose}
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      ></div>
      <div
        className={styles.content}
        style={{ height, bottom: isOpen ? 0 : `-${height}px` }}
      >
        {children}
      </div>
    </div>
  );
};
