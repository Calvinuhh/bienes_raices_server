import {
  DataType,
  Model,
  Table,
  PrimaryKey,
  Column,
  Unique,
  NotEmpty,
  IsEmail,
  Is,
  Length,
} from "sequelize-typescript";

import UserModel from "../interfaces/user";

@Table({
  tableName: "users",
  timestamps: false,
})
class User extends Model<UserModel> {
  @PrimaryKey
  @Unique
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Is(/^[a-zA-ZñÑ\s]+$/)
  @NotEmpty
  @Length({ min: 2, max: 35 })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @IsEmail
  @NotEmpty
  @Unique
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare email: string;

  @Is(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/)
  @Length({ min: 6 })
  @NotEmpty
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Column({
    type: DataType.STRING,
  })
  declare token: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare confirmed: boolean;
}

export default User;
