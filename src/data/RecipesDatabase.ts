import {Recipe} from "../model/recipe";
import { GetRecipeInputDTO } from "../model/recipe";
import { BaseDatabase } from "./BaseDatabase";

class RecipesDatabase extends BaseDatabase {
    db = "cookenu_recipes"

    getAllRecipes = async () => {
        const recipes = await RecipesDatabase.connection(this.db).select("*")
        return recipes
    }

    getRecipe = async (input: GetRecipeInputDTO) => {
        const recipe = await RecipesDatabase.connection(this.db).select("*").where("id", input.recipeId)
        return recipe
    }

    insertRecipe = async (newRecipe: Recipe) => {
        await RecipesDatabase.connection(this.db).insert(newRecipe)
    }
}

export default RecipesDatabase