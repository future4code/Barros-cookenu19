export type user = {
   id: string
   email: string
   password: string
   name: string
}

export interface UserInputDTO {
   name: string,
   email: string,
   password: string
}

export interface LoginInputDTO {
   email: string,
   password: string
}

export interface EditUserInputDTO {
   name: string,
   id: string,
   token: string
}

export interface EditUserInput {
   name: string,
   id: string
}

export interface AuthenticationData {
   id: string
}

export interface ProfileUserInputDTO {
   id: string
   token: string
}

export interface ProfileUserInput {
   id: string
}

export interface TokenInputDTO {
   token: string
}