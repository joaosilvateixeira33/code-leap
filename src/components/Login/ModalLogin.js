import { useState } from "react"
import { Modal} from "./styled";
import { ButtonGlobal, Overlay } from "../../globalStyles";

export default function ModalLogin({onLogin}){
    const [username, setUsername] = useState(() => localStorage.getItem('username') || 'Anonymous');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    const handleInputChange = (event) => {
        const value = event.target.value;
        setUsername(value);
        setIsButtonDisabled(value.trim() === '');
    }

    const handleEnterClick = () => {
        if (!isButtonDisabled) {
          onLogin(username);
          localStorage.setItem('currentUser', username);
        }
    }

    return(
        <Overlay>
            <Modal>
                <h2>Welcome to CodeLeap network!</h2>
                <label>
                    Please enter your username:
                    <input
                        type="text"
                        placeholder="Jhon Dooe"
                        value={username}
                        onChange={handleInputChange}
                    />
                </label>
                <ButtonGlobal type="submit" disabled={isButtonDisabled} onClick={handleEnterClick}>
                    ENTER
                </ButtonGlobal>
            </Modal>
        </Overlay>
    )
}