export function FormCreate() {
    return (
        <>
            <form action="" method="get" className="form-example">
                <legend>Création compte</legend>
                <div className="form-example">
                    <label>Enter your name: 
                    <input type="text" name="name" id="name" required /></label>
                </div>
                <div className="form-example">
                    <label >Enter your email: 
                    <input type="email" name="email" id="email" required /></label>
                </div>
                <div className="form-example">
                    <input type="submit" value="creer"/>
                </div>
            </form>
        </>
    )
}