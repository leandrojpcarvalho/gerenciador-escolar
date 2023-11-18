import { QueryInterface } from 'sequelize';

export default {
  async up (queryInterface:QueryInterface) {
    await queryInterface.bulkInsert('employees', [{
      email: 'l@gmail.com',
      password: '123456',
      address_id: 1,
      created_at: '1990-1-1',
      updated_at: '1990-1-1'
    }], {})
  },

  async down (queryInterface:QueryInterface) {
    await queryInterface.bulkInsert('employees', [], {});
  }
};
