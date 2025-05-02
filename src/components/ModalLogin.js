import "../styles/modallogin.css"

export default function ModalLogin(){
    return(
        <div className="overlay">
            <form className="modal">
                <h2>Welcome to CodeLeap network!</h2>
                <label>
                    Please enter your username:
                    <input
                        type="text"
                        placeholder="Jhon Dooe"
                    />
                </label>
                <button type="submit" disabled>
                    ENTER
                </button>
            </form>
        </div>
    )
}