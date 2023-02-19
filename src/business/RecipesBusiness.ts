import RecipesDatabase from "../data/RecipesDatabase";
import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  EmptyList,
  MissingAuthorToken,
  MissingDescription,
  MissingInfosCreate,
  MissingRecipeId,
  MissingTitle,
  MissingUserToken,
  RecipeNotFound,
  UserNotFound,
} from "../error/customError";
import { Recipe } from "../model/recipe";
import { CreateRecipeInputDTO, GetRecipeInputDTO } from "../model/recipe";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";
import { TokenInputDTO } from "../model/user";

const recipesDatabase = new RecipesDatabase();
const userDatabase = new UserDatabase();
const idGenerator = new IdGenerator();
const tokenGenerator = new TokenGenerator();

class RecipesBusiness {
  getAllRecipes = async (input: TokenInputDTO): Promise<Recipe[]> => {
    try {
      if (!input.token) {
        throw new MissingUserToken();
      }

      const recipes = await recipesDatabase.getAllRecipes();

      if (recipes.length < 1) {
        throw new EmptyList();
      }

      tokenGenerator.tokenData(input.token);

      return await recipesDatabase.getAllRecipes();
    } catch (err: any) {
      throw new CustomError(err.statusCode, err.message);
    }
  };

  getRecipe = async (input: GetRecipeInputDTO) => {
    try {
      if (!input.token) {
        throw new MissingUserToken();
      }
      if (input.recipeId === ":recipe_id") {
        throw new MissingRecipeId();
      }

      const recipes = await recipesDatabase.getAllRecipes();
      const recipeExisting = recipes.filter(
        (recipe) => recipe.id === input.recipeId
      );

      if (recipeExisting.length < 1) {
        throw new RecipeNotFound();
      }

      tokenGenerator.tokenData(input.token);

      return await recipesDatabase.getRecipe(input);
    } catch (err: any) {
      throw new CustomError(err.statusCode, err.message);
    }
  };

  createRecipe = async (input: CreateRecipeInputDTO): Promise<void> => {
    try {
      if (!input.title && !input.description && !input.token) {
        throw new MissingInfosCreate();
      }
      if (!input.title) {
        throw new MissingTitle();
      }
      if (!input.description) {
        throw new MissingDescription();
      }
      if (!input.token) {
        throw new MissingAuthorToken();
      }

      const userId = tokenGenerator.tokenData(input.token);

      const users = await userDatabase.getAllUsers();
      const userExisting = users.filter(
        (user: { id: any }) => user.id === userId.id
      );

      if (userExisting.length < 1) {
        throw new UserNotFound();
      }

      const id = idGenerator.generateId();

      const newRecipe = new Recipe(
        id,
        input.title,
        input.description,
        new Date(),
        userId.id
      );

      await recipesDatabase.insertRecipe(newRecipe);
    } catch (err: any) {
      throw new CustomError(err.statusCode, err.message);
    }
  };
}

export default RecipesBusiness;
