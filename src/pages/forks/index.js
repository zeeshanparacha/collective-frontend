import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Fork from "../../components/Forks";
import Loader from "../../components/Loader";
import { fetchForks } from "../../store/effects.js/gists";
import { clearForks } from "../../store/actions/gists";

import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles.module.css"

const Forks = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    let { id } = useParams();

    useEffect(() => {
        dispatch(fetchForks(id))
        // eslint-disable-next-line
    }, [])

    const state = useSelector(state => state.gists)
    const { loading, error, forks } = state;

    const _handleBack = () => {
        dispatch(clearForks())
        navigate("/")
    }

    return (
        <>
            {loading ? <Loader /> : <>
                <div className={`wrapper ${styles.container}`}>
                    <Fork forks={forks} error={error} _handleBack={() => _handleBack()} />
                </div>
            </>}
        </>
    )

}
export default Forks;
