import mongoose from "mongoose";
import { database } from "../../Config/env";

mongoose.connect(database.URI, {
	useNewUrlParser: true
})
	.then( db => console.log("DB is connected") )
	.catch( err => console.log("Error: ", err, database.URI) )