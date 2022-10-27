import React, { useState } from "react";
import s from "../Header/Header.module.scss";
import Logo from "../../shared/components/Logo";
import { useSelector } from "react-redux";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavAll from "./NavAll/NavAll";
import BurgerModalBtn from "./BurgerModal/BurgerModalBtn";
import BurgerModal from "./BurgerModal";

function Header() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  const [isActive, setActive] = useState(false);
  const toggleModal = () => {
    setActive(!isActive);
  };

  return (
    <div className={s.Header}>
      <div className={s.container}>
        <div className={s.logo}>
          <Logo />
        </div>

        <div className={s.NavAll}>
          {isActive ? (
            <BurgerModal isActive={isActive}>
              <NavAll />
            </BurgerModal>
          ) : (
            <div className={s.tabDesk}>
              <NavAll />
            </div>
          )}
          <div className={s.tabDesk}>
          {isLogin ? <NavbarAuth /> : <></>}
          </div>
          <div className={s.mob}>
            <BurgerModalBtn isActive={isActive} onClick={toggleModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
