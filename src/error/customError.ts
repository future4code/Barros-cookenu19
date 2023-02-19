export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Invalid name (must contain at least 4 characters")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Invalid email adress")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Invalid password (must contain at least 6 characters")
    }
}

export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "User not found")
    }
}

export class Unauthorized extends CustomError{ 
    constructor(){
        super(401, "Unauthorized user") 
    }
}

export class MissingAuthorToken extends CustomError {
    constructor(){
        super(422, "Author token required.")
    }
}

export class RecipeNotFound extends CustomError{
    constructor(){
        super(404, "Recipe not found.")
    }
}

export class MissingDescription extends CustomError {
    constructor(){
        super(422, "Recipe description required.")
    }
}

export class MissingInfosCreate extends CustomError{
    constructor(){
        super(422, "Recipe title, description and token required.")
    }
}

export class MissingRecipeId extends CustomError{
    constructor(){
        super(422, "Recipe id required.")
    }
}

export class MissingTitle extends CustomError {
    constructor(){
        super(422, "Recipe title required.")
    }
}

export class RecipeExisting extends CustomError{
    constructor(){
        super(409, "This recipe already exists.")
    }
}

export class EmptyList extends CustomError {
    constructor(){
        super(400, "Empty list.")
    }
}

export class MissingUserToken extends CustomError{
    constructor(){
        super(422, "User token required.")
    }
}