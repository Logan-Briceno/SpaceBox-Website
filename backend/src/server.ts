import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Mongoose Connected!");
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:` + port);
        });
    })
    .catch(console.error);
