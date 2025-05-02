import { useState } from "react";
import ModalLogin  from "./components/Login/ModalLogin.js";
import Feed from "./components/Feed/Feed.js";
import { GlobalStyle } from "./globalStyles.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLoginSuccess = (loggedInUsername) => {
    setUsername(loggedInUsername);
    console.log(setIsLoggedIn(true));
    console.log("funciona");
  };

  return (
    <div>
      <GlobalStyle/>
      {!isLoggedIn ? (
        <ModalLogin onLogin={handleLoginSuccess} />
      ) : (
        <Feed username={username} />
      )}
    </div>
  );
}

export default App;
