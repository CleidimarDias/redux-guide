import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../redux/user/actions";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import rootReducer from "../../redux/root-reducer";
import UserActionTypes from "../../redux/user/action-types";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)

  const dispatch = useDispatch()

  console.log({ currentUser })

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClik = () => {
    dispatch(loginUser({ name: "Cleidimar", email: "cleidimarcdsc@gmail.com" }))
  }
  const handleLogoutClik = () => {
    dispatch(logoutUser())
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {/* <div onClick={handleLoginClik}>{currentUser ? 'Sair' : 'Login'}</div> */}
        <div onClick={currentUser ? handleLogoutClik : handleLoginClik}>{currentUser ? 'Sair' : 'Login'}</div>
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
