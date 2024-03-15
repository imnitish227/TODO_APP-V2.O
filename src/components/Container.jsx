import style from "../components/Container.module.css";
const Container = ({ children }) => {
  return (
    <>
      <div className={`${style.parent} container-fluid`}>{children}</div>
    </>
  );
};
export default Container;
