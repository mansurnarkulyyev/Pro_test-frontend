import ContactsCard from "./ContactsCard";
import Button from "../../shared/components/Button";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";



const Contacts = ({ name, position, cover, about }) => {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/team");
  };

  return (<>
    <ContactsCard
      name={name}
      position={position}
      image={cover}
      about={about}
    />

    <Button
      className={classNames("button", "text", "focus", "top")}
      type="submit"
      text="add user"
      onClick={goToRegister}
    />
  </>
  );
};


export default Contacts;