import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import cors from "cors";
import bodyParser from "body-parser";
import urlRoute from "../src/routes/url.route.js"

dotenv.config({
  path: "./env",
});
app.use(cors());

// Parse incoming request bodies
app.use(bodyParser.json());
app.use("/api",urlRoute)

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection FAILED !!!", err);
  });

app.get("/",(req,res)=>{
  res.status(200).send("Api Is working")
})
