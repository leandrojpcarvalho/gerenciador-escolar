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
      field: 'mother_name'
    },
    fatherName: {
      type: DataTypes.STRING,
      field: 'father_name'
    },
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
      field: 'address_id'
    },
    houseNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'house_number'
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  },
  {
    sequelize,
    modelName: 'students',
    timestamps: true,
  }
);

Student.hasOne(Address, { foreignKey: 'addressId', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

export default Student;
