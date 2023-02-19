import app from "./app";
import { followsRouter } from "./router/followsRouter";
import { recipesRouter } from "./router/recipesRouter";
import { userRouter } from "./router/userRouter";

app.use("/user/", userRouter);
app.use("/recipes/", recipesRouter);
app.use("/follows/", followsRouter);
