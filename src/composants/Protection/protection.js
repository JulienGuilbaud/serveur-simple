import { Link } from "react-router-dom"

export function Protection({ EstConnecte, children }) {
    if (EstConnecte) {
        return (
            <>
            { children }
            </>
            )
    } else {
        return (
            <>
                <h2>vous n'avez pas dit le mot magique</h2>
                <Link to="/create">inscrit toi </Link>
                <p>ou alors</p>
                <Link to="/">conecte toi </Link>
            </>
        )
    }

}