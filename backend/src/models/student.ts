import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Association,
  ForeignKey,
} from 'sequelize';
import sequelize from './';
import Address from './address';

class Student extends Model<
  InferAttributes<Student>,
  InferCreationAttributes<Student>
> {
  declare id: number;
  declare name: string;
  declare motherName: string;
  declare fatherName: string;
  declare birthday: Date;
  declare grade: string;
  declare stage: string;
  declare addressId: ForeignKey<Address['id']>;
  declare houseNumber: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  static associations: {
    associations: Association<Model<Student, Address>>;
  };
}
Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    motherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fatherName: DataTypes.STRING,
    birthday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stage: DataTypes.STRING,
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    houseNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: 'students',
  }
);

// Student.hasOne(Address);

export default Student;
