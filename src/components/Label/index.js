import React from "react";
import styles from "./styles.module.css";

const Label = ({ gists, error }) => {
    return (
        <div className={`${styles.records} ${error && styles.error}`}>
            {error ? error : !!gists.length && `${gists.length} Records found`}
        </div>
    );
};

export default Label;
