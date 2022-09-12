import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Card from "../../components/Cards";
import Label from "../../components/Label";
import Loader from "../../components/Loader";
import Search from "../../components/Search";
import { fetchGistsByUsername } from "../../store/effects.js/gists";
import { clearGists } from "../../store/actions/gists";

import styles from "./styles.module.css";

const Gists = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState("")

    const state = useSelector(state => state.gists)
    const { loading, error, gists } = state;

    const _handleSearch = () => {
        if (!query) return false;
        dispatch(clearGists())
        dispatch(fetchGistsByUsername(query))
    }

    const _handleFork = (id) => {
        dispatch(fetchGistsByUsername(id))
    }

    return (
        <>
            <Search
                query={query}
                onChange={(value) => setQuery(value)}
                _handleSearch={() => _handleSearch()}
                error={error}
            />
            {loading ? <Loader /> : <>
                <Label gists={gists} error={error} />
                <div className="wrapper">
                    <div className={styles.cards}>
                        {!!gists?.length && gists.map((gist, index) => (
                            <Card gist={gist} key={index} _handleFork={(id) => _handleFork(id)} />)
                        )}
                    </div>
                </div>
            </>}
        </>
    )

}
export default Gists;
