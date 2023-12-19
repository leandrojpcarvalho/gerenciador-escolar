import { StudentType } from '../../types';
import Student from './Students';
import './style.css';

type Props = {
  students: StudentType[]
}

function Students({students} :Props) {
  return (
    <div className="students-container">
      <h3>{ students.length > 1 ? 'dependentes': 'dependente'}</h3>
      <div className='header-students'>
        <p className="column-student-property-name">nome</p>
        <p className="column-student-property-grade">serie</p>
        <p className="column-student-property-letter">classe</p>
        <p className="column-student-property-period">turno</p>
        <p className="column-student-property-counselor">coordenador</p>
      </div>
      <div className="student">
        {students.map((student) => Student({student}))}
      </div>
    </div>
  );
}


export default Students;