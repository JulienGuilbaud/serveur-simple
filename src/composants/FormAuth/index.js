import { Link } from "react-router-dom";

export function FormAuth() {
    return (
        <>
            <form action="" method="get" class="form-example">
                <legend>authentification</legend>
                <div class="form-example">
                    <label for="name">Enter your name: </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div class="form-example">
                    <label for="email">Enter your email: </label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div class="form-example">
                    <input type="submit" />
                </div>
            </form>
            <article>
                <h2>pas encore de compte ?</h2>
                <nav>
                    <Link to="create">inscrit toi </Link>
                </nav>

            </article>
        </>
    )
}