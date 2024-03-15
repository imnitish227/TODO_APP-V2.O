import { useContext } from "react";
import Items from "./Items";
import { UsersData } from "../components/store/DataContext";
const ItemField = () => {
  const { userData } = useContext(UsersData);
  return (
    <>
      {userData.map((data, index) => (
        <Items data={data} key={index} />
      ))}
    </>
  );
};
export default ItemField;
