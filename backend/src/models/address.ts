import { Model, DataTypes, InferAttributes, InferCreationAttributes, Association } from 'sequelize';
import sequelize from './';
import Student from './student';
import User from './user';

class Address extends Model<InferAttributes<Address>, InferCreationAttributes<Address>> {
  declare id: number;
  declare address: string;
}
Address.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'addresses',
});

Address.hasMany(Student);
Address.hasMany(User)

export default Address;