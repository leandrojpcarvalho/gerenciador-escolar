import { QueryInterface } from 'sequelize';

export default {
  async up (queryInterface:QueryInterface) {
    await queryInterface.bulkInsert('addresses', [{
      address: 'Street some street'
    }], {})
  },

  async down (queryInterface:QueryInterface) {
    await queryInterface.bulkInsert('employees', [], {});
  }
};
