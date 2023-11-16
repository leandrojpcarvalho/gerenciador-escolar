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
        references: {
          model: 'addresses',
          key: 'id'
        }
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt:  {
        type: DataTypes.DATE,
        field: 'update_at'
      },
    });
  },
  async down(queryInterface:QueryInterface) {
    await queryInterface.dropTable('employees');
  }
};