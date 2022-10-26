import s from "./BurgerModalBtn.module.scss";
import { useSelector } from "react-redux";
import sprite from "../../../../images/icons/sprite.svg"

function BurgerModalBtn({ isActive, onClick }) {
//   const userName = useSelector((state) => state.auth.name);

  return (
    <>
      {!isActive ? (
        <>
        <div className={s.burger}>
          <div className={s.avatar}>P</div>
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