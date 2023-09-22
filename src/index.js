import ReactDOM from 'react-dom/client';
import "./css/style.css";

import Header from './Header';
import Students from './Students';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));


function MainBody() {
  const learning = "React Js";
  const rows = 2;
  return (
    <div>
      <p style={{ color: "red", background: "yellow" }}>This is an of {learning}</p>
      <p>Total rows - {rows}</p>
      <ul>
        <li>Call CK</li>
        <li>Call 1234-5678</li>
      </ul>
      {/* <div>
        Enter Task: {" "}
        <input maxLength={12} readOnly={false} placeholder='Cook Dinner' ></input>
      </div> */}
    </div>);
}

root.render(
  <>
    <Header />
    <MainBody />
    <Students experience={3} name="Carlyle Ram Komalram Diaz" />
    <Students experience={1} name="Melanie Esther Komalram Diaz" />
    <Students experience={7} name="Bhagwan Ram Komalram Diaz" />
    <Footer />
  </>
);
