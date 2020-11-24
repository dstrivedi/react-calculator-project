import React from "react";
import styles from "./style.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.input} />
      <div className={styles.buttons}>
        <div>
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>+</button>
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>*</button>
        </div>
        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>/</button>
        </div>
        <div>
          <button>0</button>
          <button>.</button>
          <button>del</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}
