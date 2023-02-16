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