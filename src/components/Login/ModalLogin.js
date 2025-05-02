import { useState } from "react"
import { Modal} from "./styled";
import { Overlay } from "../../globalStyles";

export default function ModalLogin({onLogin}){
    const [username, setUsername] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    const handleInputChange = (event) => {
        const value = event.target.value;
        setUsername(value);
        setIsButtonDisabled(value.trim() === '');
    }

    const handleEnterClick = () => {
        if (!isButtonDisabled) {
          onLogin(username);
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
                <button type="submit" disabled={isButtonDisabled} onClick={handleEnterClick}>
                    ENTER
                </button>
            </Modal>
        </Overlay>
    )
}