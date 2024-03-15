import { useContext } from "react";
import style from "../components/ItemField.module.css";
import { UsersData } from "../components/store/DataContext";
const Items = ({data}) => {
  const {deletItem}=useContext(UsersData);
  return (
    <>
      <div className={`row  ${style.mainRow}`}>
        <div className={`col-8 ${style.inpCol} `}>
          <p>{data}</p>
        </div>

        <div className="col-4">
          <button className={`${style.btnStl}`} onClick={() => deletItem(data)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
export default Items;
