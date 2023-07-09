import { useRouteError } from "react-router-dom"
export function Erreur() {
    const MonErreur = useRouteError()
    return (
        <>
            <h1>Une erreur est arrivée:</h1>
            <p>
                {MonErreur.message}

            </p>
        </>
    )
}