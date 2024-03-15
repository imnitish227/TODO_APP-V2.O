import { createContext, useReducer } from "react";

export const UsersData = createContext({
  userData: [],
  addItem: () => {},
  deletItem: () => {},
});
//reducer function
const reducer = (currState, action) => {
  let newTodoItem = currState;
  if (action.type === "NEW_ITEM") {
    if (action.payload.inputvalue === "") {
      console.log("please enter some value");
    } else {
      newTodoItem = [action.payload.inputvalue, ...currState];
    }
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currState.filter(
      (item) => item !== action.payload.inputvalue
    );
  }
  return newTodoItem;
};
const UserDataContext = ({ children }) => {
  const [userData, dispatch] = useReducer(reducer, []);
  //new item
  const addItem = (inputvalue) => {
    const newItem = {
      type: "NEW_ITEM",
      payload: {
        inputvalue,
      },
    };
    dispatch(newItem);
  };

  const deletItem = (inputvalue) => {
    const deletedItem = {
      type: "DELETE_ITEM",
      payload: {
        inputvalue,
      },
    };
    dispatch(deletedItem);
  };
  return (
    <UsersData.Provider value={{ userData, addItem, deletItem }}>
      {children}
    </UsersData.Provider>
  );
};
export default UserDataContext;
