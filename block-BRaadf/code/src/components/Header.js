import { useContext } from "react";
import userContext from "./UseContext";

function Header({ isDarkMode }) {
  let user = useContext(userContext);
  console.log(user);
  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
