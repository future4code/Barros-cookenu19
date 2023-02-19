export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private created_at: Date,
        private author_id: string
    ){
    }
}

export interface CreateRecipeInputDTO {
    title: string,
    description: string,
    token: string
}

export interface GetRecipeInputDTO {
    recipeId: string,
    token: string
}