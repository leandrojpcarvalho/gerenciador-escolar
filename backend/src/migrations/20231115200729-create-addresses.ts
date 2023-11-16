import { DataTypes, InferAttributes, Model, QueryInterface } from 'sequelize';
import Address from '../models/address';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<InferAttributes<Address>>>('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      address: {
        type: DataTypes.STRING
      },
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('addresses');
  }
};