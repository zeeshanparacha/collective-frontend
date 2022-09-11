import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';

const Cards = ({ gist, _handleFork }) => {
    const navigate = useNavigate()
    const files = gist?.files || {};
    const keys = Object.keys(files) || 0;

    return (
        <div className={`${styles.container}`}>
            <div className={styles.header}>
                {keys.length} {keys.length > 1 ? 'files' : 'file'} found
            </div>

            <div className={`${styles.files}`}>
                <h1>Files</h1>
                {keys.map((key, index) => {
                    return <div className={styles.content} key={index}>
                        <p>{files[key].filename}</p>
                        {files[key].language && <p className={styles.tag}>{files[key].language}</p>}
                    </div>
                })}
            </div>

            <div className={styles.forks} onClick={() => navigate(`/forks/${gist.id}`)}>
                <button>View forks</button>
            </div>
        </div>
    );
};

Cards.defaultProps = {
    gists: [],
};

export default Cards;
