import React from "react";
import styles from "./A.module.css";

console.log(styles)

function A() {
    return (
        <div className={styles._}>
            <h1>Send</h1>

            <div className={styles.content}>
                <div className={styles.contentNoise} />

                <span className={styles.trace} />

                <div className={styles.currency}>
                    USD
                </div>

                <div className={styles.value}>
                    $1.00
                </div>

                <div className={styles.keyPad}>
                    <div className={styles.keyPadRow}>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                    
                    <div className={styles.keyPadRow}>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                    </div>

                    <div className={styles.keyPadRow}>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                    </div>

                    <div className={styles.keyPadRow}>
                        <button>.</button>
                        <button>0</button>
                        <button>⌫</button>
                    </div>
                </div>

                <div className={styles.user}>
                    <div className={styles.userAvatar}>
                    </div>

                    <div className={styles.userText}>
                        <span>send to</span>
                        <span>Some Random Guy.</span>
                    </div>

                    <button>
                        ➤
                    </button>
                </div>
            </div>
        </div>
    );
}

export default A;
