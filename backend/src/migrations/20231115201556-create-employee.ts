import { DataTypes, InferAttributes, Model, QueryInterface } from 'sequelize';
import User from '../models/user';

export default{
  async up(queryInterface:QueryInterface) {
    await queryInterface.createTable<Model<InferAttributes<User>>>('employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      addressId: { 
        type: DataTypes.INTEGER,
        field: 'address_id',
        unique: true,
        references: {
          model: 'addresses',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt:  {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at'
      },
    });
  },
  async down(queryInterface:QueryInterface) {
    await queryInterface.dropTable('employees');
  }
};