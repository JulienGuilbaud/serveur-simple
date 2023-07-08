export function FormCreate() {
    return (
        <>
            <form action="" method="get" class="form-example">
                <legend>Création compte</legend>
                <div class="form-example">
                    <label for="name">Enter your name: </label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div class="form-example">
                    <label for="email">Enter your email: </label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div class="form-example">
                    <input type="submit" value="creer"/>
                </div>
            </form>
        </>
    )
}