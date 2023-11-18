import { Model, DataTypes, ForeignKey, CreationOptional, Association, InferAttributes } from 'sequelize';
import sequelize from './';
import Address from './address';

class User extends Model<InferAttributes<User>> {
  declare id: CreationOptional<number>;
  declare email: string;
  declare password: string;
  declare addressId: ForeignKey<Address['id']>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static associations: {
    address: Association<User, Address>
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  addressId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'User',
  tableName: 'employees',
  timestamps: true,
  underscored: true,
}
);

export default User;