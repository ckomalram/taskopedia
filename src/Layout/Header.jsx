import logo from "../images/react.png";
const mainHeaderStyle = {
  // color: "blue",
  background: "black",
};
const Header = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </>
  );
};
function MainHeader() {
  return (
    <div className="pt-2 py-1" style={mainHeaderStyle}>
      <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
      <span className="h2 pt-4 text-white-50">Main header Taskopedia</span>
    </div>
  );
  // return <h1 style={mainHeaderStyle}>MainHeader</h1>;
}

function SubHeader() {
  return (
    <h2 style={{ color: "red", background: "yellow" }} className="text-center">
      SubHeader
    </h2>
  );
}

export default Header;
