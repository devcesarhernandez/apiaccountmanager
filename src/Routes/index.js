import authRouter from "./Auth";
import categoryRouter from "./Category"
import platformRouter from "./Platform"
import accountRouter from "./Account"
import userRouter from "./User"

export default function (app) {
	app.use("/", authRouter)
	app.use("/categories", categoryRouter)
	app.use("/platforms", platformRouter)
	app.use("/accounts", accountRouter)
	app.use("/users", userRouter)
}