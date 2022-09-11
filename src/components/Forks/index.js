import React from "react";
import Label from "../Label";
import Avatar from "../Avatar";
import styles from "./styles.module.css";

const Forks = ({ forks, error, _handleBack }) => {
    const lastThreeForks = forks.slice((forks.length > 3 ? forks.length - 3 : 0), forks.length)
    console.log('lastThreeForks', lastThreeForks)
    return (
        <div className={styles.container}>
            <h1>Forks:</h1>
            {error && <Label gists={forks} error={error} />}
            <div className={styles.forks}>
                {lastThreeForks.map((fork, index) => (
                    <a key={index} href={`https://gist.github.com/${fork.id}`} target="_blank" rel="noreferrer">
                        <Avatar
                            icon={fork?.owner?.avatar_url}
                            heading={fork?.owner?.login}
                        />
                    </a>
                ))}
            </div>
            <button onClick={() => _handleBack()}>Back</button>
        </div>
    );
};

Forks.defaultProps = {
    forks: [],
};

export default Forks;
