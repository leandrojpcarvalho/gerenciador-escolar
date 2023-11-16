import { DataTypes, InferAttributes, Model, QueryInterface } from 'sequelize';
import Student from '../models/student';
  
export default { 
  async up(queryInterface: QueryInterface) {
  await queryInterface.createTable<Model<InferAttributes<Student>>>('students', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    fatherName:{
      type: DataTypes.STRING,
      field: 'father_name'
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'address_id',
      references: {
        model: 'addresses',
        key: 'id'
      }
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
  });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('students');
  }
}