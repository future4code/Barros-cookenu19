import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CustomError, EmptyList, MissingUserToken } from "../error/customError";
import { EditUserInputDTO, LoginInputDTO, ProfileUserInputDTO, TokenInputDTO, user, UserInputDTO } from "../model/user";
import { TokenGenerator } from "../services/TokenGenerator";

export class UserController {
  userBusiness = new UserBusiness()
  tokenGenerator = new TokenGenerator()

      public signup = async (req: Request, res: Response) => {
        try {
          const { name, nickname, email, password } = req.body;
       
          const input: UserInputDTO = {
            name,
            email,
            password,
          };
          
          const token = await this.userBusiness.createUser(input);
    
          res.status(201).send({ message: "User created!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };   
      
      public login = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password,
          };
          
          const token = await this.userBusiness.login(input);
    
          res.status(200).send({ message: "User logged in!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 

      public editUser = async (req: Request, res: Response) => {
        try {

          const input: EditUserInputDTO = {
            name: req.body.name,
            id: req.params.id,
            token: req.headers.authorization as string
          };

          const userBusiness = new UserBusiness()
          console.log(input)
          await userBusiness.editUser(input);
    
          res.status(201).send({ message: "User updated succesfully!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }

      public profileUser = async (req: Request, res: Response) => {
        try {

          const input: ProfileUserInputDTO = {
            id: req.body.id,
            token: req.headers.authorization as string
          };

          
          console.log(input)
          await this.userBusiness.profileUser(input);

          const profile = await this.userBusiness.profileUser(input)
          res.status(201).send({message: "houston, we have a profile!", profile});
        } catch (error: any) {
          res.status(400).send(error.message);
        }
        
      }; 

      getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: TokenInputDTO = {
                token: req.headers.authorization as string
            }

            const users = await this.userBusiness.getAllUsers(input)

            res.status(200).send(users)            
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage) 
        }
    }

      
 



}
