import { faker } from "@faker-js/faker";
import StudentReview from "./StudentReview";

const Students = (props) => {
  const fullName = props.name;
  const programingExp = props.experience;
  return (
    <div className="col-4 p-1">
      <div className="row">Students Enrolled</div>
      <div className="row border">
        {/* <div className='col-2'><img src={faker.image.avatar()} className='w-50' alt="imagen"></img></div> */}
        <div className="col-2">
          <img src={props.picture} className="w-100 py-2" alt="imagen"></img>
        </div>
        <div className="col-8">
          {fullName} <br /> Programing expierence {programingExp} years{" "}
        </div>
        <div className="col-2">
          <StudentReview />
          {/* puede ser tambn children del componente si se pasa dentro de la llaves de cierre de este. */}
          {/* { props.children} */}
        </div>
      </div>
    </div>
  );
};

export default Students;
