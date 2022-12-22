import s from "./BurgerModalBtn.module.scss";
import { useSelector } from "react-redux";
import sprite from "../../../../images/icons/sprite.svg";

function BurgerModalBtn({ isActive, onClick }) {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const userName = useSelector((state) => state.auth.email);
  const avatar = JSON.stringify(userName);
  // const auth = useSelector((state) => state.auth);
  return (
    <>
      {!isActive ? (
        <>
          <div className={s.burger}>
            {isLogin ? (
              <div className={s.avatar}>{avatar.charAt(1)}</div>
            ) : (
              <></>
            )}
            <div className={s.btnContainer}>
              <button className={s.btn} type="button" onClick={onClick}>
                <svg width="20px" height="20px">
                  <use href={sprite + "#burger"}></use>
                </svg>
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className={s.btnContainer}>
          <button className={s.btn} type="button" onClick={onClick}>
            <svg width="26px" height="26px">
              <use href={sprite + "#close"}></use>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default BurgerModalBtn;
