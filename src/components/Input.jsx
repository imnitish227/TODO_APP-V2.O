import { useContext, useState } from "react";
import style from "../components/Input.module.css";
import { UsersData } from "../components/store/DataContext";
const Input = () => {
  const { addItem } = useContext(UsersData);

  const [inpValue, setInpValue] = useState("");
  const handleInpValue = (event) => {
    setInpValue(event.target.value);
  };

  const handleAddItem = () => {
    addItem(inpValue);
    setInpValue("");
  };
  return (
    <>
      <div className="row">
        <div className="col-8">
          <input
            type="text"
            value={inpValue}
            placeholder="Enter text here"
            className={`${style.inputField}`}
            onChange={handleInpValue}
          />
        </div>
        <div className="col-4">
          <button className={`${style.addBtn}`} onClick={handleAddItem}>
            add
          </button>
        </div>
      </div>
    </>
  );
};
export default Input;
