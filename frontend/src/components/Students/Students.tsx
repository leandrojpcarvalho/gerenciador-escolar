import { StudentType } from '../../types';

type Props = {
  student: StudentType
}

function Student({ student }:Props) {
  const { id, name, period, grade, counselor, letter } = student;
  return (
    <div
      className="student-details"
      key={id}>
      <p className="column-student-property-name">{name}</p>
      <p className="column-student-property-grade">{grade}</p>
      <p className="column-student-property-letter">{letter}</p>
      <p className="column-student-property-period">{period}</p>
      <p className="column-student-property-counselor">{counselor}</p>
    </div>
  );
}

export default Student;
