import { Link } from "react-router-dom";

export function FormAuth() {
    return (
        <>
            <form action="/resultat" method="get" className="form-example">
                <legend>authentification</legend>
                <div className="form-example">
                    <label >Enter your name:
                        <input type="text" name="name" id="name" required /> </label>
                </div>
                <div className="form-example">
                    <label>Enter your email:
                        <input type="email" name="email" id="email" required /></label>
                </div>
                <div className="form-example">
                    <input type="submit" />
                </div>
            </form>
            <article>
                <h2>pas encore de compte ?</h2>
                <nav>
                    <Link to="/create">inscrit toi </Link>
                    <p>ou</p>
                    <Link to="/resultat">force l'access </Link>
                </nav>

            </article>
        </>
    )
}