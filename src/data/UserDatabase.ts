import { CustomError } from "../error/customError";
import {
  EditUserInput,
  ProfileUserInput,
  ProfileUserInputDTO,
  user,
} from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  db = "Cookenu_users";
  public findUser = async (email: string) => {
    try {
      const result = await UserDatabase.connection(this.db)
        .select()
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into(this.db);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name })
        .where({ id: user.id })
        .into(this.db);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public profileUser = async (input: ProfileUserInput) => {
    try {
      const result = await UserDatabase.connection(this.db).select("*").where({ id: input.id});

      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
