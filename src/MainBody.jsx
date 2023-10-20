import React from "react";
import Students from "./Components/Student/Students";

export default function MainBody() {
  const learning = "React Js from main body";
  const rows = 2;
  return (
    <div style={{ minHeight: "90vh" }}>
      <p>This is an of {learning}</p>
      <p>Total rows - {rows}</p>
      <ul>
        <li>Call CK</li>
        <li>Call 1234-5678</li>
      </ul>
      {/* <div>
          Enter Task: {" "}
          <input maxLength={12} readOnly={false} placeholder='Cook Dinner' ></input>
        </div> */}

      <Students
        experience={3}
        name="Carlyle Ram Komalram Diaz"
        picture="https://picsum.photos/80/80?random=2"
      />
      <Students
        experience={1}
        name="Melanie Esther Komalram Diaz"
        picture="https://picsum.photos/80/80?random=1"
      />
      <Students
        experience={7}
        name="Bhagwan Ram Komalram Diaz"
        picture="https://picsum.photos/80/80?random=3"
      />
    </div>
  );
}
