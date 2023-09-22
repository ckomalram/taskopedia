export default function Students(props) {
    const fullName = props.name;
    const programingExp = props.experience;
    return (
      <div className='container p-2'>
        <div className='row'>
          Students Enrolled
        </div>
        <div className='row border'>
          <div className='col-2'><img src={`https://ui-avatars.com/api/?name=${fullName}`} className='w-50' alt="imagen"></img></div>
          <div className='col-10'>{fullName} <br /> Programing expierence {programingExp} years </div>
        </div>
      </div>
    );
  }