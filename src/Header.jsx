const mainHeaderStyle = {
    color: "blue", background: "gray"
  }
  function Header() {
    return (<>
      <MainHeader></MainHeader><SubHeader></SubHeader>
    </>)
  }
  function MainHeader() {
    return (<h1 style={mainHeaderStyle}>MainHeader</h1>)
  }
  
  function SubHeader() {
    return (<h2 className='heading1'>SubHeader</h2>)
  }

  export default Header;