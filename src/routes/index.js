import { lazy, Suspense } from "react";
import { Route, Routes as Switch } from "react-router-dom"
import Loader from "../components/Loader";

const Gists = lazy(() => import("../pages/gists"));
const Forks = lazy(() => import("../pages/forks"));

export const Routes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <Route exact path="/" element={<Gists />} />
                <Route exact path="/forks/:id" element={<Forks />} />
            </Switch>
        </Suspense>
    )
}