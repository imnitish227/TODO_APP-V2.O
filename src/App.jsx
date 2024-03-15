import UserDataContext from "./components/store/DataContext";
import Container from "./components/Container";
import Input from "./components/Input";
import ItemField from "./components/ItemsField";
import "bootstrap/dist/css/bootstrap.min.css";
//reducer function

function App() {
  return (
    <>
      <UserDataContext>
        <Container>
          <Input />
          <ItemField />
        </Container>
      </UserDataContext>
    </>
  );
}

export default App;
